import icons from "@/src/constants/icons";
import { Tabs } from "expo-router";
import { Image, View } from "react-native";
import "../../style/global.css";

export default function TabsLayout() {
  return (<Tabs screenOptions={{
    headerStyle: { backgroundColor: "#ffffff" },
    sceneStyle: { backgroundColor: '#ffffff' },
    // headerShown: false,
    tabBarItemStyle: {
      alignItems: 'center',
      flexDirection: 'row',
    },
  }}>

    <Tabs.Screen
      name="home"
      options={{
        tabBarLabel: () => null,
        tabBarIcon: ({ focused }) => (
          <Image source={icons.abahome}
            style={{ width: 32, height: 32, opacity: focused ? 1 : 0.3 }} />
        ),
        headerTitle: () => (
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 50 }}>
            <Image source={icons.logo01} />
            <Image source={icons.cart}
              style={{ width: 32, height: 32 }} />
          </View>
        ),
        headerTitleAlign: 'center',
        headerShadowVisible: false
      }} />

    <Tabs.Screen
      name="favorito"
      options={{
        tabBarLabel: () => null,
        tabBarIcon: ({ focused }) => (
          <Image source={icons.abafavorito}
            style={{ width: 32, height: 32, opacity: focused ? 1 : 0.3 }} />
        ),
        headerTitle: () => (
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 50 }}>
            <Image source={icons.logo01} />
            <Image source={icons.cart}
              style={{ width: 32, height: 32 }} />
          </View>
        ),
        headerTitleAlign: 'center',
        headerShadowVisible: false
      }} />

    <Tabs.Screen
      name="pedido"
      options={{
        tabBarLabel: () => null,
        tabBarIcon: ({ focused }) => (
          <Image source={icons.abapedidos}
            style={{ width: 32, height: 32, opacity: focused ? 1 : 0.3 }} />
        ),
        headerTitle: () => (
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 50 }}>
            <Image source={icons.logo01} />
            <Image source={icons.cart}
              style={{ width: 32, height: 32 }} />
          </View>
        ),
        headerTitleAlign: 'center',
        headerShadowVisible: false
      }} />

    <Tabs.Screen
      name="perfil"
      options={{
        tabBarLabel: () => null,
        tabBarIcon: ({ focused }) => (
          <Image source={icons.abaperfil}
            style={{ width: 32, height: 32, opacity: focused ? 1 : 0.3 }} />
        ),
        headerTitle: () => (
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 50 }}>
            <Image source={icons.logo01} />
            <Image source={icons.cart}
              style={{ width: 32, height: 32 }} />
          </View>
        ),
        headerTitleAlign: 'center',
        headerShadowVisible: false
      }} />

  </Tabs>
  );
}