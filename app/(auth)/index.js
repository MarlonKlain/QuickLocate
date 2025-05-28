/**
 * Index component for the authentication entry screen.
 *
 * Renders a welcome container with the QuickLocate logo and navigation buttons for Login and Sign Up.
 * Utilizes SafeAreaView for proper display on different devices.
 *
 * @component
 * @returns {JSX.Element} The rendered authentication index screen.
 */
import { View, Image, SafeAreaView } from "react-native";
import { styles } from "../src/styles/screenStyles/homepage-index.style";
import Button from "../src/components/Button";
import LinkComponent from "../src/components/Link";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.welcomeContainer}>
        <Image
          style={styles.quickLocateImg}
          source={require("../../assets/images/logo/quick-locate-index.png")}
        />
        <View>
          <LinkComponent href={"./login"}>
            <Button text={"Login"}></Button>
          </LinkComponent>
          <LinkComponent href={"./signup"}>
            <Button text={"Sign Up"}></Button>
          </LinkComponent>
        </View>
      </View>
    </SafeAreaView>
  );
}
