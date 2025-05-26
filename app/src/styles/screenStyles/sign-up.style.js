import { StyleSheet, Platform } from "react-native";
import { COLORS } from "../../utils/colors";
import { FONTS } from "../../utils/fonts";

export const styles = StyleSheet.create({
  alreadyHaveAccount: {
    color: COLORS.textPrimaryColor,
    fontFamily: FONTS.bold,
    fontSize: 14,
    marginBottom: 5,
    textAlign: "center",
  },
  buttonsContainer: {
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  container: {
    flex: 1,
  },
  infosContainer: {
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    paddingTop: 15,
    paddingBottom: 40,
    flexGrow: 1,
    minHeight: "100%",
  },
  scrollView: {
    flex: 1,
    ...Platform.select({
      web: {
        overflowX: "hidden",
      },
    }),
  },
  scrollContent: {
    flexGrow: 1,
  },
  inputContainer: {
    flex: 1,
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },

  outsideText: {
    color: COLORS.primary,
    fontFamily: FONTS.bold,
    fontSize: 48,
    textAlign: "center",
  },
  outsideTextContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    backgroundColor: COLORS.background,
  },
  alreadyHaveAccount: {
    textAlign: "center",
    color: COLORS.textPrimaryColor,
    fontFamily: FONTS.bold,
    fontSize: FONTS.titleSize,
    marginBottom: 5,
  },
  loginButton: {
    backgroundColor: COLORS.secondary,
    width: 150,
  },
  signUpButton: {
    backgroundColor: COLORS.positive,
    width: 150,
  },
});
