import React from "react";
import { Feather } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "~/screens/home";
import { Profile } from "~/screens/profile";
import { DrawerStack } from "./drawerStack";
import Modal from "~/screens/modal";
const Stack = createStackNavigator()

export function AppStack() {

    return (
        <Stack.Navigator>
            <Stack.Screen name="drawernav" component={DrawerStack}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Modal" component={Modal} 
                 options={{
                    presentation: 'modal',
                    headerTitle: '',
                    headerLeft: () => null,
                    headerShown: false,
                  }}
            />
        </Stack.Navigator>
    )
}
