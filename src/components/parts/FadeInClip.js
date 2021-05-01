import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function FadeInClip({ name, children }) {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <animated.div
      style={props}
      className="flex items-center justify-center h-20 p-2 m-1 text-xl font-bold text-white transition duration-500 bg-gray-700 border border-black rounded-md hover:bg-gray-400 hover:text-black w-54"
    >
      {children}
    </animated.div>
  );
}
