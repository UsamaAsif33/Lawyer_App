import React from 'react';
import Svg, {Mask, G, Path, Rect,Defs,ClipPath } from 'react-native-svg';

const ArrowRight = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none">
      <G clip-path="url(#clip0_1387_1598)">
        <Path
          d="M4.66675 10H16.3334"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M13 13.3333L16.3333 10"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M13 6.66675L16.3333 10.0001"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1387_1598">
          <Rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0.5)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default ArrowRight;
