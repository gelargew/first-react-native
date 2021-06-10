import React from 'react'
import { Text, StyleSheet } from 'react-native'

export { MyText }


const MyText = (props:any) => {
    return <Text style={darkTheme.text}>{props.children}</Text>
}


const darkTheme = StyleSheet.create({
    text: {
        color: 'white'
    }
})