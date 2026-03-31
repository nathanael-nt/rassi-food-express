      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Image source={icons.home}
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