import { useState } from "react";
import { View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { styles } from "../../styles/componentStyles/Dropdown.style";

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
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
          onSendValue(item.value);
        }}
      />
    </View>
  );
}
