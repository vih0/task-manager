import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { AppStack } from "./appStack";
import { AuthStack } from "./authStack";

const Stack = createStackNavigator()
export function Router(){
    const auth = true
    return ( 
    <NavigationContainer>
        {auth?<AppStack/>:<AuthStack/>}
    </NavigationContainer>
    )
}
