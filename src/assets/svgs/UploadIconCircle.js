import React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

const UploadIconCircle = props => {
  return (
    <Svg
      width={props?.width || 19}
      height={props?.height || 19}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Circle cx="9.62285" cy="9.50727" r="9.31768" fill="#10357F" />
      <Path
        d="M13.412 11.4826V12.612C13.412 13.2358 12.9064 13.7414 12.2826 13.7414H6.63552C6.01176 13.7414 5.5061 13.2358 5.5061 12.612V11.4826M9.45906 11.4826L9.45906 5.83551M9.45906 5.83551L10.5885 6.96493M9.45906 5.83551L8.32964 6.96493"
        stroke="white"
        stroke-width="1.12942"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default UploadIconCircle;
