import React, { useEffect, useRef } from 'react'
import { Animated, View, Text, ProgressViewIOSComponent } from 'react-native'
import { MyText } from './commons'

export { FadeInView, InfiniteRotation }


const FadeInView = (props:any) => {
    const fadeAnim = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
              toValue: 1,
              duration: 10000,
              useNativeDriver: true
            }
          ).start();
        }, [fadeAnim])

    return (
        <Animated.View style={{...props.style, opacity: fadeAnim }}>{props.children}</Animated.View>
    )
}

const InfiniteRotation = (props:any) => {
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