import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";
import { FONTS } from "../../utils/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcomeContainer: {
    flex: 0.19,
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeText: {
    fontFamily: FONTS.bold,
    fontSize: 48,
    color: COLORS.primary,
  },
  loginContainer: {
    flex: 0.91,
    backgroundColor: COLORS.primary,
    borderTopRightRadius: 70,
    borderTopLeftRadius: 70,
  },
  inputContainer: {
    flex: 0.65,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
    justifyContent: "center",
  },
  textField: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    color: COLORS.textPrimaryColor,
    marginBottom: 5,
  },
  buttonContainer: {
    flex: 0.35,
    alignItems: "center",
  },
  alreadyHaveAccount: {
    textAlign: "center",
    color: COLORS.textPrimaryColor,
    fontFamily: FONTS.bold,
    fontSize: 20,
    marginBottom: 5,
  },
  loginButton: {
    backgroundColor: COLORS.positive,
  },
  signUpButton: {
    backgroundColor: COLORS.secondary,
  },
});
