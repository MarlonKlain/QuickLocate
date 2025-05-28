/**
 * A React Native component that displays a location history entry with its corresponding timestamp.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.item - The location history item to display.
 * @param {string} props.item.location - The name of the location.
 * @param {string|Date} props.item.moved_at - The date and time when the location was recorded.
 * @returns {JSX.Element} The rendered component showing the location and formatted date/time.
 */
import { View, Text } from "react-native";
import { styles } from "../../../styles/componentStyles/FlatListStyles/FlatListChildren/LocationHistoryComponent.style";
import { formatTheHistoryWithTime } from "../../../utils/formatDate";

export default function LocationHistoryComponent({ item }) {
  return (
    <View style={{ flex: 1, flexDirection: "row", marginBottom: 5 }}>
      <Text style={styles.locationHistory}>{item.location + ":"}</Text>
      <Text style={styles.dateTime}>
        {formatTheHistoryWithTime(item.moved_at)}
      </Text>
    </View>
  );
}
