import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";
import { FONTS } from "../../utils/fonts";

export const flatListCell = StyleSheet.create({
  row: {
    padding: 15,
    backgroundColor: COLORS.backgroundContrast,
    marginVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    fontFamily: FONTS.regular,
    fontSize: FONTS.titleSize,
    color: COLORS.textSecondaryColor,
    flex: 1,
  },
  freeLocation: {
    flex: 1,
    width: 20,
    height: 20,
    backgroundColor: COLORS.positive,
    alignSelf: "center",
    borderRadius: 4,
    marginLeft: 5,
  },
});
