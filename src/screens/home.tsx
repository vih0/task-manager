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
  const { authData } = useAuth()

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
    <View className="items-center flex-1 justify-start pt-4 relative bg-zinc-800">
      <View className="flex flex-col justify-around w-full px-4 my-4">
        <Text className='font-semibold color-zinc-200 text-2xl text-left mb-5'
        >Ola, {authData?.name}, suas atividades esperam por você!
        </Text>
        <View className='flex w-full flex-row justify-between'>
          <Text className="text-xl color-zinc-200 font-bold">Suas Atividades</Text>

          <Text className="text-xl color-zinc-200 font-bold">{formatedDate}</Text>
        </View>
      </View>
      <View className="h-[1px] my-7 w-4/5 bg-violet-800" />

      {isEmptyArray ? <EmptyList /> : <TasksList tarefas={tasks} />}
      <Pressable className="p-3 bg-violet-700 rounded-full absolute bottom-20 right-10 active:bg-violet-900" onPress={() => navigation.navigate('Modal' as never)}>
        <Ionicons name="add-outline" size={30} color="white" />
      </Pressable>
    </View>
  );
};
