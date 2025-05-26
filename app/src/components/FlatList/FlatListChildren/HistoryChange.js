import { router } from "expo-router";
import { Pressable, Text, View, StyleSheet } from "react-native";
import { styles } from "../../../styles/componentStyles/FlatListStyles/FlatListChildren/HistoryChange.style";

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
