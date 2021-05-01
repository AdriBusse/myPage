import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function AnimatedNumber({ number }) {
  //animate number
  const animationNumber = useSpring({ number: number, from: { number: 0 } });
  return (
    <div>
      <animated.span>
        {animationNumber.number.interpolate((val) => Math.floor(val))}
      </animated.span>
    </div>
  );
}
