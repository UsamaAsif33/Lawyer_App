import React from 'react';
import Svg, {Mask, G, Path, Rect, ClipPath, Defs} from 'react-native-svg';

const LogOutIcon = props => {
  return (
    <Svg
      width={props?.width || 80}
      height={props?.height || 81}
      viewBox="0 0 80 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M40 54.257L53.757 40.5m0 0L40 26.744M53.757 40.5H3.317m22.927-21.786v-.224c0-5.136 0-7.704 1-9.666a9.15 9.15 0 014.007-4.008c1.963-1 4.53-1 9.666-1H62.01c5.136 0 7.704 0 9.662 1a9.16 9.16 0 014.012 4.008c1 1.957 1 4.525 1 9.652v44.053c0 5.126 0 7.69-1 9.648a9.18 9.18 0 01-4.012 4.007c-1.958 1-4.521 1-9.648 1h-21.12c-5.127 0-7.695 0-9.653-1a9.171 9.171 0 01-4.008-4.007c-1-1.963-1-4.53-1-9.667v-.229"
        stroke={props?.stroke || "#12265E"}
        // stroke="#12265E"
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default LogOutIcon;
