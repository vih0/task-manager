import React from 'react';
import { Text, View } from 'react-native';

import EditScreenInfo from '../components/edit-screen-info';

import { TasksList } from '~/components/tasks-list';

const Page = () => {
  const day = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const date = `${day}/0${month}/${year}`;

  return (
    <View className={styles.container}>
      <View className={styles.content}>

      <Text className={styles.title}>Suas Atividades</Text>
      <Text className={styles.title}>{date}</Text>
      </View>
      <View className={styles.separator} />
      <TasksList />
    </View>
  );
};

export default Page;

const styles = {
  container: `items-center flex-1 justify-start mt-4`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `text-xl font-bold`,
  content: `flex flex-row justify-around w-full`,
};
