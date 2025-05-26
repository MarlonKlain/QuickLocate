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
