import React, { Button, View } from 'react-native';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import { Input } from '~/components/input';
import { useState } from 'react';
import { Methods } from '~/functions/methods';

type UserProps = {
    user:string
    senha:string
}

export function Login(){
    const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm<UserProps, FieldValues>({
        defaultValues: {
         user:'',
         senha: ''
        },
      });
    const handleCreateUser =  (data:UserProps)=>{
            const handlePost = async () =>
              await Methods.post({
                url: 'http://192.168.0.21:8080/usuario/cadastrar',
                body:{
                    login:data.user,
                    senha:data.senha
                },
              });
            handlePost();
    }
    return( 
    <View>
         <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
              <Input 
              onChangeText={onChange}
              value={value} />
          )}
          name='user'
          />
          <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
              <Input value={value} onChangeText={onChange}/>
            )}
            name='senha'
          />
        <Button
        onPress={handleSubmit(handleCreateUser)}
        title='Cadastrar'
        />
    </View>
)
}