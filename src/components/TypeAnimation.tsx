import React from 'react';
import TypeAnimation from 'react-type-animation';

function AnimationComponent() {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'Software Engineer',
                4000, // wait 1s before replacing "Mice" with "Hamsters"
                'Dog Mom',
                2000,
                'Turtle Mom',
                2000,
                'World traveler',
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
