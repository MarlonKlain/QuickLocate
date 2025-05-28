/**
 * FlatListComponent is a reusable React Native component that displays a list of items
 * using FlatList, with an optional header row and pull-to-refresh functionality.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {boolean} [props.header=true] - Whether to display the header row.
 * @param {function} props.renderComponent - Function that renders each item in the list.
 * @param {Array} props.data - Array of data items to display in the list.
 * @param {Object} [props.props] - Additional props passed to the FlatList component.
 *
 * @returns {JSX.Element} The rendered FlatList with optional header.
 */
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
