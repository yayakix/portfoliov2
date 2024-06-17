import React from 'react';
import TypeAnimation from 'react-type-animation';

function AnimationComponent() {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'QA Engineer',
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                'Software Developer',
                2000,
                'Turtle Mom',
                2000,
                'Gamer',
                2000,
                'Traveler',
                2000,
            ]}
            wrapper="span"
            speed={10}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
        />
    );
};
export default AnimationComponent;
