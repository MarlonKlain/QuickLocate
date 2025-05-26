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
