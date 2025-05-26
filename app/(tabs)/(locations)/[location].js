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

export default function ItemsByLocationScreen() {
  const [itemsByLocation, setItemsByLocation] = useState([]);
  const { location } = useLocalSearchParams();

  useEffect(() => {
    if (location != "Not addressed") {
      getItemByLocation(location).then((response) =>
        setItemsByLocation(response.data)
      );
    } else {
      getItemWithoutLocation().then((response) =>
        setItemsByLocation(response.data)
      );
    }
  }, []);
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
