import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";
import { FONTS } from "../../utils/fonts";
import { flatListCell } from "../componentStyles/shared/Flatlist.shared.style";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: COLORS.background,
  },
  headerContainer: {
    flex: 0.15,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontFamily: FONTS.bold,
    fontSize: FONTS.headerSize,
  },
  itemsList: {
    flex: 1,
    width: "100%",
  },
  itemsListHeaderContainer: {
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 5,
    padding: 5,
    width: "100%",
  },
  itemsListHeaderText: {
    width: "25%",
    color: COLORS.textPrimaryColor,
    fontFamily: FONTS.bold,
    paddingVertical: 10,
    fontSize: FONTS.titleSize,
    textAlign: "center",
  },
  row: {
    ...flatListCell.row,
    flexDirection: "row",
  },
  cell: {
    ...flatListCell.row,
  },
  freeLocation: {
    ...flatListCell.freeLocation,
  },
});
