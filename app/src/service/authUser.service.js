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
