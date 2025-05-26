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
          <LinkComponent href={"./signUp"}>
            <Button text={"Sign Up"}></Button>
          </LinkComponent>
        </View>
      </View>
    </SafeAreaView>
  );
}
