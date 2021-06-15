import React, { useState, useContext } from 'react'
import { View, TextInput, Button } from 'react-native'
import { globalState } from '../../App'
import { MyText } from '../components/commons'

export {TextForm}


const TextForm = () => {
    const [text, setText] = useState('qwe')
    const {darkTheme, setDarkTheme} = useContext(globalState)

    const handleSubmit = () => {
        console.log('submitted', text)
        setDarkTheme(!darkTheme)
    }

    return (
        <View>
            <MyText style={{fontSize: 48}}>{darkTheme ? 'DARK' : 'LIGHT'}</MyText>
            <MyText>{text}</MyText>
            <TextInput onChangeText={setText} value={text} onSubmitEditing={handleSubmit} autoFocus/>
            <Button title='submit' onPress={handleSubmit} color='yellowgreen' />
        </View>
    )
}