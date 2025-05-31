/**
 * DropdownComponent renders a customizable dropdown menu using react-native-element-dropdown.
 *
 * @component
 * @param {Object[]} filters - Array of filter objects to display as dropdown options. Each object should have `label` and `value` properties.
 * @param {string} label - Placeholder text to display when no option is selected.
 * @param {function} onSendValue - Callback function called with the selected value when an option is chosen.
 * @param {string|number} value - The currently selected value.
 * @param {function} setValue - Function to update the selected value.
 * @returns {JSX.Element} The rendered dropdown component.
 */
import { useState } from "react";
import { View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { styles } from "./Dropdown.style";

export default function DropdownComponent({
  filters,
  label,
  onSendValue,
  value,
  setValue,
}) {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        itemTextStyle={styles.itemTextStyle}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={filters}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? label : "..."}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
          onSendValue(item.value);
        }}
      />
    </View>
  );
}
