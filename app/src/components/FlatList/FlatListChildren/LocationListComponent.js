import { Pressable, View, Text } from "react-native";
import { router } from "expo-router";
import { styles } from "../../../styles/componentStyles/FlatListStyles/FlatListChildren/LocationListComponent.style";

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
