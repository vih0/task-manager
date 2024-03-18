import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { Tarefas } from '~/@types';

export function TasksList({ tarefas }: Tarefas) {
  return (
    <View className="w-full px-4 gap-4">
      {tarefas.map((tarefa) => (
        <View className={styles.container} key={tarefa.id}>
          <View className={styles.priority} style={{ backgroundColor: tarefa.prioridade.cor }} />
          <View className={styles.content}>
            <Text className={styles.title}>{tarefa.titulo}</Text>
            <Text>{tarefa.descricao}</Text>
          </View>
          <Pressable className={styles.button}>
            {({ pressed }) => (
              <Ionicons
                name="checkmark-circle-outline"
                size={32}
                color={tarefa.concluido ? 'green' : 'black'}
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
