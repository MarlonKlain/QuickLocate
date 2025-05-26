import { View, Pressable, Alert, SafeAreaView } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "../../src/styles/screenStyles/[item].style";
import ModalComponent from "../../src/components/ModalComponent";
import BackButton from "../../src/components/BackButton";
import Input from "../../src/components/Input";
import FlatListComponent from "../../src/components/FlatList/FlatListComponent";
import LocationHistoryComponent from "../../src/components/FlatList/FlatListChildren/LocationHistoryComponent";
import Button from "../../src/components/Button";
import { COLORS } from "../../src/utils/colors";
import { getItemByCode, updateLocation } from "../../src/service/item.service";
import { getAllFreeLocations } from "../../src/service/location.service";
import { showToast } from "../../src/components/Toast/Toast";
import FreeLocationList from "../../src/components/FlatList/FlatListChildren/FreeLocationList";

export default function ItemDetails() {
  const [code, setCode] = useState("");
  const [partnumber, setPartnumber] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  // Hook to control modal visibility
  const [freeLocationsList, setFreeLocationsList] = useState([]);
  const [locationHistory, setlocationHistory] = useState([]);
  // Parameter from router that allows creating specific screens for specific values
  // The value can be extracted from the path/URL this way
  const { item } = useLocalSearchParams();

  // Function to open the modal
  const openModal = () => setModalVisible(true);
  // Function to close the modal
  const closeModal = () => setModalVisible(false);

  async function fetchItemInformation(item) {
    try {
      const response = await getItemByCode(item);
      const itemInformation = response.data.itemInformation;
      const itemChangeHistory = response.data.locationHistory;
      setCode(itemInformation.code);
      setPartnumber(itemInformation.partnumber);
      setDescription(itemInformation.description);
      setLocation(itemInformation.location);
      setlocationHistory(itemChangeHistory);
    } catch (error) {
      throw new Error(`Failed to fetch item inforation data. ${error.message}`);
    }
  }

  async function fechListOfFreeLocation() {
    try {
      const response = await getAllFreeLocations();
      setFreeLocationsList(response.data);
    } catch (error) {
      throw new Error(
        `Failed to fetch the list of free locations data. ${error.message}`
      );
    }
  }
  useEffect(() => {
    const loadData = async () => {
      try {
        await Promise.all([
          fetchItemInformation(item),
          fechListOfFreeLocation(),
        ]);
      } catch (error) {
        console.error(error);
        Alert.alert("Error", "Failed to load data.");
      }
    };

    loadData();
  }, [item]);

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
        <BackButton onPress={router.back} />
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
        <View style={{ flexDirection: "row", alignItems: "center" }}>
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
