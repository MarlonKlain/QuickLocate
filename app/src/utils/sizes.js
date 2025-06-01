import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Platform } from "react-native";

export function wr(x) {
  return wp(x);
}
export function hr(x) {
  return hp(x);
}

export function isWeb() {
  return Platform.OS === "web";
}
