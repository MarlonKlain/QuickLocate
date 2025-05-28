import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { styles } from "../../src/styles/screenStyles/[location].style";
import BackButton from "../../src/components/BackButton";
import FlatListComponent from "../../src/components/FlatList/FlatListComponent";
import ItemListComponent from "../../src/components/FlatList/FlatListChildren/ItemListComponent";
import {
  getItemByLocation,
  getItemWithoutLocation,
} from "../../src/service/item.service";
import { showToast } from "../../src/components/Toast/Toast";

export default function ItemsByLocationScreen() {
  const [itemsByLocation, setItemsByLocation] = useState([]);
  const { location } = useLocalSearchParams();

  /**
   * Loads items based on the provided location.
   * If the location is not "Not addressed", fetches items for that location.
   * Otherwise, fetches items without a location.
   * Updates the state with the fetched items or shows an error toast on failure.
   *
   * @async
   * @function
   * @param {string} location - The location to fetch items for.
   * @returns {Promise<void>} Resolves when the data is loaded and state is updated.
   * @throws {Error} Throws an error if data loading fails.
   */
  const loadData = async (location) => {
    try {
      if (location != "Not addressed") {
        const response = await getItemByLocation(location);
        if (response.success) {
          setItemsByLocation(response.data);
          return;
        } else {
          showToast("error", response.message);
          return;
        }
      } else {
        const response = await getItemWithoutLocation();
        if (response.success) {
          setItemsByLocation(response.data);
          return;
        } else {
          showToast("error", response.message);
          return;
        }
      }
    } catch (error) {
      throw new Error(`Failed to load the data. Error: ${error.message}`);
    }
  };

  useEffect(() => {
    loadData(location);
  }, [location]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <BackButton onPress={router.back} />
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Lista de items da localização:</Text>
          <Text style={styles.headerText}>{location}</Text>
        </View>
        <View style={styles.itemsList}>
          <FlatListComponent
            data={itemsByLocation}
            renderComponent={({ item }) => <ItemListComponent item={item} />}
          ></FlatListComponent>
        </View>
      </View>
    </SafeAreaView>
  );
}
