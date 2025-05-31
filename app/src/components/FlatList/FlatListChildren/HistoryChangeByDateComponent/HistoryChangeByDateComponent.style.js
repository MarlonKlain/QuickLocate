import { StyleSheet } from "react-native";
import { flatListCell } from "../../../../styles/shared/Flatlist.shared.style";

export const styles = StyleSheet.create({
  row: {
    ...flatListCell.row,
  },

  text: {
    ...flatListCell.text,
  },
});
