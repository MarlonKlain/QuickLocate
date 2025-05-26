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
