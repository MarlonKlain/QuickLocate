import { StyleSheet } from "react-native";
import { FONTS } from "../../utils/fonts";
import { COLORS } from "../../utils/colors";
import { wr, hr, isWeb } from "../../utils/sizes";

export const styles = StyleSheet.create({
  inputField: {
    backgroundColor: COLORS.background,
    width: wr("85%"),
    height: hr("6.5%"),
    marginBottom: isWeb ? hr("2%") : hr("1%"),
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: COLORS.border,
  },
  textInput: {
    fontSize: hr("2.5%"),
    marginBottom: isWeb ? hr("0.5%") : hr("0.2%"),
    fontFamily: FONTS.bold,
    color: COLORS.textPrimaryColor,
  },
});
