/**
 * Layout component for authentication-related screens.
 * Uses Expo Router's Stack navigator to define navigation structure.
 *
 * Screens included:
 * - index: Main authentication landing page (header hidden)
 * - login: Login screen (header hidden)
 * - signup: Signup screen (header hidden)
 *
 * @returns {JSX.Element} Stack navigator with authentication screens.
 */
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="signup" options={{ headerShown: false }} />
    </Stack>
  );
}
