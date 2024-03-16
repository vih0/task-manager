import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, Text, TextInput, View } from 'react-native';
type FormData = {
  title: string;
  description: string;
  priority: number;
};

export function TaskForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      title: '',
      description: '',
      priority: 0,
    },
  });
  return (
    <View className={styles.content}>
      <Text>Titulo</Text>
      <View className={styles.container_input}>
        <TextInput className={styles.input} />
      </View>
      <Text>Descrição</Text>
      <View className={styles.container_input}>
        <Controller control={control} />
         <TextInput className={styles.input} />
      </View>
      <Button title="Salvar" />
    </View>
  );
}
const styles = {
  content: `w-full flex gap-2`,
  input: `w-full h-full font-size text-xl`,
  container_input: `border border-gray-300 w-full h-20 rounded px-2`,
};
