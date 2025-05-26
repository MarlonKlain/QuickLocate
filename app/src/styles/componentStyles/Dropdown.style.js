import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";
import { FONTS } from "../../utils/fonts";

export const styles = StyleSheet.create({
  itemTextStyle: {
    fontFamily: FONTS.bold,
    fontSize: FONTS.titleSize,
  },
  dropdown: {
    backgroundColor: COLORS.secondary,
    height: 30,
    width: 110,
    borderRadius: 10,
    paddingHorizontal: 8,
    marginHorizontal: 8,
    elevation: 3,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  icon: {
    marginRight: 5,
  },
  label: {
    backgroundColor: COLORS.secondary,
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: FONTS.textSize,
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
  inputSearchStyle: {
    height: 40,
    fontSize: FONTS.textSize,
  },
});
