import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";
import { isWeb, wr, hr } from "../../utils/sizes";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    width: isWeb() ? wr("95%") : wr("90%"),
    alignItems: "center",
  },

  infoContainer: {
    width: wr("95%"),
    height: hr("90%"),
  },

  buttonContainer: {
    width: wr("90%"),
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
