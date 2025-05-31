import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";
import { FONTS } from "../../utils/fonts";
import { logoutButtonStyle } from "../shared/LogoutButton.shared";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 40,
  },
  logoutButton: {
    ...logoutButtonStyle.logoutButton,
  },
  logoutButtonText: {
    fontSize: FONTS.textSize,
  },
});
