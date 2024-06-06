import { FontAwesome, Ionicons, AntDesign, Feather } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Pressable } from 'react-native';

import { RootStackParamList } from '.';
import TabNavigator from './tab-navigator';
import Home from '../screens/home';
import { Login } from '~/screens/login';
import { Cadastro } from '~/screens/cadastro';
import { Profile } from '~/screens/profile';

type Props = StackScreenProps<RootStackParamList, 'DrawerNavigator'>;

const Drawer = createDrawerNavigator();

export default function DrawerNavigator({ navigation }: Props) {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ size, color }) => (
            <Feather name="home" size={size} color={color} />
          ),
          headerTitle: '',
        }}
      />

      <Drawer.Screen
        name="Perfil"
        component={Profile}
        options={{
          drawerIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
          headerTitle: '',
        }}
      />
      <Drawer.Screen
        name="login"
        component={Login}
        options={{
          headerTitle: '',
        }}
      />
      <Drawer.Screen
        name="cadastro"
        component={Cadastro}
        options={{
          headerTitle: '',
        }}
      />

    </Drawer.Navigator>
  );
}
