import { useContext, useState } from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";
import LinkComponent from "../src/components/Link/Link";
import Button from "../src/components/Button/Button";
import { styles } from "../src/styles/screenStyles/sign-up.style";
import Input from "../src/components/Input/Input";
import { AuthContext } from "../src/contexts/Auth.context";
import { showToast } from "../src/components/Toast/Toast";

export default function signUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const { register } = useContext(AuthContext);

  /**
   * Handles user registration by collecting user details, sending them to the register function,
   * and displaying appropriate toast notifications based on the response.
   *
   * @async
   * @function handleRegister
   * @param {string} firstName - The user's first name.
   * @param {string} lastName - The user's last name.
   * @param {string} username - The user's chosen username.
   * @param {string} email - The user's email address.
   * @param {string} password - The user's password.
   * @param {string} passwordConfirm - Confirmation of the user's password.
   * @returns {Promise<void>} Resolves when registration is complete or an error is handled.
   * @throws {Error} Throws an error if registration fails unexpectedly.
   */
  async function handleRegister(
    firstName,
    lastName,
    username,
    email,
    password,
    passwordConfirm
  ) {
    try {
      const userData = {
        firstName,
        lastName,
        username,
        email,
        password,
        passwordConfirm,
      };

      const response = await register(userData);
      if (response.errorMessage) {
        showToast("error", response.errorMessage);
        return;
      } else {
        showToast("success", "Registrations was successful!. ");
        return;
      }
    } catch (error) {
      throw new Error(`Failed to register. Error: ${error.message}`);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Fill in all the</Text>
          <Text style={styles.headerText}>fields</Text>
        </View>

        <View style={styles.infosContainer}>
          <View style={styles.buttonsContainer}>
            <View>
              <Text style={styles.alreadyHaveAccount}>
                Already have an account?
              </Text>
              <LinkComponent href={"login"} asChild>
                <Button
                  text={"Login"}
                  additionalButtonStyle={styles.loginButton}
                  additionalTextStyle={{ fontSize: 20 }}
                />
              </LinkComponent>
            </View>
            <Button
              text={"Confirm"}
              additionalButtonStyle={styles.signUpButton}
              additionalTextStyle={{
                fontSize: 20,
              }}
              onPress={() =>
                handleRegister(
                  firstName,
                  lastName,
                  username,
                  email,
                  password,
                  passwordConfirm
                )
              }
            />
          </View>

          <View style={styles.inputContainer}>
            <Input
              value={firstName}
              onChangeText={setFirstName}
              label="First Name"
            />
            <Input
              value={lastName}
              onChangeText={setLastName}
              label="Last Name"
            />
            <Input
              value={username}
              onChangeText={setUsername}
              label="Username"
            />
            <Input value={email} onChangeText={setEmail} label="Email" />
            <Input
              value={password}
              onChangeText={setPassword}
              label="Password"
              secureTextEntry
            />
            <Input
              value={passwordConfirm}
              onChangeText={setPasswordConfirm}
              label="Confirm your password"
              secureTextEntry
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
