/**
 * Layout component for the report tab stack navigator.
 *
 * This component defines the navigation stack for the report section,
 * hiding the header for both the index and dynamic date screens.
 *
 * @returns {JSX.Element} The stack navigator configuration for the report tab.
 */
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="[date]" options={{ headerShown: false }} />
    </Stack>
  );
}
