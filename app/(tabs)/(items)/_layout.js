/**
 * Layout component for the items tab.
 * Configures the navigation stack for the items section using expo-router's Stack.
 * Hides the header for both the index and dynamic [item] screens.
 *
 * @returns {JSX.Element} The configured Stack navigator for the items tab.
 */
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="[item]" options={{ headerShown: false }} />
    </Stack>
  );
}
