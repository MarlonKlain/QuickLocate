import { StyleSheet } from "react-native";
import { flatListCell } from "../../../../styles/shared/Flatlist.shared.style";
import { hr, isWeb, wr } from "../../../../utils/sizes";
import { FONTS } from "../../../../utils/fonts";

export const styles = StyleSheet.create({
  row: {
    ...flatListCell.row,
    height: isWeb() ? wr("8%") : wr("25%"),
    justifyContent: "center",
    alignItems: "baseline",
    paddingHorizontal: isWeb() ? wr("0.8%") : wr("3%"),
  },

  text: {
    ...flatListCell.text,
    fontSize: isWeb() ? FONTS.headerSize : FONTS.textSize,
  },
});
