import { SafeAreaView, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useEffect, useState, useContext } from "react";
import { styles } from "../../src/styles/screenStyles/item-index.style";
import Input from "../../src/components/Input/Input";
import { COLORS } from "../../src/utils/colors";
import Button from "../../src/components/Button/Button";
import DropdownComponent from "../../src/components/Dropdown/Dropdown";
import FlatListComponent from "../../src/components/FlatList/FlatListComponent";
import {
  filterOptions,
  sorterOptions,
} from "../../src/components/Dropdown/filters";
import ItemListComponent from "../../src/components/FlatList/FlatListChildren/ItemListComponent/ItemListComponent";
import { getAllItemsAndFreeLocation } from "../../src/service/item.service";
import { filter } from "../../src/service/filter.service";
import { AuthContext } from "../../src/contexts/Auth.context";
import { showToast } from "../../src/components/Toast/Toast";

export default function Items() {
  const [itemsList, setItemsList] = useState([]);
  const [search, setSearch] = useState("");
  const [sorter, setSorter] = useState("");

  // Set "description" as the default filter
  const [column, setColumn] = useState("description");
  const [filterValue, setFilterValue] = useState(null);
  const [sorterValue, setSorterValue] = useState(null);
  const { logout } = useContext(AuthContext);

  /**
   * Resets all filter and sorting states to their default values and reloads the items list.
   * Fetches all items and free locations, updates the UI state accordingly, and handles errors.
   *
   * @async
   * @function cleanFilters
   * @returns {Promise<void>} Resolves when filters are reset and items are reloaded.
   * @throws {Error} Throws an error if the filters cannot be reset.
   */

  async function cleanFilters() {
    try {
      const response = await getAllItemsAndFreeLocation();
      if (response.success) {
        setItemsList(response.data);
        setSearch("");
        setColumn("description");
        setSorter("");
        setFilterValue(null);
        setSorterValue(null);
      } else {
        showToast("error", response.message);
      }
    } catch (error) {
      throw new Error(`Failed to reset the filters. Error: ${error.message}`);
    }
  }

  /**
   * Asynchronously loads the list of items and free locations.
   * Fetches data using `getAllItemsAndFreeLocation` and updates the items list state if successful.
   * Displays an error toast if the response is unsuccessful.
   * Throws an error if the request fails.
   * Used this method to prevent to use async syntax inside the useEffect
   *
   * @async
   * @function
   * @returns {Promise<void>} Resolves when the data is loaded and state is updated.
   */
  const loadData = async () => {
    try {
      const response = await getAllItemsAndFreeLocation();
      if (response.success) {
        setItemsList(response.data);
        return;
      } else {
        showToast("error", response.message);
        return;
      }
    } catch (error) {
      throw new Error(
        `Failed to load the list of items and free locations. Error: ${error.message}`
      );
    }
  };

  /**
   * Loads and filters items based on the provided search criteria, column, and sorter.
   * If a search term is provided, it calls the `filter` function and updates the items list.
   * Displays an error toast if the filter operation fails.
   *
   * @async
   * @function
   * @param {string} search - The search term to filter items.
   * @param {string} column - The column to apply the filter on.
   * @param {string} sorter - The sorting criteria.
   * @returns {Promise<void>} Resolves when the filtering and state update are complete.
   * @throws {Error} Throws an error if the filtering operation fails.
   */
  const loadFilter = async (search, column, sorter) => {
    try {
      if (search) {
        const response = await filter(search, column, sorter);
        if (response.success) {
          setItemsList(response.data);
          return;
        } else {
          showToast("error", response.message);
          return;
        }
      }
    } catch (error) {
      throw new Error(
        `Failed while filtering the result. Error: ${error.message}`
      );
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    loadFilter(search, column, sorter);
  }, [search, column, sorter]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* Search Bar */}
        <Button
          text={"LOGOUT"}
          onPress={() => logout()}
          additionalButtonStyle={styles.logoutButton}
          additionalTextStyle={styles.logoutButtonText}
        />
        <View style={styles.searchBarContainer}>
          <View style={styles.searchBar}>
            <Input
              value={search}
              onChangeText={setSearch}
              placeholder={"Search"}
              placeholderTextColor={COLORS.textSecondaryColor}
              //props to only consider the additionalInputStyle as the style
              //if not defined or set to false, it will complement the default style defined in the Input.style.js
              ignoreDefaultStyle={true}
              ignoreContainer={true}
              additionalInputStyle={styles.searchInput}
            ></Input>
            <Feather name="search" size={24} color={COLORS.primary} />
          </View>
        </View>
        <View style={styles.filters}>
          {/* Dropdown menu component */}
          <DropdownComponent
            filters={filterOptions}
            // Default text shown before selection
            label={"Filters"}
            // Updates column state when a filter is selected
            onSendValue={setColumn}
            value={filterValue}
            // Callback to update parent component's state
            setValue={setFilterValue}
          />
          <DropdownComponent
            filters={sorterOptions}
            label={"Sort"}
            onSendValue={setSorter}
            value={sorterValue}
            setValue={setSorterValue}
          />
          {/* Reset all filters to default */}
          <Button
            text={"Reset Filters"}
            disableDefaultStyle={true}
            additionalButtonStyle={styles.cleanFilter}
            additionalTextStyle={styles.resetFilterText}
            onPress={() => cleanFilters()}
          ></Button>
        </View>
        {/* FlatList with Table Layout */}
        <View style={styles.productContainer}>
          {/* Table Header */}
          <FlatListComponent
            data={itemsList}
            renderComponent={({ item }) => <ItemListComponent item={item} />}
          ></FlatListComponent>
        </View>
      </View>
    </SafeAreaView>
  );
}
