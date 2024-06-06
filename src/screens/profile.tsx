import { Feather } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export function Profile(){
    return(
        <View>
            <View className="flex-row items-center gap-6 ">
                <TouchableOpacity
                 
                className="bg-blue-900 rounded-full p-6 w-1/4 justify-center items-center ml-4 mt-8">
                <Feather size={60} name="user-plus" color="white"/>
                </TouchableOpacity>
                <Text className="text-center mt-7 text-2xl font-semibold ">Nome Usuario</Text>
            </View>
            <View className=" bg-slate-400 p-2 w-11/12 mt-10 mx-auto rounded">
                <Text className="text-xl">Sua Atividade:</Text>
                <View className="flex-row justify-between mt-2">

                <View className="bg-green-400 p-4 rounded items-center">
                    <Text className="font-semibold">75%</Text>
                    <Text>concluidas</Text>
                </View>
                <View className="bg-indigo-400 p-4 rounded items-center">
                    <Text className="font-semibold">10</Text>
                    <Text>cadastradas</Text>
                </View>
                <View className="bg-red-400 p-4 rounded items-center">
                    <Text className="font-semibold">25%</Text>
                    <Text>pendentes</Text>
                </View>
                </View>
            </View>
            
        </View>
    )
}