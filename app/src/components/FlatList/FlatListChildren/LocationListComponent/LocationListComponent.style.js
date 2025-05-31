import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../../../utils/colors";
import { FONTS } from "../../../../utils/fonts";

const screenWidth = Dimensions.get("window").width;
const cardMargin = 10;
const cardWidth = screenWidth / 3 - cardMargin * 6;

export const styles = StyleSheet.create({
  card: {
    width: cardWidth,
    backgroundColor: COLORS.backgroundContrast,
    margin: cardMargin,
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  cardText: {
    fontSize: FONTS.titleSize,
    fontFamily: FONTS.bold,
    color: COLORS.primary,
  },
});
