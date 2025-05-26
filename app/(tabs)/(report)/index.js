import FlatListComponent from "../../src/components/FlatList/FlatListComponent";
import { useEffect, useState } from "react";
import { getHistoryChange } from "../../src/service/history.service";
import { SafeAreaView, View } from "react-native";
import Button from "../../src/components/Button";
import HistoryChange from "../../src/components/FlatList/FlatListChildren/HistoryChange";
import { styles } from "../../src/styles/screenStyles/report-index";

export default function History() {
  const [historyChange, setHistoryChange] = useState([]);

  useEffect(() => {
    getHistoryChange().then((response) => {
      setHistoryChange(response.data);
    });
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
