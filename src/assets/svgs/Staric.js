import React from 'react';
import Svg, {Mask, G, Path, Rect} from 'react-native-svg';

const Staric = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width || 24}
      height={props?.height || 23}
      viewBox="0 0 24 23"
      fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.3 0H9.7V5.94731L5.49462 1.74193L2.24193 4.99461L6.44732 9.2H0.5V13.8H6.44731L2.24193 18.0053L5.49462 21.2581L9.7 17.0527V23H14.3V17.0527L18.5054 21.2581L21.7581 18.0054L17.5527 13.8H23.5V9.2H17.5527L21.7581 4.99461L18.5054 1.74192L14.3 5.94731V0Z"
        fill="#111111"
      />
    </Svg>
  );
};

export default Staric;
