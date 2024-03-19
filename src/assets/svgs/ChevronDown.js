import React from 'react';
import Svg, {Mask, G, Path, Rect, ClipPath, Defs} from 'react-native-svg';

const ChevronDown = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width || 20}
      height={props?.height || 21}
      viewBox="0 0 20 21"
      fill="none">
      <Path
        d="M5 7.66504L10 12.665L15 7.66504"
        stroke="#667085"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default ChevronDown;
