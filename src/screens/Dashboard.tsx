import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'


export const Dashboard = () => {
    const [count, setCount] = useState(0)

    
    return (
        <View>
            <Text>{count}</Text>
            <Button onPress={() => setCount(count + 1)} title='add' />

        </View>
    )
}