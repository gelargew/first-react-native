import React from 'react'
import { Text, StyleSheet } from 'react-native'

export { MyText }


const MyText = (props:any) => {
    return <Text style={{ ...darkTheme.text, ...props.style }}>{props.children}</Text>
}


const darkTheme = {
    text: {
        color: 'white',
    }
}