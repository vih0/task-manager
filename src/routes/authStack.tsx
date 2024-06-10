import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { Login } from "~/screens/login"
import { Cadastro } from "~/screens/cadastro"

const Stack = createStackNavigator()

export function AuthStack() {
    return (
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
            </Stack.Navigator>

    )
}
