import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Home } from "~/screens/home";
const Stack = createStackNavigator()

export function AppStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="home" component={Home} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}
 