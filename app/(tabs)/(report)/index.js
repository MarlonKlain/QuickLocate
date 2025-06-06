import FlatListComponent from "../../src/components/FlatList/FlatListComponent";
import { useEffect, useState } from "react";
import { getHistoryChange } from "../../src/service/history.service";
import { SafeAreaView, View } from "react-native";
import Button from "../../src/components/Button/Button";
import HistoryChange from "../../src/components/FlatList/FlatListChildren/HistoryChange/HistoryChange";
import { styles } from "../../src/styles/screenStyles/report-index";
import { showToast } from "../../src/components/Toast/Toast";

export default function History() {
  const [historyChange, setHistoryChange] = useState([]);

  /**
   * Asynchronously loads history change data and updates the state.
   * Shows a toast notification if the request fails.
   *
   * @async
   * @function loadData
   * @returns {Promise<void>} Resolves when the data is loaded and state is updated.
   * @throws {Error} Throws an error if data loading fails.
   */
  const loadData = async () => {
    try {
      const response = await getHistoryChange();
      if (response.success) {
        setHistoryChange(response.data);
      } else {
        showToast("error", response.message);
      }
    } catch (error) {
      throw new Error(`Failed to load data. Error ${error.message}`);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Button
          text={"LOGOUT"}
          onPress={() => logout()}
          additionalButtonStyle={styles.logoutButton}
          additionalTextStyle={styles.logoutButtonText}
        />
        <FlatListComponent
          data={historyChange}
          header={false}
          renderComponent={({ item }) => <HistoryChange item={item} />}
        />
      </View>
    </SafeAreaView>
  );
}
