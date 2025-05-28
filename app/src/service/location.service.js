import { getLocalData } from "../localStorage/asyncStorage";

/**
 * Fetches all free locations from the server.
 *
 * Makes a GET request to the `/location/free` endpoint using a bearer token for authorization.
 *
 * @async
 * @function
 * @returns {Promise<{success: boolean, data?: any, message?: string}>}
 *   An object indicating the success status, the data (if successful), or an error message.
 */
export async function getAllFreeLocations() {
  try {
    const token = await getLocalData("token");
    const response = await fetch(`http://localhost:3000/location/free`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: result.message || "Failed to get all free locations",
      };
    }

    return {
      success: true,
      data: result.data,
    };
  } catch (error) {
    return {
      success: false,
      message: `Failed to get all free locations response from the server. Error: ${error.message}`,
    };
  }
}

/**
 * Fetches a list of locations from the server.
 *
 * @async
 * @function
 * @returns {Promise<{success: boolean, data?: any, message?: string}>}
 *   An object indicating the success status, the data if successful, or an error message if failed.
 */
export async function getLocations() {
  try {
    const token = await getLocalData("token");
    const response = await fetch(`http://localhost:3000/location`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: result.message || "Failed to get locations",
      };
    }

    return {
      success: true,
      data: result.data,
    };
  } catch (error) {
    return {
      success: false,
      message: `Failed to get locations response from the server. Error: ${error.message}`,
    };
  }
}
