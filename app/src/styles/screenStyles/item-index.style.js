import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";
import { FONTS } from "../../utils/fonts";
import { logoutButtonStyle } from "../shared/LogoutButton.shared";
import { containerStyle } from "../shared/Container.shared.styles";
import { isWeb, wr, hr } from "../../utils/sizes";

export const styles = StyleSheet.create({
  container: {
    ...containerStyle.container,
    alignItems: "center",
  },

  searchBarContainer: {
    width: wr("100%"),
    height: isWeb() ? hr("7%") : hr("8%"),
    alignItems: "center",
  },

  searchBar: {
    width: isWeb() ? wr("50%") : wr("90%"),
    height: isWeb() ? hr("5%") : hr("7%"),
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.backgroundContrast,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: COLORS.primary,
    elevation: 3,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },

  searchInput: {
    flex: 1,
    paddingHorizontal: isWeb() ? wr("1%") : wr("4%"),
    fontSize: FONTS.titleSize,
    color: COLORS.textSecondaryColor,
  },

  searchIconContainer: {
    backgroundColor: COLORS.backgroundContrast,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },

  filters: {
    width: wr("100%"),
    margin: hr("2%"),
    flexDirection: "row",
    justifyContent: "center",
  },

  cleanFilter: {
    backgroundColor: COLORS.secondary,
    height: isWeb() ? hr("3%") : hr("4%"),
    width: isWeb() ? wr("10%") : wr("25%"),
    borderRadius: 7,
    marginHorizontal: hr("2%"),
    elevation: 3,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    justifyContent: "center",
  },

  productContainer: {
    flex: 1,
    width: isWeb() ? wr("95%") : wr("90%"),
  },

  resetFilterText: {
    textAlign: "center",
    color: COLORS.textPrimaryColor,
    fontFamily: FONTS.bold,
    fontSize: FONTS.textSize,
  },

  logoutButton: {
    ...logoutButtonStyle.logoutButton,
  },

  logoutButtonText: {
    fontSize: FONTS.textSize,
  },
});
