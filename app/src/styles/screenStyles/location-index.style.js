import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";
import { FONTS } from "../../utils/fonts";
import { logoutButtonStyle } from "../shared/LogoutButton.shared";
import { hr, isWeb, wr } from "../../utils/sizes";

export const styles = StyleSheet.create({
  locationContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
  },

  locationsTitleText: {
    color: COLORS.textPrimaryColor,
    backgroundColor: COLORS.primary,
    textAlign: "center",
    fontSize: FONTS.headerSize,
    fontFamily: FONTS.bold,
    borderRadius: 7,
    paddingVertical: isWeb() ? hr("1.5%") : hr("2%"),
  },

  locationsTitleTextContainer: {
    width: isWeb() ? wr("95%") : wr("90%"),
    marginBottom: hr("0.5%"),
  },
  row: {
    justifyContent: "space-between",
  },

  logoutButton: {
    ...logoutButtonStyle.logoutButton,
  },

  logoutButtonText: {
    fontSize: FONTS.textSize,
  },
});
