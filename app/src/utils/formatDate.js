export function formatTheHistoryWithTime(timestamps) {
  const timestampsSplited = timestamps.split("T");
  const date = timestampsSplited[0];
  const time = timestampsSplited[1].split(".");
  const formatedTimeStamps = date + " " + time[0];
  return formatedTimeStamps;
}

export function formatTheHistoryWithoutTime(timestamps) {
  const timestampsSplited = timestamps.split("T");
  const date = timestampsSplited[0];
  return date;
}
