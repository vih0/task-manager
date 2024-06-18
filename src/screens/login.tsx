import React, { Text, TouchableOpacity, View } from 'react-native';
import { Controller, FieldValues, useForm } from 'react-hook-form';

import { Input } from '~/components';
import { Methods } from '~/functions/methods';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '~/contexts/auth';

type UserProps = {
  user: string
  senha: string
}

export function Login() {
  const { signIn } = useAuth()
  const navigation = useNavigation()
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
    const handlePost = async () => {
      await signIn(data.user, data.senha)
    }
    // await Methods.post({
    //   url: 'http://192.168.0.21:8080/usuario/login',
    //   body: {
    //     login: data.user,
    //     senha: data.senha
    //     },
    //     });
    handlePost();

  }
  return (
    <View className='flex flex-1 gap-9 py-6 w-full items-center justify-center bg-zinc-800'>
      <View className='flex gap-9 my-6 w-11/12'>

        <Text className='text-2xl text-center text-zinc-200 font-medium mt-6'>Faça Login para começar a Organizar suas atividades</Text>
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
            <Input

              value={value}
              onChangeText={onChange}
              placeholder='Insira sua senha'
              secureTextEntry
            />
          )}
          name='senha'
        />
        <View>
          <TouchableOpacity
            onPress={handleSubmit(handleCreateUser)}
            className='bg-violet-900 p-5 rounded-md'
          >
            <Text className='text-slate-100 font-bold text-center text-lg uppercase'>entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
            <Text className='self-end text-zinc-400 font-medium mt-5'>Ainda não tem cadastro? clique aqui</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}