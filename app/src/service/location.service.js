import { getLocalData } from "../localStorage/asyncStorage";

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
