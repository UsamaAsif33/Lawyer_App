import React from 'react';
import Svg, {Mask, G, Path, Rect, ClipPath, Defs} from 'react-native-svg';
import { COLORS } from '../../shared/theme';

const Bell = props => {
  return (
    <Svg
    // style={{backgroundColor:COLORS.primary,}}
    // style={{backgroundColor:props?.backgroundColor || COLORS.white,borderRadius:123}}
    style={{backgroundColor:props.display?COLORS.primary:COLORS.white,borderRadius:123}}
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width || 24}
      height={props?.height || 25}
      viewBox="0 0 24 25"
      fill="none">
      <Path
        d="M5.82474 14.8452L5.13601 14.1908L5.82474 14.8452ZM7.95 9.91113C7.95 7.67438 9.76325 5.86113 12 5.86113V3.96113C8.71391 3.96113 6.05 6.62504 6.05 9.91113H7.95ZM7.95 12.6675V9.91113H6.05V12.6675H7.95ZM5.95 16.9111C5.95 16.3636 6.16339 15.868 6.51346 15.4995L5.13601 14.1908C4.46387 14.8983 4.05 15.8574 4.05 16.9111H5.95ZM7 16.9611H6V18.8611H7V16.9611ZM17 16.9611H7V18.8611H17V16.9611ZM18 16.9611H17V18.8611H18V16.9611ZM17.4865 15.4995C17.8366 15.868 18.05 16.3636 18.05 16.9111H19.95C19.95 15.8574 19.5361 14.8983 18.864 14.1908L17.4865 15.4995ZM16.05 9.91113V12.6675H17.95V9.91113H16.05ZM12 5.86113C14.2368 5.86113 16.05 7.67438 16.05 9.91113H17.95C17.95 6.62504 15.2861 3.96113 12 3.96113V5.86113ZM18.864 14.1908C18.2573 13.5522 17.95 13.0914 17.95 12.6675H16.05C16.05 13.9389 16.9256 14.909 17.4865 15.4995L18.864 14.1908ZM4.05 16.9111C4.05 17.9881 4.92304 18.8611 6 18.8611V16.9611C5.97239 16.9611 5.95 16.9387 5.95 16.9111H4.05ZM18 18.8611C19.077 18.8611 19.95 17.9881 19.95 16.9111H18.05C18.05 16.9387 18.0276 16.9611 18 16.9611V18.8611ZM6.05 12.6675C6.05 13.0914 5.74271 13.5522 5.13601 14.1908L6.51346 15.4995C7.07442 14.909 7.95 13.9389 7.95 12.6675H6.05Z"
        fill={props?.display?COLORS.white : COLORS.primary}
      />
      <Path
        d="M13.7976 20.7879C13.6312 21.129 13.3712 21.4157 13.048 21.6146C12.7247 21.8135 12.3516 21.9162 11.9721 21.9109C11.5926 21.9056 11.2224 21.7925 10.9049 21.5847C10.5873 21.3768 10.3354 21.083 10.1786 20.7373"
        stroke={props?.display?COLORS.white : COLORS.primary}
        stroke-width="1.9"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12 3.91113V4.91113"
        stroke="#10357F"
        stroke-width="1.9"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default Bell;
