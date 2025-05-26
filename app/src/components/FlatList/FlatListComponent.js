import { FlatList, View, Text } from "react-native";
import { useState } from "react";
import { styles } from "../../styles/componentStyles/FlatListStyles/FlatListComponent.style";

export default function FlatListComponent({
  header = true,
  renderComponent,
  data,
  ...props
}) {
  const [refresh, setRefresh] = useState(false);

  // Handle pull-to-refresh functionality
  async function refreshItemsList() {
    setRefresh(true);
    //   loadDataFromDatabase();
    setRefresh(false);
  }

  return (
    <>
      {header && (
        <View style={styles.headerRow}>
          <Text style={styles.headerText}>Code</Text>
          <Text style={styles.headerText}>Part Number</Text>
          <Text style={styles.headerText}>Description</Text>
          <Text style={styles.headerText}>Location</Text>
        </View>
      )}
      <FlatList
        {...props}
        refreshing={refresh}
        onRefresh={() => refreshItemsList()}
        data={data}
        renderItem={renderComponent}
        keyExtractor={(item) => item.code ?? item.id ?? item.location}
      />
    </>
  );
}
