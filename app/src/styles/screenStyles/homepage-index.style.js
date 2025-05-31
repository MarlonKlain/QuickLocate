import { StyleSheet } from "react-native";
import { hr, isWeb, wr } from "../../utils/sizes";

export const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  quickLocateImg: {
    resizeMode: "center",
    width: wr("90%"),
    height: hr("60%"),
    marginVertical: isWeb() ? hr("3%") : hr("1%"),
  },
});
