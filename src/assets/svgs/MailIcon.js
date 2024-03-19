import React from 'react';
import Svg, {Mask, G, Path, Rect, ClipPath, Defs} from 'react-native-svg';

const MailIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width || 20}
      height={props?.height || 21}
      viewBox="0 0 20 21"
      fill="none">
      <Path
        d="M18.3334 5.28495C18.3334 4.36829 17.5834 3.61829 16.6667 3.61829H3.33341C2.41675 3.61829 1.66675 4.36829 1.66675 5.28495M18.3334 5.28495V15.285C18.3334 16.2016 17.5834 16.9516 16.6667 16.9516H3.33341C2.41675 16.9516 1.66675 16.2016 1.66675 15.285V5.28495M18.3334 5.28495L10.0001 11.1183L1.66675 5.28495"
        stroke="#667085"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default MailIcon;
