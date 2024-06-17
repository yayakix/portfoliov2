
import { useSpring, animated } from '@react-spring/web'
import React from 'react'

export default function Test() {
    const springs = useSpring({
        from: { x: 0 },
        to: { x: 500 },
    })

    return (
        <animated.div
            style={{
                width: 80,
                height: 80,
                background: '#ff6d6d',
                borderRadius: 8,
                ...springs,
            }}
        >
        </animated.div>

    )
}