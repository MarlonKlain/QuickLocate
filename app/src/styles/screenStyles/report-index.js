import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";
import { FONTS } from "../../utils/fonts";
import { logoutButtonStyle } from "../shared/LogoutButton.shared";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    alignItems: "center",
  },

  logoutButton: {
    ...logoutButtonStyle.logoutButton,
  },

  logoutButtonText: {
    fontSize: FONTS.textSize,
  },
});
