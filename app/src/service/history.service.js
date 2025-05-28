import { getLocalData } from "../localStorage/asyncStorage";

/**
 * Fetches the change history from the server.
 *
 * @async
 * @function getHistoryChange
 * @returns {Promise<{success: boolean, data?: any, message?: string}>}
 *   An object indicating the success status, the data if successful, or an error message if failed.
 */
export async function getHistoryChange() {
  try {
    const token = await getLocalData("token");
    const response = await fetch(`http://localhost:3000/history`, {
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
        message: result.message || "Failed to get history change",
      };
    }

    return {
      success: true,
      data: result.data,
    };
  } catch (error) {
    return {
      success: false,
      message: `Failed to get change history response from the server. Error: ${error.message}`,
    };
  }
}

/**
 * Fetches the change history for a specific date from the server.
 *
 * @async
 * @param {string} date - The date for which to retrieve the change history (format: YYYY-MM-DD).
 * @returns {Promise<{success: boolean, data?: any, message?: string}>} An object indicating success or failure, and containing the data or error message.
 */
export async function getHistoryChangeByDate(date) {
  try {
    const token = await getLocalData("token");
    const response = await fetch(
      `http://localhost:3000/history/by-date/${date}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: result.message || "Failed to get history change by date",
      };
    }

    return {
      success: true,
      data: result.data,
    };
  } catch (error) {
    return {
      success: false,
      message: `Failed to get change history by date response from the server. Error: ${error.message}`,
    };
  }
}
