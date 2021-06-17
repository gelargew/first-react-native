import React from 'react'
import { View, StyleSheet } from 'react-native'


export const DefaultWrapper = (props:{children:any}) => {
    return <View style={style.container}>{props.children}</View>
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#777',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    }
})
