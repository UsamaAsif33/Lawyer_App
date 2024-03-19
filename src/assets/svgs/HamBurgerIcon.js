import React from 'react';
import Svg, {Mask, G, Path, Rect,Defs,ClipPath} from 'react-native-svg';

const HamBurgerIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width || 24}
      height={props?.height || 25}
      viewBox="0 0 24 25"
      fill="none">
      <G clip-path="url(#clip0_1447_1321)">
        <Path
          d="M4 6.91113H20"
          stroke="#10357F"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M4 12.9111H20"
          stroke="#10357F"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M4 18.9111H20"
          stroke="#10357F"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1447_1321">
          <Rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.911133)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default HamBurgerIcon;
