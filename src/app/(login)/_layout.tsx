import icons from "@/src/constants/icons";
import { Stack } from "expo-router";
import { Image } from "react-native";
import "../../style/global.css";

export default function LoginLayout() {
  return (<Stack screenOptions={{
    headerStyle: { backgroundColor: "#ffffff" },
    contentStyle: { backgroundColor: "#ffffff" },
  }} >
    <Stack.Screen
      name="login"
      options={{
        headerTitle: () => (
          <Image source={icons.logo01} />
        ),
        headerTitleAlign: 'center',
        headerShadowVisible: false
      }}
    />
    <Stack.Screen
      name="register"
      options={{
        headerTitle: () => (
          <Image source={icons.logo01} />
        ),
        headerTitleAlign: 'center',
        headerShadowVisible: false
      }}
    />
    <Stack.Screen
      name="address"
      options={{
        headerTitle: () => (
          <Image source={icons.logo01} />
        ),
        headerTitleAlign: 'center',
        headerShadowVisible: false
      }}
    />
    <Stack.Screen
      name="busca"
      options={{
        headerTitle: () => (
          <Image source={icons.logo01}
            style={{ width: 232, height: 42, marginTop: 10 }} />
        ),
        // headerShown: false,
        headerTitleAlign: 'center',
        headerShadowVisible: false
      }}
    />
    <Stack.Screen
      name="cardapio"
      options={{
        headerTitle: () => (
          <Image source={icons.logo01}
            style={{ width: 232, height: 42, marginTop: 10 }} />
        ),
        headerShown: false,
        headerTitleAlign: 'center',
        headerShadowVisible: false
      }}
    />
    <Stack.Screen
      name="detalhes"
      options={{
        headerTitle: () => (
          <Image source={icons.logo01}
            style={{ width: 232, height: 42, marginTop: 10 }} />
        ),
        headerShown: false,
        headerTitleAlign: 'center',
        headerShadowVisible: false
      }}
    />
  </Stack >
  );
}
