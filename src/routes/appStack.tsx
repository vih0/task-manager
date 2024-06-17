import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DrawerStack } from "./drawerStack";
import Modal from "~/screens/modal";
import { TabsStack } from "./tabStack";
const Stack = createStackNavigator()

export function AppStack() {

    return (
        <Stack.Navigator>
            <Stack.Screen name="tabsroute" component={TabsStack}
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
