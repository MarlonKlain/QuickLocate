import { View, Text, SafeAreaView } from "react-native";
import { useContext, useEffect, useState } from "react";
import { styles } from "../../src/styles/screenStyles/location-index.style";
import FlatListComponent from "../../src/components/FlatList/FlatListComponent";
import LocationListComponent from "../../src/components/FlatList/FlatListChildren/LocationListComponent";
import { getLocations } from "../../src/service/location.service";
import Button from "../../src/components/Button";
import { AuthContext } from "../../src/contexts/Auth.context";
import { showToast } from "../../src/components/Toast/Toast";

export default function Locations() {
  const [locationsList, setLocationsList] = useState([]);
  const { logout } = useContext(AuthContext);

  /**
   * Asynchronously loads location data and updates the locations list state.
   * Displays an error toast if the response is unsuccessful.
   * Throws an error if the data loading process fails.
   *
   * @async
   * @function loadData
   * @returns {Promise<void>} Resolves when the data is loaded and state is updated.
   */
  const loadData = async () => {
    try {
      const response = await getLocations();
      if (response.success) {
        setLocationsList(response.data);
      } else {
        showToast("error", response.message);
      }
    } catch (error) {
      throw new Error(`Failed to load data. Error: ${error.message}`);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.productContainer}>
        <Button
          text={"LOGOUT"}
          onPress={() => logout()}
          additionalButtonStyle={styles.logoutButton}
          additionalTextStyle={styles.logoutButtonText}
        />
        <View style={styles.locationsTitleTextContainer}>
          <Text style={styles.locationsTitleText}>Locations</Text>
        </View>
        <FlatListComponent
          header={false}
          columnWrapperStyle={styles.row}
          data={locationsList}
          renderComponent={({ item }) => <LocationListComponent item={item} />}
          //this must come as the last prop
          numColumns={3}
        ></FlatListComponent>
      </View>
    </SafeAreaView>
  );
}
