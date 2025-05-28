/**
 * Root layout component for the application.
 *
 * - Loads custom Roboto fonts asynchronously using `useFonts`.
 * - Hides the splash screen once fonts are loaded or if an error occurs.
 * - Renders the authentication provider, app router, and toast notifications.
 * - Returns `null` (renders nothing) while fonts are loading and no error has occurred.
 *
 * @returns {JSX.Element|null} The layout containing providers and app content, or `null` while loading fonts.
 */
// layout.js
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { AuthProvider } from "../app/src/contexts/Auth.context";
import AppRouter from "./AppRouter";
import Toast from "react-native-toast-message";
import { toastConfig } from "./src/components/Toast/Toast.config";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [loaded, error] = useFonts({
    "Roboto-Thin": require("../assets/fonts/Roboto-Thin.ttf"),
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <AuthProvider>
      <AppRouter />
      <Toast config={toastConfig} />
    </AuthProvider>
  );
}
