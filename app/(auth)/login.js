// Login.js
import { Text, View, SafeAreaView } from "react-native";
import { useState, useContext } from "react";
import Input from "../src/components/Input";
import { styles } from "../src/styles/screenStyles/login.style";
import Button from "../src/components/Button";
import LinkComponent from "../src/components/Link";
import { AuthContext } from "../src/contexts/Auth.context";
import { showToast } from "../src/components/Toast/Toast";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);

  async function handleLogin() {
    setLoading(true);
    try {
      const response = await login(username, password);
      if (response.errorMessage) {
        showToast("error", response.errorMessage);
      } else {
        showToast("success", "The login was successful. ");
        return;
      }
    } catch (error) {
      console.error("Login Error:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Welcome</Text>
      </View>

      <View style={styles.loginContainer}>
        <View style={styles.inputContainer}>
          <Input value={username} onChangeText={setUsername} label="User" />
          <Input
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            label="Password"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            text={loading ? "Logging in..." : "Login"}
            onPress={handleLogin}
            additionalButtonStyle={styles.loginButton}
          />

          <View>
            <Text style={styles.alreadyHaveAccount}>
              Already have an account?
            </Text>
            <LinkComponent href="signUp">
              <Button
                text="Sign Up"
                additionalButtonStyle={styles.signUpButton}
              />
            </LinkComponent>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
