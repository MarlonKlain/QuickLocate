/**
 * Input component for rendering a labeled TextInput with optional container and styles.
 *
 * @param {Object} props - Component props.
 * @param {string} [props.label] - Optional label to display above the input field.
 * @param {boolean} [props.ignoreContainer=false] - If true, does not wrap the input in a container View.
 * @param {Object|Array} [props.additionalInputStyle] - Additional styles to apply to the TextInput.
 * @param {Object|Array} [props.additionalTextStyle] - Additional styles to apply to the label Text.
 * @param {Object|Array} [props.containerStyle] - Styles to apply to the container View.
 * @param {boolean} [props.ignoreDefaultStyle=false] - If true, does not apply the default input style.
 * @param {...Object} props - Additional props passed to the TextInput.
 * @returns {JSX.Element} The rendered Input component.
 */
import { Text, TextInput, View } from "react-native";
import { styles } from "./Input.style";

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
