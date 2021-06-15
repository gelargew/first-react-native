import React from 'react'
import { View, Button, TextInput } from 'react-native'
import { MyText } from '../components/commons'
import { useCountdown } from '../customs/hooks'


export const Timer = () => {
    const {time, startTimer, stopTimer, pauseTimer, setTime} = useCountdown(5)

    return (
        <View>
            <TextInput onChangeText={val => setTime(parseInt(val)*1000)} style={{backgroundColor: 'white'}} />
            <MyText style={{fontSize: 48}}>{time}</MyText>
            <Button title='start' onPress={startTimer} />
            <Button title='STOP' onPress={stopTimer} />
            <Button title='pause' onPress={pauseTimer} />
        </View>
    )
}