import React, { useState } from 'react'
import { View, TextInput, Button } from 'react-native'
import { MyText } from '../components/commons'

export {TextForm}


const TextForm = () => {
    const [text, setText] = useState('qwe')

    const handleSubmit = () => {
        console.log('submitted', text)
    }

    return (
        <View>
            <MyText style={{fontSize: 48}}>Heloo</MyText>
            <MyText>{text}</MyText>
            <TextInput onChangeText={setText} value={text} onSubmitEditing={handleSubmit} autoFocus/>
            <Button title='submit' onPress={handleSubmit} color='yellowgreen' />
        </View>
    )
}