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
