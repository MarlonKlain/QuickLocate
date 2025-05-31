/**
 * LocationListComponent renders a pressable card for a location item.
 * When pressed, it navigates to a screen showing all items located at addresses
 * starting with the selected character, or "Not addressed" if the character is missing.
 *
 * @component
 * @param {Object} props
 * @param {Object} props.item - The location item to display.
 * @param {string} [props.item.first_character] - The first character of the address, or undefined if not addressed.
 * @returns {JSX.Element} The rendered component.
 */
import { Pressable, View, Text } from "react-native";
import { router } from "expo-router";
import { styles } from "./LocationListComponent.style";

export default function LocationListComponent({ item }) {
  return (
    // When a location is pressed, opens a screen showing all items
    // located at addresses starting with the selected character
    <Pressable
      onPress={() => {
        if (!item.first_character) {
          const notAddressed = "Not addressed";
          return router.push(`./${notAddressed}`);
        } else {
          return router.push(`./${item.first_character}`);
        }
      }}
    >
      <View style={styles.card}>
        <Text style={styles.cardText}>
          {item.first_character || "Not addressed"}
        </Text>
      </View>
    </Pressable>
  );
}
