import React, { useState, useEffect, useRef } from 'react'

export { useCountdown }

const useCountdown = (initialTime:number = 10, range:number = 100) => {
    const [time, setTime] = useState(initialTime*1000)
    const countRef = useRef<NodeJS.Timeout>(null!)


    const startTimer = () => {
        countRef.current = setInterval(() => {
            setTime(prev => {
                if (prev < 0.1) {
                    clearInterval(countRef.current)
                    return 0
                }
                return prev - range
            })
        }, range)
    }
    const stopTimer = () => {
        clearInterval(countRef.current)
        setTime(0)
    }

    const pauseTimer = () => {
        clearInterval(countRef.current)
    }

    return {time, startTimer, stopTimer, pauseTimer, setTime}
}