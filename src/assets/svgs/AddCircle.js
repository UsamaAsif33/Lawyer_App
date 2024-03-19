import React from 'react';
import Svg, {Circle, G, Path, Defs} from 'react-native-svg';
import {COLORS} from '../../shared/theme';

const AddCircle = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width || 20}
      height={props?.height || 20}
      viewBox="0 0 20 20"
      fill="none">
      <Path
        d="M5.57666 9.72514L9.55998 9.72514M9.55998 9.72514L13.5433 9.72514M9.55998 9.72514V5.74182M9.55998 9.72514L9.55998 13.7085"
        stroke="#10357F"
        stroke-width="1.59333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Circle
        cx="9.55963"
        cy="9.72491"
        r="7.16998"
        stroke="#10357F"
        stroke-width="1.59333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default AddCircle;
