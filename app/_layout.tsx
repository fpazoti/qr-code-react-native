import { Stack, router } from "expo-router";

export default function AppLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="product"
        options={{
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
