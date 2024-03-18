import React from 'react';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import { Button, Pressable, Text, TextInput, View } from 'react-native';
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

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://192.168.0.21:8080/tarefa/criar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([
          {
            descricao: data.descricao,
            prioridade: data.prioridade,
            titulo: data.titulo,
          },
        ]),
      });

      if (!response.ok) {
        throw new Error('Erro ao criar tarefa');
      }

      const responseData = await response.json();
      console.log(responseData); // Aqui você pode lidar com a resposta do servidor conforme necessário

      return responseData; // Isso pode ser útil dependendo do que você quer fazer com a resposta
    } catch (error) {
      console.error('Erro ao enviar POST:', error);
      throw error; // Lançar o erro novamente para que o chamador possa lidar com ele, se necessário
    }
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

const styles = {
  content: `w-full flex gap-2`,
  input: `w-full h-full text-xl`,
  container_input: `border border-gray-300 w-full h-14 rounded px-2`,
  error_text: `text-xl text-red-700 font-bold`,
  label: `text-xl font-bold text-slate-600`,
  button: `bg-blue-700 active:bg-green-600 h-14 flex items-center justify-center my-4 rounded`,
  text_button: `text-current text-xl font-semibold text-white`,
};
