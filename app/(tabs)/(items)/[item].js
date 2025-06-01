import { View, Pressable, SafeAreaView } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "../../src/styles/screenStyles/[item].style";
import ModalComponent from "../../src/components/ModalComponent/ModalComponent";
import BackButton from "../../src/components/BackButton/BackButton";
import Input from "../../src/components/Input/Input";
import FlatListComponent from "../../src/components/FlatList/FlatListComponent";
import LocationHistoryComponent from "../../src/components/FlatList/FlatListChildren/LocationHistoryComponent/LocationHistoryComponent";
import Button from "../../src/components/Button/Button";
import { COLORS } from "../../src/utils/colors";
import { getItemByCode, updateLocation } from "../../src/service/item.service";
import { getAllFreeLocations } from "../../src/service/location.service";
import { showToast } from "../../src/components/Toast/Toast";
import FreeLocationList from "../../src/components/FlatList/FlatListChildren/FreeLocationList/FreeLocationList";

export default function ItemDetails() {
  const [code, setCode] = useState("");
  const [partnumber, setPartnumber] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const [freeLocationsList, setFreeLocationsList] = useState([]);
  const [locationHistory, setlocationHistory] = useState([]);
  const { item } = useLocalSearchParams();

  // Function to open the modal
  const openModal = () => setModalVisible(true);
  // Function to close the modal
  const closeModal = () => setModalVisible(false);

  /**
   * Fetches information and location history for a given item code, updates state, and handles errors.
   *
   * @async
   * @function fetchItemInformation
   * @param {string} item - The code or identifier of the item to fetch information for.
   * @returns {Promise<void>} Resolves when the item information has been fetched and state updated.
   * @throws {Error} Throws an error if fetching item information fails.
   */
  async function fetchItemInformation(item) {
    try {
      const response = await getItemByCode(item);
      if (response.success) {
        const itemInformation = response.data.itemInformation;
        const itemChangeHistory = response.data.locationHistory;
        setCode(itemInformation.code);
        setPartnumber(itemInformation.partnumber);
        setDescription(itemInformation.description);
        setLocation(itemInformation.location);
        setlocationHistory(itemChangeHistory);
        return;
      } else {
        showToast("error", response.message);
        return;
      }
    } catch (error) {
      throw new Error(`Failed to fetch item inforation data. ${error.message}`);
    }
  }

  /**
   * Fetches the list of free locations asynchronously.
   * If successful, updates the free locations list state.
   * Shows an error toast if the response is unsuccessful.
   * Throws an error if the fetch operation fails.
   *
   * @async
   * @function fechListOfFreeLocation
   * @returns {Promise<void>} Resolves when the operation is complete.
   * @throws {Error} If fetching the list of free locations fails.
   */

  async function fechListOfFreeLocation() {
    try {
      const response = await getAllFreeLocations();
      if (response.success) {
        setFreeLocationsList(response.data);
        return;
      } else {
        showToast("error", response.message);
        return;
      }
    } catch (error) {
      throw new Error(
        `Failed to fetch the list of free locations data. ${error.message}`
      );
    }
  }

  /**
   * Asynchronously loads item information and a list of free locations in parallel.
   * Displays an alert if loading fails.
   *
   * @async
   * @function loadData
   * @returns {Promise<void>} Resolves when both data sources are loaded, or shows an error alert if any fail.
   */
  const loadData = async () => {
    try {
      await Promise.all([fetchItemInformation(item), fechListOfFreeLocation()]);
    } catch (error) {
      showToast("error", "Failed to load data.");
    }
  };

  useEffect(() => {
    loadData();
  }, [item]);

  /**
   * Handles updating the location for a given code and displays a toast notification based on the result.
   *
   * @async
   * @function handleUpdateLocation
   * @param {string} code - The unique identifier for the item whose location is being updated.
   * @param {string} newLocation - The new location to assign to the item.
   * @returns {Promise<void>} Resolves when the update process is complete.
   * @throws {Error} Throws an error if the location update fails.
   */

  async function handleUpdateLocation(code, newLocation) {
    try {
      const response = await updateLocation(code, newLocation);
      if (response.success) {
        showToast(
          "success",
          "Updating location successful. Do not forget to update the system!"
        );
      } else {
        showToast("error", response.message);
      }
    } catch (error) {
      throw new Error(`Failed to update the location. ${error.message}`);
    }
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BackButton onPress={router.back} />
      <View style={styles.container}>
        {/* Modal showing all available free locations */}
        <ModalComponent modalState={isModalVisible} onClose={closeModal}>
          <FlatListComponent
            data={freeLocationsList}
            header={false}
            renderComponent={({ item }) => (
              <FreeLocationList
                item={item}
                setLocation={setLocation}
                onClose={closeModal}
              />
            )}
          ></FlatListComponent>
        </ModalComponent>
        {/* Item information (read-only except location field) */}
        <Input
          value={code}
          additionalTextStyle={styles.inputLabelText}
          label={"Code"}
          disabled
        ></Input>
        <Input
          value={partnumber}
          additionalTextStyle={styles.inputLabelText}
          label={"Partnumber"}
          disabled
        ></Input>
        <Input
          value={description}
          additionalTextStyle={styles.inputLabelText}
          label={"Description"}
          disabled
        ></Input>
        <View
          style={{ flexDirection: "row", alignItems: "center", width: "85%" }}
        >
          <Input
            value={location}
            autoCapitalize="characters"
            onChangeText={(text) => setLocation(text.toUpperCase())}
            additionalTextStyle={styles.inputLabelText}
            additionalInputStyle={{ width: "98%", marginRight: "2%" }}
            containerStyle={{ flexDirection: "column", flex: 1 }}
            label={"Location"}
          ></Input>
          <Pressable style={{ marginTop: "1%" }} onPress={openModal}>
            <FontAwesome name="plus-square" size={36} color={COLORS.positive} />
          </Pressable>
        </View>
        <Input
          additionalTextStyle={styles.inputLabelText}
          label={"Image"}
        ></Input>
        <View>
          <FlatListComponent
            header={false}
            data={locationHistory}
            renderComponent={({ item }) => (
              <LocationHistoryComponent item={item} />
            )}
          ></FlatListComponent>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            text={"Confirm"}
            additionalButtonStyle={styles.confirmButton}
            onPress={() => {
              handleUpdateLocation(code, location);
            }}
          ></Button>
          <Button
            text={"Cancel"}
            onPress={router.back}
            additionalButtonStyle={styles.cancelButton}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
