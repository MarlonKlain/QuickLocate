import { StyleSheet } from "react-native";
import { flatListCell } from "../../shared/flatlist.shared.style";

export const styles = StyleSheet.create({
  row: {
    ...flatListCell.row,
  },

  text: {
    ...flatListCell.text,
  },
});
