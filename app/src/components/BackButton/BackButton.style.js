import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";
import { isWeb } from "../../utils/sizes";

export const styles = StyleSheet.create({
  backButton: {
    backgroundColor: COLORS.primary,
    alignSelf: "flex-start",
    borderRadius: 20,
    margin: isWeb() ? "2%" : "5%",
    marginTop: isWeb() ? "2%" : "8%",
  },
});
