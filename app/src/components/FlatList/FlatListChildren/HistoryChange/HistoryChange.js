/**
 * HistoryChange component renders a pressable row displaying the date of a change.
 * When pressed, it navigates to a route based on the item's moved_at property,
 * passing the moved_date and moved_at as route parameters.
 *
 * @component
 * @param {Object} props
 * @param {Object} props.item - The history change item.
 * @param {string} props.item.moved_date - The date when the change occurred.
 * @param {string} props.item.moved_at - The timestamp or path used for navigation.
 * @returns {JSX.Element} The rendered HistoryChange component.
 */
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { styles } from "./HistoryChange.style";

export default function HistoryChange({ item }) {
  return (
    <Pressable
      onPress={() =>
        router.push({
          pathname: `${item.moved_at}`,
          params: {
            dateChange: item.moved_date,
            timestamp: item.moved_at,
          },
        })
      }
    >
      <View style={styles.row}>
        <Text style={styles.text}>{item.moved_date}</Text>
      </View>
    </Pressable>
  );
}
