import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { Task } from '~/@types';

export function TasksList() {
  const tasks: Task[] = [
    {
      id: 1,
      title: 'Tomar Cafe',
      status: true,
      description: 'comer uma proteina e uma fruta obrigatoriamente',
      priority: 1,
    },
    {
      id: 2,
      title: 'Tomar Cafe',
      status: false,
      description: 'comer uma proteina e uma fruta obrigatoriamente',
      priority: 3,
    },
  ];
  const priorityType = (number: number) => {
    switch (number) {
      case 0:
        return 'bg-gray-500';
      case 1:
        return 'bg-blue-500';
      case 2:
        return 'bg-yellow-500';
      case 3:
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };
  return (
    <View className="w-full px-4 gap-4">
      {tasks.map((task) => (
        <View className={styles.container} key={task.id}>
          <View className={`${styles.priority} ${priorityType(task.priority)}`} />
          <View className={styles.content}>
            <Text className={styles.title}>{task.title}</Text>
            <Text>{task.description}</Text>
          </View>
          <Pressable className={styles.button}>
            {({ pressed }) => (
              <Ionicons
                name="checkmark-circle-outline"
                size={32}
                color={task.status ? 'green' : 'black'}
                style={{ opacity: pressed ? 0.6 : 1 }}
              />
            )}
          </Pressable>
        </View>
      ))}
    </View>
  );
}

const styles = {
  container: `flex flex-row w-4/5 px-5 justify-start gap-4 items-center`,
  priority: `w-2 h-full`,
  content: `flex w-full`,
  title: `font-bold text-xl`,
  description: `text-slate-400`,
  button: `p-3`,
};
