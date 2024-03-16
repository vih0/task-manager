import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { TasksList } from '~/components';

const Page = () => {
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
      <TasksList />
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
