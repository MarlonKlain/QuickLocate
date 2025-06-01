import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";
import { FONTS } from "../../utils/fonts";
import { isWeb, hr, wr } from "../../utils/sizes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  alreadyHaveAccount: {
    color: COLORS.textPrimaryColor,
    fontFamily: FONTS.bold,
    fontSize: isWeb() ? hr("2%") : hr("5%"),
    textAlign: "center",
  },

  buttonsContainer: {
    width: wr("100%"),
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: hr("1%"),
  },

  infosContainer: {
    backgroundColor: COLORS.primary,
    width: wr("100%"),
    height: hr("100%"),
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    paddingVertical: isWeb() ? hr("2%") : hr("5%"),
    alignItems: "center",
  },

  inputContainer: {
    flex: 1,
    marginTop: isWeb() ? hr("3%") : hr("3%"),
  },

  headerText: {
    color: COLORS.primary,
    fontFamily: FONTS.bold,
    fontSize: isWeb() ? hr("8%") : hr("8%"),
    textAlign: "center",
  },

  headerContainer: {
    height: hr("20%"),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.background,
    marginVertical: isWeb() ? hr("3%") : hr("6%"),
  },

  alreadyHaveAccount: {
    textAlign: "center",
    color: COLORS.textPrimaryColor,
    fontFamily: FONTS.bold,
    fontSize: FONTS.titleSize,
  },

  loginButton: {
    backgroundColor: COLORS.secondary,
    width: isWeb() ? wr("10%") : wr("40%"),
  },

  signUpButton: {
    backgroundColor: COLORS.positive,
    width: isWeb() ? wr("10%") : wr("40%"),
  },
});
