import { StyleSheet } from "react-native";
import { hr, wr, isWeb } from "../../utils/sizes";

export const logoutButtonStyle = StyleSheet.create({
  logoutButton: {
    width: isWeb() ? wr("10%") : wr("30%"),
    height: hr("5%"),
    alignSelf: "flex-end",
    marginTop: hr("4%"),
  },
});
