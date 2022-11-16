// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useSpring, animated } from 'react-spring';

export function Arrow ({ extend = false, justifySelf }) {
  const { viewBox } = useSpring({ viewBox: extend ? '0 0 254 24' : '0 0 284 24' });

  return (
    <animated.svg style={{ justifySelf }} width="254" height="24" viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M253.061 13.0607C253.646 12.4749 253.646 11.5251 253.061 10.9393L243.515 1.3934C242.929 0.807611 241.979 0.807611 241.393 1.3934C240.808 1.97918 240.808 2.92893 241.393 3.51472L249.879 12L241.393 20.4853C240.808 21.0711 240.808 22.0208 241.393 22.6066C241.979 23.1924 242.929 23.1924 243.515 22.6066L253.061 13.0607ZM252 10.5L1.31134e-07 10.5L-1.31134e-07 13.5L252 13.5L252 10.5Z"
        fill="#8C8E87"
      />
    </animated.svg>
  );
}

export function ReverseArrow ({ extend = false }) {
  const { viewBox } = useSpring({ viewBox: extend ? '0 0 254 24' : '-20 0 254 24' });

  return (
    <animated.svg width="254" height="24" viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.939346 10.9393C0.353546 11.5251 0.353546 12.4749 0.939346 13.0606L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.071 12.6066 20.4853L4.12132 12L12.6066 3.5147C13.1924 2.92891 13.1924 1.97916 12.6066 1.39338C12.0208 0.80759 11.0711 0.80759 10.4853 1.39338L0.939346 10.9393ZM254 10.5L2 10.5L2 13.5L254 13.5L254 10.5Z"
        fill="#8C8E87"
      />
    </animated.svg>
  );
}
