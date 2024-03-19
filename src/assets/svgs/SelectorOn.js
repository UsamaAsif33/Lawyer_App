import React from 'react';
import Svg, {Circle, Rect} from 'react-native-svg';

const SelectorOn = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width || 20}
      height={props?.height || 20}
      viewBox="0 0 20 20"
      fill="none">
      <Rect
        x="3"
        y="3"
        width="14"
        height="14"
        rx="7"
        stroke="#10357F"
        stroke-width="2"
      />
      <Circle cx="10" cy="10" r="4" fill="#10357F" />
    </Svg>
  );
};

export default SelectorOn;
