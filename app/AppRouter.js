/**
 * AppRouter component handles routing based on authentication state.
 *
 * - Redirects unauthenticated users to the authentication stack ("/(auth)").
 * - Redirects authenticated users to the main tab stack ("/(tabs)").
 * - Displays nothing (or a splash screen) while authentication state is loading.
 *
 * @component
 * @returns {JSX.Element|null} The routed application slot or null while loading.
 */
import { useContext, useEffect } from "react";
import { router, Slot } from "expo-router";
import { AuthContext } from "./src/contexts/Auth.context";

export default function AppRouter() {
  const { isAuthenticated, loading } = useContext(AuthContext);

  useEffect(() => {
    if (!loading) {
      if (!isAuthenticated) {
        router.replace("/(auth)");
      } else {
        router.replace("/(tabs)");
      }
    }
  }, [isAuthenticated, loading]);

  if (loading) return null; // or splash

  return <Slot />;
}
