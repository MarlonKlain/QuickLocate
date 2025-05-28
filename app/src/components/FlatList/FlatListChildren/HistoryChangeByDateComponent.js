/**
 * Component to render a single history change item by date in a row format.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {Object} props.item - The history change item to display.
 * @param {string} props.item.item_code - The code of the item.
 * @param {string} props.item.partnumber - The part number of the item.
 * @param {string} props.item.description - The description of the item.
 * @param {string} [props.item.location] - The location of the item (optional).
 * @param {string|Date} props.item.moved_at - The date and time when the item was moved.
 * @returns {JSX.Element} The rendered component displaying the item's details.
 */
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
