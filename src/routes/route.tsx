import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AppStack } from "./appStack";
import { AuthStack } from "./authStack";
import { useAuth } from "~/contexts/auth";
import { Loading } from "~/components/loading";


export function Router() {
    const { authData, loading } = useAuth()
    if (loading) {
        return <Loading />
    }
    return (
        <NavigationContainer>
            {authData ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    )
}
