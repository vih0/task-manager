import React from 'react';
import { Text, View } from 'react-native';

import { Task } from '~/@types';

export function TasksList() {
  const tasks: Task[] = [
    {
      id: 1,
      title: 'Tomar Cafe',
      status: false,
      description: 'comer uma proteina e uma fruta obrigatoriamente',
    },
  ];
  return (
    <View className="w-4/5">
      {tasks.map((task) => (
        <View className={styles.container} key={task.id}>
          <Text>{task.title}</Text>
        </View>
      ))}
    </View>
  );
}
const styles = {
  container: `flex flex-row w-full mx-3 border border-solid border-current`,
};
