import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '~/screens/home';
import { Profile } from '~/screens/profile';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export function TabsStack() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#4c1d95',
                    height: 70,
                    borderTopColor: 'transparent'
                },
                tabBarActiveTintColor: '#f4f4f5'
            }}
        >
            <Tab.Screen name="Incío" component={Home} options={{
                tabBarIcon: ({ size, color }) => (
                    <Feather name="home" size={size} color={color} />
                ),
                headerTitle: '',
                headerStyle: {
                    backgroundColor: '#4c1d95'
                }
            }} />
            <Tab.Screen name="Perfil" component={Profile}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="user" size={size} color={color} />
                    ),
                    headerTitle: '',
                    headerStyle: {
                        backgroundColor: '#4c1d95'
                    }
                }}
            />
        </Tab.Navigator>
    );
}