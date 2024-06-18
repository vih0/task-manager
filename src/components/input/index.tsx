import React, { TextInput, TextInputProps, View } from "react-native";

type Props = TextInputProps & {
    value: string
    onChangeText: ((text: string) => void)
}

export function Input({ onChangeText, value, ...rest }: Props) {
    return (
        <View className="border border-spacing-1 border-slate-300 px-4 py-4 rounded-md">
            <TextInput
                className='color-zinc-100 placeholder:color-zinc-200 text-xl'
                onChangeText={onChangeText}
                value={value} {...rest} />
        </View>
    )
}