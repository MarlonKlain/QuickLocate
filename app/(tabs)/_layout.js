/**
 * Layout component for the main tab navigation using Expo Router.
 *
 * Renders three tabs: Items, Locations, and History, each with custom icons and active tint color.
 * - Items: Uses Feather "box" icon.
 * - Locations: Uses MaterialIcons "location-pin" icon.
 * - History: Uses FontAwesome5 "history" icon.
 *
 * All tabs hide the header and use the primary color from COLORS when active.
 *
 * @component
 * @returns {JSX.Element} The tab navigator layout for the app.
 */
import { Tabs } from "expo-router";
import { Feather, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { COLORS } from "../src/utils/colors";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="(items)"
        options={{
          // Hide the header
          headerShown: false,
          // Header title (also used as bottom tab name)
          title: "Items",
          tabBarActiveTintColor: COLORS.primary,
          tabBarIcon: ({ focused, color, size }) => {
            // Change tab color when selected
            if (focused) {
              return <Feather name="box" color={COLORS.primary} size={24} />;
            }
            return <Feather name="box" color={color} size={size} />;
          },
        }}
      />
      <Tabs.Screen
        name="(locations)"
        options={{
          headerShown: false,
          title: "Locations",
          tabBarActiveTintColor: COLORS.primary,
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return (
                <MaterialIcons
                  name="location-pin"
                  color={COLORS.primary}
                  size={24}
                />
              );
            }
            return (
              <MaterialIcons name="location-pin" color={color} size={size} />
            );
          },
        }}
      />
      <Tabs.Screen
        name="(report)"
        options={{
          headerShown: false,
          title: "History",
          tabBarActiveTintColor: COLORS.primary,
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return (
                <FontAwesome5 name="history" color={COLORS.primary} size={24} />
              );
            }
            return <FontAwesome5 name="history" color={color} size={size} />;
          },
        }}
      />
    </Tabs>
  );
}
