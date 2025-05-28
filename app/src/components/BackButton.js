/**
 * BackButton component renders a pressable button with a left chevron icon,
 * typically used for navigation back actions in a React Native application.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {function} props.onPress - Callback function to handle the button press event.
 * @returns {JSX.Element} The rendered BackButton component.
 */
import { Pressable, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "../styles/componentStyles/BackButton.style";
import { COLORS } from "../utils/colors";

export default function BackButton({ onPress }) {
  return (
    <View>
      <Pressable style={styles.backButton} onPress={onPress}>
        <Feather
          name="chevron-left"
          size={35}
          color={COLORS.textPrimaryColor}
        />
      </Pressable>
    </View>
  );
}
