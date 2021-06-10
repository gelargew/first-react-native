import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MyText } from '../components/commons'


export const Style = () => {

    return (
        <View style={styles.container}>
            <MyText>StylePage</MyText>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: 
        {
            backgroundColor: '#121212',
            placeSelf: 'center',
            color: 'white'
        }
    }
)