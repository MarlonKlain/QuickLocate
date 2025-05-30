import { getLocalData } from "../localStorage/asyncStorage";
import { URL } from "../utils/url";

/**
 * Filters data from the server based on the provided filter, column, and sorter.
 *
 * @async
 * @function
 * @param {string} filter - The filter criteria to apply.
 * @param {string} column - The column to filter or sort by.
 * @param {string} sorter - The sorting order or criteria.
 * @returns {Promise<{success: boolean, data?: any, message?: string}>} An object indicating success, filtered data if successful, or an error message.
 */
export async function filter(filter, column, sorter) {
  try {
    const token = await getLocalData("token");
    const response = await fetch(
      URL + `/filter?filter=${filter}&column=${column}&sorter=${sorter}`,
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
        message: result.message || "Failed to filter",
      };
    }

    return {
      success: true,
      data: result.data,
    };
  } catch (error) {
    return {
      success: false,
      message: `Failed to get filter response from the server. Error: ${error.message}`,
    };
  }
}
