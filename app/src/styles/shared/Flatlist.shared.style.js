import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";
import { FONTS } from "../../utils/fonts";
import { isWeb, hr, wr } from "../../utils/sizes";

export const flatListCell = StyleSheet.create({
  row: {
    width: isWeb() ? wr("95%") : wr("90%"),
    height: isWeb() ? wr("3%") : wr("10%"),
    backgroundColor: COLORS.backgroundContrast,
    marginVertical: 5,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: "center",
  },
  text: {
    fontFamily: FONTS.regular,
    fontSize: FONTS.textSize,
    color: COLORS.textSecondaryColor,
  },
  freeLocation: {
    flex: 1,
    width: 20,
    height: 20,
    backgroundColor: COLORS.positive,
    alignSelf: "center",
    borderRadius: 7,
    marginLeft: 5,
  },
});
