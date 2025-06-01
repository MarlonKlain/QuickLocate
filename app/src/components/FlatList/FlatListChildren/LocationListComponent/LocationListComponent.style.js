import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../../../utils/colors";
import { FONTS } from "../../../../utils/fonts";
import { hr, isWeb, wr } from "../../../../utils/sizes";

export const styles = StyleSheet.create({
  card: {
    width: isWeb() ? wr("31%") : wr("28%"),
    height: isWeb() ? hr("10%") : hr("7%"),
    //cant be %
    margin: 5,
    backgroundColor: COLORS.backgroundContrast,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  cardText: {
    fontSize: isWeb() ? FONTS.headerSize : FONTS.titleSize,
    fontFamily: FONTS.bold,
    color: COLORS.primary,
  },
});
