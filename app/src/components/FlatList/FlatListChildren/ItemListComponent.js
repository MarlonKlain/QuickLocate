/**
 * Renders a list item component for a FlatList.
 *
 * Displays item details such as code, part number, description, and location.
 * If the item has a `code`, the row is pressable and navigates to a route based on the code on long press.
 * Otherwise, displays a non-pressable row with a placeholder for free locations.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.item - The item data to display.
 * @param {string} [props.item.code] - The unique code for the item. If present, enables navigation.
 * @param {string} [props.item.partnumber] - The part number of the item.
 * @param {string} [props.item.description] - The description of the item.
 * @param {string} props.item.location - The location of the item.
 * @returns {JSX.Element} The rendered list item component.
 */
import { Pressable, View, Text } from "react-native";
import { styles } from "../../../styles/componentStyles/FlatListStyles/FlatListChildren/ItemListComponent.style";
import { router } from "expo-router";

export default function ItemListComponent({ item }) {
  return item.code ? (
    <Pressable onLongPress={() => router.push(`./${item.code}`)}>
      <View style={styles.row}>
        <Text style={styles.text}>{item.code}</Text>
        <Text style={styles.text}>{item.partnumber ?? ""}</Text>
        <Text style={styles.text}>{item.description ?? ""}</Text>
        <Text style={styles.text}>{item.location}</Text>
      </View>
    </Pressable>
  ) : (
    <View style={styles.row}>
      <View style={styles.freeLocation} />
      <Text style={styles.text}>{item.partnumber ?? ""}</Text>
      <Text style={styles.text}>{item.description ?? ""}</Text>
      <Text style={styles.text}>{item.location}</Text>
    </View>
  );
}
