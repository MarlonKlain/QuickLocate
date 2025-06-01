import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";
import { FONTS } from "../../utils/fonts";
import { hr, wr, isWeb } from "../../utils/sizes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  welcomeContainer: {
    height: hr("20%"),
    width: wr("100%"),
    alignItems: "center",
    justifyContent: "center",
  },

  welcomeText: {
    fontFamily: FONTS.bold,
    fontSize: hr("10%"),
    color: COLORS.primary,
  },

  loginContainer: {
    height: hr("80%"),
    width: wr("100%"),
    backgroundColor: COLORS.primary,
    borderTopRightRadius: 70,
    borderTopLeftRadius: 70,
    alignItems: "center",
    paddingTop: hr("10%"),
  },

  inputContainer: {
    height: hr("30%"),
    width: isWeb() ? wr("95%") : wr("90%"),
    justifyContent: "center",
    alignItems: "center",
  },

  textField: {
    fontSize: hr("5%"),
    fontFamily: FONTS.bold,
    color: COLORS.textPrimaryColor,
  },

  buttonContainer: {
    height: hr("50"),
    width: wr("90%"),
    alignItems: "center",
    marginTop: hr("5%"),
  },

  alreadyHaveAccount: {
    textAlign: "center",
    color: COLORS.textPrimaryColor,
    fontFamily: FONTS.bold,
    fontSize: isWeb() ? hr("2%") : hr("2.5%"),
  },

  loginButton: {
    backgroundColor: COLORS.positive,
  },

  signUpButton: {
    backgroundColor: COLORS.secondary,
  },
});
