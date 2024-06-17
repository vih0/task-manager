import React from 'react';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import { Pressable, Text, TextInput, View } from 'react-native';

import { Methods } from '~/functions/methods';
import { styles } from './styles';
type FormData = {
  titulo: string;
  descricao: string;
  prioridade: number;
};

export function TaskForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData, FieldValues>({
    defaultValues: {
      titulo: '',
      descricao: '',
      prioridade: 1,
    },
  });

  const onSubmit = (data: FormData) => {
    const handlePost = async () =>
      await Methods.post({
        url: 'http://192.168.0.21:8080/tarefa/criar',
        body: [
          {
            descricao: data.descricao,
            prioridade: data.prioridade,
            titulo: data.titulo,
          },
        ],
      });
    handlePost();
  };
  return (
    <View className={styles.content}>
      <Text className={styles.label}>Titulo</Text>
      <View className={styles.container_input}>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className={styles.input}
              placeholder='Digite o titulo da sua tarefa'
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
          name="titulo"
        />
      </View>
      {errors.titulo && <Text className={styles.error_text}>Campo Obrigatorio.</Text>}
      <Text className={styles.label}>Descrição</Text>
      <View className={styles.container_input}>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className={styles.input}
              placeholder='Digite o descrição da sua tarefa'
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
          name="descricao"
        />
      </View>
      {errors.descricao && <Text className={styles.error_text}>Campo Obrigatorio.</Text>}
      <Pressable className={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text className={styles.text_button}>Salvar</Text>
      </Pressable>
    </View>
  );
}

