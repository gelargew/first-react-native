import React from 'react'
import { View, Button, TextInput, Text } from 'react-native'
import { MyText } from '../components/commons'
import { useCountdown } from '../customs/hooks'


export const Timer = () => {
    const {time, startTimer, stopTimer, pauseTimer, setTime} = useCountdown(5)

    return (
        <View>
            <TextInput onChangeText={val => setTime(parseInt(val)*1000)} />
            <Text style={{fontSize: 48}}>{time}</Text>
            <Button title='start' onPress={startTimer} />
            <Button title='STOP' onPress={stopTimer} />
            <Button title='pause' onPress={pauseTimer} />
        </View>
    )
}