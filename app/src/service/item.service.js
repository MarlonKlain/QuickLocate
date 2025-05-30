import { getLocalData } from "../localStorage/asyncStorage";
import { URL } from "../utils/url";

/**
 * Fetches all items and available free locations from the server.
 *
 * @async
 * @function
 * @returns {Promise<{success: boolean, data?: any, message?: string}>}
 *   An object containing the success status, data if successful, or an error message if failed.
 */
export async function getAllItemsAndFreeLocation() {
  try {
    const token = await getLocalData("token");
    const response = await fetch(URL + "/item", {
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
        message:
          result.message || "Failed to get list of items and free locations",
      };
    }

    return {
      success: true,
      data: result.data,
    };
  } catch (error) {
    return {
      success: false,
      message: `Failed to get change list of items and free locations response from the server. Error: ${error.message}`,
    };
  }
}

/**
 * Retrieves an item by its code from the server.
 *
 * @async
 * @function getItemByCode
 * @param {string} code - The unique code of the item to retrieve.
 * @returns {Promise<{success: boolean, data?: any, message?: string}>}
 * An object indicating the success status, the item data if successful, or an error message if failed.
 */
export async function getItemByCode(code) {
  try {
    const token = await getLocalData("token");
    const response = await fetch(URL + `/item/by-code/${code}`, {
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
        message: result.message || "Failed to get item by code",
      };
    }

    return {
      success: true,
      data: result.data,
    };
  } catch (error) {
    return {
      success: false,
      message: `Failed to get item by code response from the server. Error: ${error.message}`,
    };
  }
}

/**
 * Updates the location of an item identified by its code.
 *
 * Sends a PUT request to the server to update the item's location.
 *
 * @async
 * @param {string} code - The unique code identifying the item.
 * @param {string} newLocation - The new location to assign to the item.
 * @returns {Promise<{success: boolean, data?: any, message?: string}>}
 * An object indicating the success status, updated data if successful, or an error message if failed.
 */
export async function updateLocation(code, newLocation) {
  try {
    const itemInformation = {
      code,
      newLocation,
    };
    const token = await getLocalData("token");
    const response = await fetch(URL + `/item/update-location`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(itemInformation),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: result.message || "Failed to update the location",
      };
    }

    return {
      success: true,
      data: result.data,
    };
  } catch (error) {
    return {
      success: false,
      message: `Failed to get update location response from the server. Error: ${error.message}`,
    };
  }
}

/**
 * Retrieves items by their location from the server.
 *
 * @async
 * @function
 * @param {string} location - The location identifier to search items by.
 * @returns {Promise<{success: boolean, data?: any, message?: string}>}
 * An object indicating the success status, the data if successful, or an error message if failed.
 */
export async function getItemByLocation(location) {
  try {
    const token = await getLocalData("token");
    const response = await fetch(URL + `/item/by-location/${location}`, {
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
        message: result.message || "Failed to get items by the location",
      };
    }

    return {
      success: true,
      data: result.data,
    };
  } catch (error) {
    return {
      success: false,
      message: `Failed to get items by the location response from the server. Error: ${error.message}`,
    };
  }
}

/**
 * Fetches items that do not have an associated location from the server.
 *
 * @async
 * @function getItemWithoutLocation
 * @returns {Promise<{success: boolean, data?: any, message?: string}>}
 *   An object indicating the success status, the data if successful, or an error message if failed.
 */
export async function getItemWithoutLocation() {
  try {
    const token = await getLocalData("token");
    const response = await fetch(URL + `/item/not-addressed`, {
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
        message: result.message || "Failed to get items without location",
      };
    }

    return {
      success: true,
      data: result.data,
    };
  } catch (error) {
    return {
      success: false,
      message: `Failed to get items without location response from the server. Error: ${error.message}`,
    };
  }
}
