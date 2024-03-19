import React from 'react';
import Svg, {Mask, G, Path, Rect} from 'react-native-svg';

const SelectorOff = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width || 20}
      height={props?.height || 20}
      viewBox="0 0 20 20"
      fill="none">
      <Rect x="2.5" y="2.5" width="15" height="15" rx="7.5" stroke="#838799" />
    </Svg>
  );
};

export default SelectorOff;
