import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";
import { FONTS } from "../../utils/fonts";
import { logoutButtonStyle } from "../componentStyles/shared/LogoutButton.shared";

export const styles = StyleSheet.create({
  productContainer: {
    paddingHorizontal: 40,
    flex: 1,
    width: "100%",
    backgroundColor: COLORS.background,
  },
  addLocationContainer: {
    flex: 0.1,
    justifyContent: "center",
  },

  locationsTitleText: {
    color: COLORS.textPrimaryColor,
    backgroundColor: COLORS.primary,
    textAlign: "center",
    fontSize: FONTS.headerSize,
    paddingVertical: 10,
    fontFamily: FONTS.bold,
    borderRadius: 12,
  },
  locationsTitleTextContainer: {
    width: "100%",
    marginBottom: 10,
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
