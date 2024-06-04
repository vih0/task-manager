import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

export function EmptyList(){
    return(
        <View className="w-full flex my-6  align-center">
            <Text className="text-stone-800 text-2xl text-center">
                Sem items cadastrados
            </Text>
            <Text className="text-stone-700 text-xl text-center">cadastre uma atividade nova!</Text>
        </View>
    )
}