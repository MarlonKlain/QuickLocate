import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";
import { FONTS } from "../../utils/fonts";
import { hr, wr, isWeb } from "../../utils/sizes";

export const styles = StyleSheet.create({
  itemTextStyle: {
    fontFamily: FONTS.bold,
    fontSize: FONTS.textSize,
  },

  dropdown: {
    backgroundColor: COLORS.secondary,
    height: isWeb() ? hr("3%") : hr("4%"),
    width: isWeb() ? wr("10%") : wr("25%"),
    borderRadius: 7,
    marginHorizontal: hr("2%"),
    elevation: 3,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },

  placeholderStyle: {
    fontSize: FONTS.textSize,
    textAlign: "center",
    color: COLORS.textPrimaryColor,
    fontFamily: FONTS.bold,
  },

  selectedTextStyle: {
    fontSize: FONTS.textSize,
    color: COLORS.textPrimaryColor,
    fontFamily: FONTS.bold,
  },

  iconStyle: {
    width: 20,
    height: 20,
  },
});
