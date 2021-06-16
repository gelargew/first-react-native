import React, { useState} from 'react'
import { useLayoutEffect } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { View, Text, FlatList, Button, ScrollView } from 'react-native'

export {ListScreen}

const ListScreen = () => {
    const [numbers, setNumbers] = useState([1,4,2,3,4,5,2,2,4,3,2,1,5,4,3])
    const [position, setPosition] = useState(6)
    const listRef = useRef<FlatList>(null!)

    useLayoutEffect(() => {
        handleScroll()
    }, [position])

    const renderItem = ({item, index}: any) => (
        <View key={index} style={{backgroundColor: 'grey', height:50}}>
            <Text style={{fontSize: 32}}>{item} index: {index}</Text>
        </View>
    )
    
    const handleScroll = () => {
        listRef.current.scrollToOffset({offset: position * 50})
    }
    const handleUp = () => {
        if (position > 0) {
            setPosition(position - 1)
        }
    }
    const handleDown = () => {
        setPosition(position + 1)
    }

    return (
        <>
        <View style={{height: 100, justifyContent: 'center', alignContent: 'center'}}>
            <FlatList ref={listRef} scrollEnabled={false} data={numbers} renderItem={renderItem} initialScrollIndex={position} />
        </View>
        <Button onPress={handleUp} title='up' />
        <Button onPress={handleDown} title='down' />
        <Text>{position}</Text>
        </>
    ) 

}