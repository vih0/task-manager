import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import { Methods } from '../functions/methods';

import { Tarefas } from '~/@types';
import { TasksList } from '~/components';
import { EmptyList } from '~/components/empty-list';
import { useAuth } from '~/contexts/auth';

export function Home() {
  const [tasks, setTasks] = useState([]);
  const {authData} = useAuth()

  // useEffect(() => {
  //   Methods.get({ url: 'https://jsonplaceholder.typicode.com/posts', setResult: setTasks })
  //     .then(() => console.log('Dados carregados com sucesso!'))
  //     .catch((err) => console.error('Erro ao carregar dados:', err));
  // }, []);
  const navigation = useNavigation();
  const isEmptyArray = tasks.length === 0
  const day = new Date();
  const formatedDate = Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
  }).format(day);
  return (
    <View className="items-center flex-1 justify-start mt-4 relative">
      <View className="flex flex-row justify-around w-full">
        <Text className='font-semibold color-zinc-600 text-lg text-left'
        >Ola, {authData?.name}, suas atividades esperam por você!
        </Text>
        <Text className="text-xl font-bold">Suas Atividades</Text>
        <Text className="text-xl font-bold">{formatedDate}</Text>
      </View>
      <View className="h-[1px] my-7 w-4/5 bg-gray-200" />

      {isEmptyArray ? <EmptyList /> : <TasksList tarefas={tasks} />}
      <Pressable className="p-3 bg-blue-700 rounded-full absolute bottom-20 right-10 active:bg-blue-800" onPress={() => navigation.navigate('Modal' as never)}>
        <Ionicons name="add-outline" size={30} color="white" />
      </Pressable>
    </View>
  );
};
