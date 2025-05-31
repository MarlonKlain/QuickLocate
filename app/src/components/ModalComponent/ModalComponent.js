/**
 * ModalComponent is a reusable modal dialog component for React Native.
 * It displays its children inside a modal with a back button to close it.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {boolean} props.modalState - Controls the visibility of the modal.
 * @param {function} props.onClose - Callback function invoked when the modal is requested to close.
 * @param {React.ReactNode} props.children - Elements to render inside the modal.
 * @returns {JSX.Element} The rendered modal component.
 */
import { Modal, View } from "react-native";
import BackButton from "../BackButton/BackButton";
import { styles } from "./ModalComponent.style";

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
