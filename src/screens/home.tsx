import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Tarefas } from '~/@types';

import { TasksList } from '~/components';

const Page = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://192.168.0.21:8080/tarefa/listar');
        if (!response.ok) {
          throw new Error('Erro ao carregar tarefas');
        }
        const json = await response.json();
        setTasks(json.content);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  const navigation = useNavigation();

  const day = new Date();
  const formatedDate = Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
  }).format(day);

  return (
    <View className={styles.container}>
      <View className={styles.content}>
        <Text className={styles.title}>Suas Atividades</Text>
        <Text className={styles.title}>{formatedDate}</Text>
      </View>
      <View className={styles.separator} />
      <TasksList tarefas={tasks} />
      <Pressable className={styles.button} onPress={() => navigation.navigate('Modal')}>
        <Ionicons name="add-outline" size={30} color="white" />
      </Pressable>
    </View>
  );
};

export default Page;

const styles = {
  container: `items-center flex-1 justify-start mt-4 relative`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `text-xl font-bold`,
  content: `flex flex-row justify-around w-full`,
  button: `p-3 bg-blue-700 rounded-full absolute bottom-20 right-10 active:bg-blue-800`,
};
