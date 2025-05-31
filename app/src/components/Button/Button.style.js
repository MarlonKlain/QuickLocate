import { COLORS } from "../../utils/colors";
import { FONTS } from "../../utils/fonts";
import { StyleSheet } from "react-native";
import { hr, isWeb, wr } from "../../utils/sizes";

export const styles = StyleSheet.create({
  button: {
    marginBottom: isWeb() ? "8%" : "4%",
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    width: isWeb() ? wr("15%") : wr("50%"),
    height: isWeb() ? hr("7%") : hr("8%"),
    justifyContent: "center",
    marginHorizontal: "2%",
  },
  buttonText: {
    textAlign: "center",
    fontSize: hr("4%"),
    color: COLORS.textPrimaryColor,
    fontFamily: FONTS.bold,
  },
});
