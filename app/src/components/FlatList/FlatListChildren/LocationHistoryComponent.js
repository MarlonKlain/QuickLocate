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
