/**
 * AuthContext provides authentication state and actions to the app.
 * @type {React.Context<{
 *   isAuthenticated: boolean,
 *   login: (username: string, password: string) => Promise<{success?: boolean, errorMessage?: string}>,
 *   logout: () => Promise<void>,
 *   loading: boolean,
 *   register: (userData: Object) => Promise<{message?: string, errorMessage?: string}>
 * }>}
 */

/**
 * AuthProvider component that wraps children with authentication context.
 * Handles authentication state, login, logout, registration, and token validation.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - The child components to wrap with AuthContext.
 * @returns {JSX.Element} AuthContext.Provider with authentication state and actions.
 */
import { createContext, useEffect, useState } from "react";
import {
  checkClientToken,
  loginService,
  registerService,
} from "../service/authUser.service";
import {
  storeLocally,
  deleteLocalData,
  getLocalData,
} from "../localStorage/asyncStorage";
import { router } from "expo-router";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // for startup loading

  /**
   * Initializes the authentication process by checking the validity of the current token.
   * This function should be called to ensure the user's authentication state is up to date.
   * @async
   * @returns {Promise<void>} Resolves when the token check is complete.
   */
  const initializeAuth = async () => {
    await checkToken();
  };

  /**
   * Asynchronously checks the validity of the stored authentication token.
   * - Retrieves the token from local storage.
   * - If no token is found, sets authentication state to false.
   * - If a token is found, verifies its validity via `checkClientToken`.
   *   - If valid, sets authentication state to true.
   *   - If invalid, deletes the token and sets authentication state to false.
   * - Handles errors by logging and setting authentication state to false.
   * - Sets loading state to false when finished.
   *
   * @async
   * @function checkToken
   * @returns {Promise<void>} Resolves when the token check process is complete.
   */
  async function checkToken() {
    try {
      const token = await getLocalData("token");
      if (!token) {
        setIsAuthenticated(false);
        return;
      }

      const result = await checkClientToken(token);
      if (result.success) {
        setIsAuthenticated(true);
      } else {
        await deleteLocalData("token");
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("Token check error:", error);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    initializeAuth();
  }, []);

  /**
   * Authenticates a user with the provided username and password.
   *
   * Calls the login service and, if successful, stores the authentication token locally
   * and updates the authentication state. Returns an object indicating success or an error message.
   *
   * @async
   * @param {string} username - The username of the user attempting to log in.
   * @param {string} password - The password of the user attempting to log in.
   * @returns {Promise<{success: true} | {errorMessage: string}>} An object indicating the result of the login attempt.
   * @throws {Error} Throws an error if the login process fails unexpectedly.
   */
  async function login(username, password) {
    try {
      const result = await loginService(username, password);

      if (!result.success) {
        return { errorMessage: result.message };
      }

      await storeLocally("token", result.data);
      setIsAuthenticated(true);
      return { success: true };
    } catch (error) {
      throw new Error(`Failed to login the user in the app. ${error.message}`);
    }
  }

  /**
   * Logs out the current user by removing the authentication token from local storage
   * and updating the authentication state.
   *
   * @async
   * @function logout
   * @throws {Error} Throws an error if the logout process fails.
   */
  async function logout() {
    try {
      await deleteLocalData("token");
      setIsAuthenticated(false);
    } catch (error) {
      throw new Error(
        `Failed to logout the user from the app. ${error.message}`
      );
    }
  }

  /**
   * Registers a new user with the provided user data.
   *
   * @async
   * @param {Object} userData - The registration data for the new user.
   * @returns {Promise<Object>} An object containing either an error message or a success message.
   * @throws {Error} Throws an error if registration fails due to an exception.
   */
  async function register(userData) {
    try {
      const result = await registerService(userData);
      if (!result.success) {
        return {
          errorMessage: result.message,
        };
      } else {
        router.push("./login");
      }
      return { message: "Registration successful" };
    } catch (error) {
      throw new Error(`Failed to register. Error: ${error.message}`);
    }
  }
  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, loading, register }}
    >
      {children}
    </AuthContext.Provider>
  );
}
