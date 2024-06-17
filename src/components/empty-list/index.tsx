import React from "react";
import { Text, View } from "react-native";

export function EmptyList() {
    return (
        <View className="w-full flex my-6  align-center">
            <Text className="text-zinc-200 text-2xl text-center">
                Sem items cadastrados
            </Text>
            <Text className="text-zinc-100 text-xl text-center">cadastre uma atividade nova!</Text>
        </View>
    )
}