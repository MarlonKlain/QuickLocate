/**
 * Layout component for the locations tab using Expo Router's Stack navigator.
 *
 * This component defines the navigation stack for the locations tab, hiding the header
 * for both the index and dynamic location screens.
 *
 * @returns {JSX.Element} The stack navigator configuration for the locations tab.
 */
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="[location]" options={{ headerShown: false }} />
    </Stack>
  );
}
