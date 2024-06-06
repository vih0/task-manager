import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { Login } from "~/screens/login"

const Stack = createStackNavigator()

export function AuthStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="home" component={Login} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}
 