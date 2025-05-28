/**
 * Authenticates a user by sending their credentials to the server.
 *
 * @async
 * @function loginService
 * @param {string} username - The username of the user attempting to log in.
 * @param {string} password - The password of the user.
 * @returns {Promise<{success: boolean, data?: any, message?: string}>} An object indicating the success status, user data if successful, or an error message if failed.
 */
export async function loginService(username, password) {
  try {
    const userData = {
      username,
      password,
    };
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const result = await response.json();
    if (!response.ok) {
      return {
        success: false,
        message: result.message || "Login failed",
      };
    }
    return {
      success: true,
      data: result.data,
    };
  } catch (error) {
    return {
      success: false,
      message: `Failed to get login response from the server. Error: ${error.message}`,
    };
  }
}

/**
 * Registers a new user by sending user data to the server.
 *
 * @async
 * @function registerService
 * @param {Object} userData - The user data to register with (e.g., { username, password, email }).
 * @returns {Promise<Object>} An object indicating the result of the registration:
 *   - If successful: { success: true, data: result }
 *   - If failed: { success: false, message: string }
 */
export async function registerService(userData) {
  try {
    const response = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: result.message || "Registration failed",
      };
    }

    return {
      success: true,
      data: result,
    };
  } catch (error) {
    return {
      success: false,
      message: `Failed to get register response from the server. Error: ${error.message}`,
    };
  }
}

/**
 * Checks the validity of a client token by sending it to the server.
 *
 * @async
 * @function checkClientToken
 * @param {string} token - The client token to be validated.
 * @returns {Promise<{success: boolean, data?: any, message?: string}>}
 * An object indicating whether the token is valid. If invalid, includes an error message.
 */
export async function checkClientToken(token) {
  try {
    const response = await fetch("http://localhost:3000/check-token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(token),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: result.message || "Token invalid",
      };
    }

    return {
      success: true,
      data: result,
    };
  } catch (error) {
    return {
      success: false,
      message: `Token check failed: ${error.message}`,
    };
  }
}
