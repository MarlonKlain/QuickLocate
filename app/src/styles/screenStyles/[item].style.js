import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";
import { FONTS } from "../../utils/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
  },
  infoContainer: {
    width: "100%",
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    marginTop: 20,
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
