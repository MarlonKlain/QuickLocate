import { StyleSheet } from "react-native";
import { FONTS } from "../../utils/fonts";
import { COLORS } from "../../utils/colors";

export const styles = StyleSheet.create({
  inputField: {
    backgroundColor: COLORS.background,
    width: "auto",
    height: 51,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: COLORS.border,
    paddingHorizontal: 5,
  },
  textInput: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    color: COLORS.textPrimaryColor,
    marginBottom: 5,
  },
});
