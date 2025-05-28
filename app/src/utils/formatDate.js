/**
 * Formats an ISO 8601 timestamp string into a human-readable date and time string.
 *
 * @param {string} timestamps - The ISO 8601 timestamp string (e.g., "2024-06-10T14:23:45.123Z").
 * @returns {string} The formatted date and time string in "YYYY-MM-DD HH:MM:SS" format.
 */
export function formatTheHistoryWithTime(timestamps) {
  const timestampsSplited = timestamps.split("T");
  const date = timestampsSplited[0];
  const time = timestampsSplited[1].split(".");
  const formatedTimeStamps = date + " " + time[0];
  return formatedTimeStamps;
}

/**
 * Formats an ISO 8601 timestamp string by removing the time component,
 * returning only the date part (YYYY-MM-DD).
 *
 * @param {string} timestamps - The ISO 8601 timestamp string to format.
 * @returns {string} The date part of the timestamp in YYYY-MM-DD format.
 */
export function formatTheHistoryWithoutTime(timestamps) {
  const timestampsSplited = timestamps.split("T");
  const date = timestampsSplited[0];
  return date;
}
