import React, { useContext, useState } from 'react'
import * as Google from 'expo-auth-session/providers/google'
import { DefaultWrapper } from './DefaultWrapper'
import { TextInput, Button, Text } from 'react-native'
import { globalState } from '../../App'

export { LoginScreen }

const LoginScreen = () => {
    const {setUser} = useContext(globalState)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = () => {
        setUser({email})
    }

    return (
        <DefaultWrapper>
            <Text style={{fontSize: 48}}>Login</Text>
            <TextInput placeholder='email' value={email} onChangeText={setEmail} />
            <TextInput secureTextEntry placeholder='password' value={password} onChangeText={setPassword} />
            <Button title='Login' onPress={login} disabled={email.length < 5} />

        </DefaultWrapper>
    )
}
