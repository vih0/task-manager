import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"
import React, { ReactNode, useContext, useEffect } from "react"
import { createContext, useState } from "react"
import { Alert } from "react-native"
import { Methods } from "~/functions/methods"

type AuthData = {
    token: string
    login: string
    name: string
}

type AuthContextData = {
    authData?: AuthData
    signIn: (email: string, password: string) => Promise<AuthData>
    signOut: () => Promise<void>
    loading: boolean;

}
export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [loading, setisLoading] = useState(true);

    const [authData, setAuth] = useState<AuthData>()
    useEffect(() => {
        loadStorageData();
    }, []);

    async function loadStorageData(): Promise<void> {
        try {

            const authDataSerialized = await AsyncStorage.getItem('@AuthData');
            if (authDataSerialized) {

                const _authData: AuthData = JSON.parse(authDataSerialized);
                setAuth(_authData);
            }
        } catch (error) {

        } finally {
            setisLoading(false);
        }
    }


    async function signIn(login: string, password: string): Promise<AuthData> {
        try {
            const response = await axios.post('http://192.168.0.21:8080/usuario/login', {
                login,
                senha: password,
            });
            const result = await response
            if (result.status !== 200) {
                throw new Error(result.data.message || 'Authentication failed');
            }
            AsyncStorage.setItem('@AuthData', JSON.stringify(authData));
            const token = result.data.token;
            const newAuthData = { token, login, name: result.data.name || '' };
            setAuth(newAuthData);
            console.log(newAuthData)
            return { token, login, name: result.data.name || '' };
        } catch (err) {
            Alert.alert("nao foi possivel logar", 'falha na autenticação')
            throw new Error('Login failed: ' + err);
        }
        finally {
            setisLoading(false)
        }
    }

    async function signOut() {
        setAuth(undefined)
    }
    return (
        <AuthContext.Provider value={{ authData, loading, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}
export function useAuth() {
    const authContext = useContext(AuthContext)
    return authContext
}