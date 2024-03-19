import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function DropdownBottomIcon(props) {
  return (
    <Svg
    style={{alignSelf:"center"}}
      width={props?.width || 14}
      height={props?.height || 8}
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M1 1l6 6 6-6"
        stroke="#676767"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default DropdownBottomIcon;
