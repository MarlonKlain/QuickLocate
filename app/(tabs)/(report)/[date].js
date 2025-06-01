import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";
import { getHistoryChangeByDate } from "../../src/service/history.service";
import { formatTheHistoryWithoutTime } from "../../src/utils/formatDate";
import FlatListComponent from "../../src/components/FlatList/FlatListComponent";
import HistoryChangeByDateComponent from "../../src/components/FlatList/FlatListChildren/HistoryChangeByDateComponent/HistoryChangeByDateComponent";
import BackButton from "../../src/components/BackButton/BackButton";
import { styles } from "../../src/styles/screenStyles/[date]";
import { showToast } from "../../src/components/Toast/Toast";
export default function HistoryChangeByDate() {
  const { timestamp } = useLocalSearchParams();
  const [historyChangeByDate, setHistoryChangeByDate] = useState([]);

  /**
   * Asynchronously loads history change data for a given timestamp.
   * Fetches data using `getHistoryChangeByDate` after formatting the timestamp,
   * updates state if successful, or shows an error toast otherwise.
   * Throws an error if the request fails.
   *
   * @async
   * @param {number|string|Date} timestamp - The timestamp to fetch history changes for.
   * @returns {Promise<void>} Resolves when data is loaded and state is updated.
   * @throws {Error} If the data loading process fails.
   */
  const loadData = async (timestamp) => {
    try {
      const response = await getHistoryChangeByDate(
        formatTheHistoryWithoutTime(timestamp)
      );
      if (response.success) {
        setHistoryChangeByDate(response.data);
      } else {
        showToast("error", response.message);
      }
    } catch (error) {
      throw new Error(`Failed to load data. Error: ${error.message}`);
    }
  };

  useEffect(() => {
    loadData(timestamp);
  }, [timestamp]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BackButton onPress={router.back} />
      <View style={styles.container}>
        <FlatListComponent
          data={historyChangeByDate}
          header={false}
          renderComponent={({ item }) => (
            <HistoryChangeByDateComponent item={item} />
          )}
        />
      </View>
    </SafeAreaView>
  );
}
