import React from "react";
import { Feather } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home } from "~/screens/home";
import { Profile } from "~/screens/profile";

const Drawer = createDrawerNavigator();

export function DrawerStack() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ size, color }) => (
            <Feather name="home" size={size} color={color} />
          ),
          headerTitle: 'home',

        }}
      />

      <Drawer.Screen
        name="Perfil"
        component={Profile}
        options={{
          drawerIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
          headerTitle: '',
        }}
      />


    </Drawer.Navigator>
  )
}