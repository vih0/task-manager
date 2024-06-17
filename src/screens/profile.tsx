import { Feather } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export function Profile() {
    return (
        <View className="bg-zinc-800 flex-1">
            <View className="flex-row items-center gap-6 ">
                <TouchableOpacity

                    className="bg-violet-600 rounded-full p-6  justify-center items-center ml-8 mt-8">
                    <Feather size={60} name="user-plus" color="white" />
                </TouchableOpacity>
                <Text className="text-zinc-50 text-center mt-7 text-2xl font-semibold ">Nome Usuario</Text>
            </View>
            <View className=" bg-violet-600 p-2 w-11/12 mt-10 mx-auto rounded">
                <Text className="text-xl">Sua Atividade:</Text>
                <View className="flex-col justify-between mt-2 gap-4">

                    <View className="bg-green-400 p-4 rounded items-center flex-row justify-around">
                        <View className="border-4 border-orange-50 rounded-full h-20 w-20 flex items-center justify-center">

                            <Text className="font-semibold text-xl mb-1">75%</Text>
                        </View>
                        <Text className="font-medium text-xl">concluidas</Text>
                    </View>
                    <View className="bg-indigo-400 p-4 rounded items-center *:">
                        <Text className="font-semibold text-xl">10</Text>
                        <Text className="text-xl">cadastradas</Text>
                    </View>
                    <View className="bg-red-400 p-4 rounded items-center">
                        <Text className="font-semibold text-xl">25%</Text>
                        <Text className="text-xl">pendentes</Text>
                    </View>
                </View>
            </View>

        </View>
    )
}