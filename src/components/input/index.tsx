import React, { TextInput,TextInputProps, View } from "react-native";

type Props = TextInputProps & {
    value:string
    onChangeText :((text: string) => void) 
}

export function Input({onChangeText,value,...rest}:Props) {
    return (
        <View className="border border-spacing-1 border-slate-600 px-2 py-4 rounded-md">
            <TextInput onChangeText={onChangeText}
                value={value} {...rest}/>
        </View>
    )
}