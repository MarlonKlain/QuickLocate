import { View, Text, StyleSheet } from "react-native";
import { styles } from "../../../styles/componentStyles/FlatListStyles/FlatListChildren/HistoryChangeByDateComponent.style";
import { formatTheHistoryWithTime } from "../../../utils/formatDate";
export default function HistoryChangeByDateComponent({ item }) {
  return (
    <View style={styles.row}>
      <Text style={styles.text}>{item.item_code}</Text>
      <Text style={styles.text}>{item.partnumber}</Text>
      <Text style={styles.text}>{item.description}</Text>
      <Text style={styles.text}>{item.location ?? ""}</Text>
      <Text style={styles.text}>{formatTheHistoryWithTime(item.moved_at)}</Text>
    </View>
  );
}
