import React, { Button, Text, TouchableOpacity, View } from 'react-native';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import { Input } from '~/components/input';
import { Methods } from '~/functions/methods';

type UserProps = {
  user: string
  senha: string
  nome: string
}

export function Cadastro() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserProps, FieldValues>({
    defaultValues: {
      user: '',
      senha: ''
    },
  });
  const handleCreateUser = (data: UserProps) => {
    const handlePost = async () =>
      await Methods.post({
        url: 'http://192.168.0.21:8080/usuario/cadastrar',
        body: {
          login: data.user,
          senha: data.senha,
          nome: data.nome
        },
      });
    handlePost();
  }
  return (
    <View className='flex gap-9 my-6 w-11/12 mx-auto'>
      <Text className='text-2xl text-center text-slate-800 font-medium mt-6'>Realize o cadastro para ultilizar nossos serviços</Text>
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <Input value={value} onChangeText={onChange} placeholder='Insira seu nome' />
        )}
        name='nome'
      />
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={onChange}
            value={value} placeholder='Insira seu login' />
        )}
        name='user'
      />
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <Input value={value} onChangeText={onChange} placeholder='Insira sua senha' />
        )}
        name='senha'
      />

      <TouchableOpacity
        onPress={handleSubmit(handleCreateUser)}
        className='bg-blue-900 p-5 rounded-md'
      >
        <Text className='text-slate-100 font-bold text-center text-lg uppercase'>entrar</Text>
      </TouchableOpacity>
    </View>
  )
}