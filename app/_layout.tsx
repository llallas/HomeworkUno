import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  useFonts({
    "nerko":require('./../assets/fonts/NerkoOne-Regular.ttf')
  })
  return (
    <Stack screenOptions={{headerShown: false,}}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
