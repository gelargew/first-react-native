import React from 'react'
import { Text, StyleSheet, Button, NativeTouchEvent, NativeSyntheticEvent, Pressable } from 'react-native'
import { ButtonType } from './types'

export { MyText }


const MyText = (props:any) => {
    return <Text style={{ ...darkTheme.text, ...props.style }}>{props.children}</Text>
}

const MyButton = (props:ButtonType) => {
    const {backgroundColor, color} = props
    
    return (
    <Pressable onPress={props.onPress} style={{...darkTheme.button, backgroundColor}}>
        <Text style={{color}}>{props.title}</Text>
    </Pressable>
    )
}


const darkTheme = {
    text: {
        color: 'white',
    },
    button: {
        backgroundColor: 'white',
        color: 'black'
    }
}