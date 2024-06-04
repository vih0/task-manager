import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Platform, Pressable, Text, TextInput, View } from 'react-native';

import { TaskForm } from '~/components';

export default function Modal() {
  const navigation = useNavigation();

  return (
    <>
      <View className={styles.container}>
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        <View className={styles.wrapper}>
          <Pressable className="my-4 mx-0" onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" size={26} />
          </Pressable>
          <Text className={styles.title}>Adicione uma nova tarefa:</Text>
        </View>
        <View className={styles.separator} />
        <TaskForm />
      </View>
    </>
  );
}

const styles = {
  container: 'items-start flex-1 justify-start my-16 mx-8',
  separator: 'h-[1px] my-7 w-full bg-gray-200',
  title: 'text-xl font-bold',

  wrapper: `flex flex-row gap-4 items-center`,
};
