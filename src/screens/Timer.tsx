import React from 'react'
import { View, Button, TextInput, Text } from 'react-native'
import { MyText } from '../components/commons'
import { useCountdown } from '../customs/hooks'
import { DefaultWrapper } from './DefaultWrapper'


export const Timer = () => {
    const {time, startTimer, stopTimer, pauseTimer, setTime, isActive} = useCountdown(5)

    return (
        <DefaultWrapper>
            <TextInput onChangeText={val => setTime(parseInt(val)*1000)} />
            <Text style={{fontSize: 48}}>{time}</Text>
            {isActive ? 
            <Button title='pause' onPress={pauseTimer} />
            :
            <Button title='start' onPress={startTimer} />
            }
      
            <Button title='STOP' onPress={stopTimer} />
            
        </DefaultWrapper>
    )
}