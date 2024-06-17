import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Platform, Pressable, Text, TextInput, View } from 'react-native';

import { TaskForm } from '~/components';

export default function Modal() {
  const navigation = useNavigation();

  return (
    <View className={styles.container}>
      <View className={styles.wrapper}>
        <Pressable className="my-4 mx-0" onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={36} color="#fafafa" />
        </Pressable>
        <Text className={styles.title}>Adicione uma nova tarefa:</Text>
      </View>
      <View className={styles.separator} />
      <TaskForm />
    </View>

  );
}

const styles = {
  container: 'items-start flex-1 justify-start bg-zinc-800',
  separator: 'h-[1px] my-7 w-full bg-gray-200',
  title: 'text-xl font-bold text-zinc-50',

  wrapper: `flex w-full flex-row gap-4 items-center justfy-center bg-violet-800 py-12 px-8`,
};
