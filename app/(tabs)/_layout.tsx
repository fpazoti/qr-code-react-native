import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function TabRoutes() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Scanner",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="qr-code-2" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="history" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="mycodes"
        options={{
          title: "My codes",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="folder" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="settings" size={size} color={color} />
          ),
        }}
      />

      {/* <Tabs.Screen
        name="product"
        options={{
          title: "Settings",
          href: null,
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="settings" size={size} color={color} />
          ),
        }}
      /> */}
    </Tabs>
  );
}
