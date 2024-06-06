import React, { TextInput, View } from "react-native";

type Props ={
    value:string
    onChangeText :((text: string) => void) 
}

export function Input({onChangeText,value}:Props) {
    return (
        <View className="border border-spacing-1 border-slate-600 px-2 py-4">
            <TextInput onChangeText={onChangeText}
                value={value} />
        </View>
    )
}