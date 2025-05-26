import { COLORS } from "../../../utils/colors";
import { FONTS } from "../../../utils/fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerRow: {
    flexDirection: "row",
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 5,
  },
  headerText: {
    flex: 1,
    fontFamily: FONTS.bold,
    color: COLORS.textPrimaryColor,
    textAlign: "center",
  },
});
