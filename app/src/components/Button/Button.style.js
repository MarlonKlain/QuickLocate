import { COLORS } from "../../utils/colors";
import { FONTS } from "../../utils/fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    marginBottom: 20,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    width: 274,
    height: 59,
    justifyContent: "center",
    marginHorizontal: "2%",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 30,
    color: COLORS.textPrimaryColor,
    fontFamily: FONTS.bold,
  },
});
