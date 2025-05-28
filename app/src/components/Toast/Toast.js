/**
 * Displays a toast notification with a formatted message.
 *
 * @param {string} type - The type of the toast (e.g., 'success', 'error', etc.).
 * @param {any} messageToFormat - The message or data to be formatted and displayed in the toast.
 * @returns {void}
 */
import Toast from "react-native-toast-message";
import { formatToastMessage } from "../../utils/formatToastMessage";

export function showToast(type, messageToFormat) {
  const message = formatToastMessage(messageToFormat);
  Toast.show({
    type: `${type}`,
    text1: `${message.title}`,
    text2: `${message.content}`,
    swipeable: false,
  });
}
