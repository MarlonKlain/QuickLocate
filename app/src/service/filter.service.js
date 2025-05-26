import { getLocalData } from "../localStorage/asyncStorage";

export async function filter(filter, column, sorter) {
  try {
    const token = await getLocalData("token");
    const response = await fetch(
      `http://localhost:3000/filter?filter=${filter}&column=${column}&sorter=${sorter}`,
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
