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

  useEffect(() => {
    const initializeAuth = async () => {
      await checkToken();
    };
    initializeAuth();
  }, []);

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
