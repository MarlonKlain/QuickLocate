import { StyleSheet } from "react-native";
import { FONTS } from "../../../../utils/fonts";
import { COLORS } from "../../../../utils/colors";

export const styles = StyleSheet.create({
  locationHistory: {
    fontSize: FONTS.titleSize,
    marginRight: 5,
    fontFamily: FONTS.bold,
    backgroundColor: COLORS.background,
    padding: 5,
    width: "20%",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 5,
    borderColor: COLORS.border,
    borderWidth: 1,
  },
  dateTime: {
    fontSize: FONTS.titleSize,
    justifyContent: "center",
    alignSelf: "center",
  },
});
