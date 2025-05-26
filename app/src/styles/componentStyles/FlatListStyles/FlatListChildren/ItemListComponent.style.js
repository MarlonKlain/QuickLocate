import { StyleSheet } from "react-native";
import { FONTS } from "../../../../utils/fonts";
import { flatListCell } from "../../shared/Flatlist.shared.style";
import { COLORS } from "../../../../utils/colors";

export const styles = StyleSheet.create({
  row: {
    ...flatListCell.row,
    flexDirection: "row",
  },
  text: {
    ...flatListCell.text,
  },
  freeLocation: {
    ...flatListCell.freeLocation,
  },
});
