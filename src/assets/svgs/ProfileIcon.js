import React from 'react';
import Svg, {Mask, G, Path, Defs} from 'react-native-svg';

const ProfileIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width || 30}
      height={props?.height || 30}
      viewBox="0 0 30 30"
      fill="none">
      <Path
        d="M15.3021 15.7839C15.2157 15.7716 15.1045 15.7716 15.0057 15.7839C12.832 15.7098 11.103 13.9313 11.103 11.7453C11.103 9.50986 12.9061 7.69434 15.1539 7.69434C17.3894 7.69434 19.2049 9.50986 19.2049 11.7453C19.1925 13.9313 17.4758 15.7098 15.3021 15.7839Z"
        stroke={props.color || "#A0ABBB" }
        stroke-width="1.85257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M23.4782 23.9354C21.2798 25.9485 18.3651 27.1712 15.154 27.1712C11.9429 27.1712 9.02813 25.9485 6.82975 23.9354C6.95325 22.7744 7.69428 21.6382 9.01578 20.749C12.3998 18.5012 17.9328 18.5012 21.2922 20.749C22.6137 21.6382 23.3547 22.7744 23.4782 23.9354Z"
        stroke={props.color || "#A0ABBB" }
        stroke-width="1.85257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M15.154 27.1711C21.975 27.1711 27.5045 21.6416 27.5045 14.8206C27.5045 7.9996 21.975 2.47009 15.154 2.47009C8.33298 2.47009 2.80347 7.9996 2.80347 14.8206C2.80347 21.6416 8.33298 27.1711 15.154 27.1711Z"
        stroke={props.color || "#A0ABBB" }
        stroke-width="1.85257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default ProfileIcon;
