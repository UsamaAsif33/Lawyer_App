import React from 'react';
import Svg, {Mask, G, Path, Rect, Defs, ClipPath} from 'react-native-svg';
import {COLORS} from '../../shared/theme';

const Cross = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width || 25}
      height={props?.height || 25}
      viewBox="0 0 25 25"
      fill="none">
      <G clip-path="url(#clip0_1066_37005)">
        <Path
          d="M10.5 10.5L14.5 14.5M14.5 10.5L10.5 14.5"
          stroke="#8A8A8A"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M12.5 3.5C19.7 3.5 21.5 5.3 21.5 12.5C21.5 19.7 19.7 21.5 12.5 21.5C5.3 21.5 3.5 19.7 3.5 12.5C3.5 5.3 5.3 3.5 12.5 3.5Z"
          stroke="#8A8A8A"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1066_37005">
          <Rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.5 0.5)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default Cross;
