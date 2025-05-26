import { Pressable, Text, View, StyleSheet } from "react-native";
import { styles } from "../../../styles/componentStyles/FlatListStyles/FlatListChildren/FreeLocation.style";

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
