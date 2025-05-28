/**
 * A customizable button component using React Native's Pressable.
 *
 * @param {Object} props - The props for the Button component.
 * @param {string} props.text - The text to display inside the button.
 * @param {boolean} [props.disableDefaultStyle=false] - If true, disables the default button style.
 * @param {Object|Array} [props.additionalButtonStyle] - Additional styles to apply to the button container.
 * @param {Object|Array} [props.additionalTextStyle] - Additional styles to apply to the button text.
 * @param {Object} [props.props] - Additional props passed to the Pressable component.
 * @returns {JSX.Element} The rendered Button component.
 */
import { Pressable, Text } from "react-native";
import { styles } from "../styles/componentStyles/Button.style";

export default function Button({
  text,
  disableDefaultStyle = false,
  additionalButtonStyle,
  additionalTextStyle,
  ...props
}) {
  return (
    <Pressable
      {...props}
      style={
        disableDefaultStyle
          ? additionalButtonStyle
          : [styles.button, additionalButtonStyle]
      }
    >
      <Text style={[styles.buttonText, additionalTextStyle]}>{text}</Text>
    </Pressable>
  );
}
