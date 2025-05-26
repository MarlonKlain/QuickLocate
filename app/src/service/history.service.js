import { getLocalData } from "../localStorage/asyncStorage";

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
      },
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
