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
