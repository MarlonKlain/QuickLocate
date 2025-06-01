import { COLORS } from "../../utils/colors";
import { FONTS } from "../../utils/fonts";
import { StyleSheet } from "react-native";
import { wr, hr, isWeb } from "../../utils/sizes";

export const styles = StyleSheet.create({
  headerRow: {
    width: isWeb() ? wr("95%") : wr("90%"),
    flexDirection: "row",
    backgroundColor: COLORS.primary,
    paddingVertical: isWeb() ? hr("1.5%") : hr("2%"),
    borderRadius: 7,
  },
  headerText: {
    flex: 1,
    fontFamily: FONTS.bold,
    color: COLORS.textPrimaryColor,
    textAlign: "center",
  },
});
