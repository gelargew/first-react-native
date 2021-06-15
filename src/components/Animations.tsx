import React, { useEffect, useRef } from 'react'
import { Animated, View, Text, ProgressViewIOSComponent } from 'react-native'
import { componentType } from './types'

export { FadeInView, InfiniteRotation }

const FadeInView = (props:componentType) => {
    const fadeAnim = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.loop(
            Animated.timing(fadeAnim,
                {
                toValue: 1,
                duration: 3000,
                useNativeDriver: true
                }
            )
        ).start();
        }, [fadeAnim])

    return (
        <Animated.View style={{...props.style, 
            opacity: fadeAnim.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [0, 1, 0]
            }) }}>{props.children}</Animated.View>
    )
}

const InfiniteRotation = (props:componentType) => {
    const rotateAnim = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(
            rotateAnim,
            {
                toValue: 1,
                duration: 5000,
                useNativeDriver: true
            }
        ).start()
        console.log(rotateAnim)
    }, [rotateAnim])

    return (
        <Animated.View style={{ ...props.style, 
            transform: [
                { rotateY: '180deg'},
                { perspective: 1000 }
            ]
        }}>
            {props.children}
        </Animated.View>
    )
}

const Looping = (props:any) => {

    return <View>sad</View>
}