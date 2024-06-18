import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


type Porps = {
    onChangeOption: (value: number) => void
    options: {
        label: string;
        value: number;
    }[]
    placeholder: string
}

export function SelectOptions({ onChangeOption, options, placeholder }: Porps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<number>(3);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const selectOption = (value: number) => {
        setSelectedOption(value);
        setIsOpen(false);
    };

    return (
        <View style={styles.selectContainer}>
            <TouchableOpacity onPress={toggleDropdown}>
                <Text style={styles.selectedOption}>{selectedOption}</Text>
            </TouchableOpacity>
            {isOpen && (
                <View style={styles.dropdownOptions}>
                    {options.map((option) => (
                        <TouchableOpacity
                            key={option.label}
                            onPress={() => selectOption(option.value)}
                        >
                            <Text style={styles.dropdownOption}>{option.label}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    selectContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 4,
    },
    selectedOption: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    dropdownOptions: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 4,
        marginTop: 4,
    },
    dropdownOption: {
        padding: 5,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
});

