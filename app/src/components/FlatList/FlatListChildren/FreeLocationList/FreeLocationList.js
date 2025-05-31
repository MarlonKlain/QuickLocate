/**
 * Renders a selectable list item for a free location.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {Object} props.item - The item object containing location data.
 * @param {string} props.item.location - The location name to display.
 * @param {Function} props.setLocation - Function to set the selected location.
 * @param {Function} props.onClose - Function to close the list/modal after selection.
 * @returns {JSX.Element} The rendered component.
 */
import { Pressable, Text, View } from "react-native";
import { styles } from "./FreeLocation.style";

export default function FreeLocationList({ item, setLocation, onClose }) {
  return (
    <Pressable
      onPress={() => {
        setLocation(item.location);
        onClose();
      }}
    >
      <View style={styles.row}>
        <Text style={styles.text}>{item.location}</Text>
      </View>
    </Pressable>
  );
}
