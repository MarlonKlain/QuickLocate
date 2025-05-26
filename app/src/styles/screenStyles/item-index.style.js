import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";
import { FONTS } from "../../utils/fonts";
import { logoutButtonStyle } from "../componentStyles/shared/LogoutButton.shared";
import { containerStyle } from "../componentStyles/shared/container.shared.styles";

export const styles = StyleSheet.create({
  container: {
    ...containerStyle.container,
  },
  searchBarContainer: {
    width: "100%",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.backgroundContrast,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.primary,
    elevation: 3,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  dropdownButton: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  cleanFilter: {
    backgroundColor: COLORS.secondary,
    height: 30,
    width: 110,
    borderRadius: 10,
    paddingHorizontal: 8,
    marginHorizontal: 8,
    elevation: 3,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    justifyContent: "center",
  },
  searchInput: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
    fontSize: FONTS.titleSize,
    color: COLORS.textSecondaryColor,
  },
  searchIconContainer: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.backgroundContrast,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  productContainer: {
    flex: 1,
    width: "100%",
  },

  filters: {
    marginVertical: 20,
    flex: 0.05,
    flexDirection: "row",
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
