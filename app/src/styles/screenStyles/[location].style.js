import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";
import { FONTS } from "../../utils/fonts";
import { flatListCell } from "../shared/Flatlist.shared.style";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
  },

  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "1%",
  },

  headerText: {
    fontFamily: FONTS.bold,
    fontSize: FONTS.headerSize,
  },

  itemsListHeaderContainer: {
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 7,
  },

  itemsListContainer: {
    flex: 1,
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
