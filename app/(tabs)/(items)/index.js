import { SafeAreaView, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useEffect, useState, useContext } from "react";
import { styles } from "../../src/styles/screenStyles/item-index.style";
import Input from "../../src/components/Input";
import { COLORS } from "../../src/utils/colors";
import Button from "../../src/components/Button";
import DropdownComponent from "../../src/components/Dropdown/Dropdown";
import FlatListComponent from "../../src/components/FlatList/FlatListComponent";
import {
  filterOptions,
  sorterOptions,
} from "../../src/components/Dropdown/filters";
import ItemListComponent from "../../src/components/FlatList/FlatListChildren/ItemListComponent";
import { getAllItemsAndFreeLocation } from "../../src/service/item.service";
import { filter } from "../../src/service/filter.service";
import { AuthContext } from "../../src/contexts/Auth.context";

export default function Items() {
  const [itemsList, setItemsList] = useState([]);
  const [search, setSearch] = useState("");
  const [sorter, setSorter] = useState("");

  // Set "description" as the default filter
  const [column, setColumn] = useState("description");
  const [filterValue, setFilterValue] = useState(null);
  const [sorterValue, setSorterValue] = useState(null);
  const { logout } = useContext(AuthContext);

  function cleanFilters() {
    getAllItemsAndFreeLocation().then((response) =>
      setItemsList(response.data)
    );
    setSearch("");
    setColumn("description");
    setSorter("");
    setFilterValue(null);
    setSorterValue(null);
  }

  useEffect(() => {
    getAllItemsAndFreeLocation().then((response) =>
      setItemsList(response.data)
    );
  }, []);

  useEffect(() => {
    if (search) {
      filter(search, column, sorter).then((response) =>
        setItemsList(response.data)
      );
    }
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
