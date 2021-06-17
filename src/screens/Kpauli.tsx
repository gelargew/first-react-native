import React, { useState, useRef } from 'react'
import { randomArray } from '../customs/utils'
import { View, FlatList, Text } from 'react-native'
import { DefaultWrapper } from './DefaultWrapper'

export { Kpauli }

const Kpauli = () => {
    const [numbers, setNumbers] = useState(randomArray({length:5000}))

    const renderItem = ({item, index}: any) => (
        <View>
            <Text style={{fontSize: 36}}>{item}</Text>
        </View>
    )

    return (
        <DefaultWrapper>
            <FlatList scrollEnabled={false} removeClippedSubviews data={numbers} renderItem={renderItem} />
        </DefaultWrapper>
    )
}