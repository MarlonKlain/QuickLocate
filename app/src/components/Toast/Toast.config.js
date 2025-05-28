/**
 * Configuration object for customizing toast notifications using `react-native-toast-message`.
 *
 * @type {Object}
 * @property {function(Object): JSX.Element} success - Custom renderer for 'success' toast type.
 *   Uses the `BaseToast` component with a green border and custom text styles.
 * @property {function(Object): JSX.Element} error - Custom renderer for 'error' toast type.
 *   Uses the `ErrorToast` component with custom text styles for both title and message.
 */
import { BaseToast, ErrorToast } from "react-native-toast-message";

/*
  1. Create the config
*/
export const toastConfig = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: "green" }}
      text1Style={{
        fontSize: 15,
        fontWeight: "400",
        color: "black",
      }}
    />
  ),
  /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
  error: (props) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 14,
      }}
      text2Style={{
        fontSize: 12,
      }}
    />
  ),
};
