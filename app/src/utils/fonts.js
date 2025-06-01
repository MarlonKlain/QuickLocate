import { wr, hr, isWeb } from "./sizes";

export const FONTS = {
  regular: "Roboto-Regular",
  bold: "Roboto-Bold",
  italic: "Roboto-Italic",
  titleSize: isWeb() ? hr("1.5%") : hr("2%"),
  textSize: isWeb() ? hr("1.3%") : hr("1.5%"),
  headerSize: isWeb() ? hr("2%") : hr("3%"),
};
