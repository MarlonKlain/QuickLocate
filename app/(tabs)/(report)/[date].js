import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";
import { getHistoryChangeByDate } from "../../src/service/history.service";
import { formatTheHistoryWithoutTime } from "../../src/utils/formatDate";
import FlatListComponent from "../../src/components/FlatList/FlatListComponent";
import HistoryChangeByDateComponent from "../../src/components/FlatList/FlatListChildren/HistoryChangeByDateComponent";
import BackButton from "../../src/components/BackButton";
import { styles } from "../../src/styles/screenStyles/[date]";
export default function HistoryChangeByDate() {
  const { timestamp } = useLocalSearchParams();
  const [historyChangeByDate, setHistoryChangeByDate] = useState([]);

  useEffect(() => {
    getHistoryChangeByDate(formatTheHistoryWithoutTime(timestamp)).then(
      (response) => setHistoryChangeByDate(response.data)
    );
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <BackButton onPress={router.back} />
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
