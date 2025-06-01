import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";
import { isWeb, wr, hr } from "../../utils/sizes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
  },

  infoContainer: {
    width: isWeb() ? wr("95%") : wr("90%"),
    height: hr("90%"),
    alignItems: "center",
  },

  buttonContainer: {
    width: isWeb() ? wr("95%") : wr("90%"),
    flexDirection: "row",
    justifyContent: "center",
  },

  confirmButton: {
    backgroundColor: COLORS.positive,
  },

  cancelButton: {
    backgroundColor: COLORS.negative,
  },

  inputLabelText: {
    color: COLORS.textSecondaryColor,
  },
});
