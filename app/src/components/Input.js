import { Text, TextInput, View } from "react-native";
import { styles } from "../styles/componentStyles/Input.style";

export default function Input({
  label,
  ignoreContainer = false,
  additionalInputStyle,
  additionalTextStyle,
  containerStyle,
  ignoreDefaultStyle = false,
  ...props
}) {
  const content = (
    <>
      {label && (
        <Text style={[styles.textInput, additionalTextStyle]}>{label}</Text>
      )}
      <TextInput
        {...props}
        style={
          ignoreDefaultStyle
            ? additionalInputStyle
            : [styles.inputField, additionalInputStyle]
        }
      />
    </>
  );

  return ignoreContainer ? (
    content
  ) : (
    <View style={containerStyle}>{content}</View>
  );
}
