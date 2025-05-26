import { getLocalData } from "../localStorage/asyncStorage";

export async function getAllItemsAndFreeLocation() {
  try {
    const token = await getLocalData("token");
    const response = await fetch("http://localhost:3000/item", {
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

export async function getItemByCode(code) {
  try {
    const token = await getLocalData("token");
    const response = await fetch(`http://localhost:3000/item/by-code/${code}`, {
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

export async function updateLocation(code, newLocation) {
  try {
    const itemInformation = {
      code,
      newLocation,
    };
    const token = await getLocalData("token");
    const response = await fetch(`http://localhost:3000/item/update-location`, {
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

export async function getItemByLocation(location) {
  try {
    const token = await getLocalData("token");
    const response = await fetch(
      `http://localhost:3000/item/by-location/${location}`,
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

export async function getItemWithoutLocation() {
  try {
    const token = await getLocalData("token");
    const response = await fetch(`http://localhost:3000/item/not-addressed`, {
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
