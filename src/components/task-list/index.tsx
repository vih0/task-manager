import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { Tarefas } from '~/@types';
import { styles } from './styles';

export function TasksList({ tarefas }: Tarefas) {
  const isEmptyArray = tarefas.length
console.log(isEmptyArray)
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

