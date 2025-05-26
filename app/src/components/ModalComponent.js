import { Modal, View } from "react-native";
import BackButton from "./BackButton";
import { COLORS } from "../utils/colors";
import { styles } from "../styles/componentStyles/ModalComponent.style";

export default function ModalComponent({ modalState, onClose, children }) {
  return (
    <Modal
      visible={modalState}
      onRequestClose={onClose}
      animationType="fade"
      presentationStyle="pageSheet"
    >
      <View style={styles.container}>
        <BackButton onPress={onClose} />
        {children}
      </View>
    </Modal>
  );
}
