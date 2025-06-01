import { COLORS } from "../../utils/colors";
import { FONTS } from "../../utils/fonts";
import { StyleSheet } from "react-native";
import { hr, isWeb, wr } from "../../utils/sizes";

export const styles = StyleSheet.create({
  button: {
    marginBottom: isWeb() ? hr("2%") : hr("1.5%"),
    marginTop: isWeb() ? hr("1%") : hr("0.5%"),
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    width: isWeb() ? wr("15%") : wr("50%"),
    height: isWeb() ? hr("7%") : hr("8%"),
    justifyContent: "center",
    marginHorizontal: wr("2%"),
  },
  buttonText: {
    textAlign: "center",
    fontSize: hr("4%"),
    color: COLORS.textPrimaryColor,
    fontFamily: FONTS.bold,
  },
});
