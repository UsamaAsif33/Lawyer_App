import React from 'react';
import Svg, {Mask, G, Path, Rect, Circle} from 'react-native-svg';

const FaceBookIcon = props => {
  return (
    <Svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Circle cx="12.5" cy="12" r="10" fill="#10357F" />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.1575 8.4789C14.8458 8.41657 14.4249 8.37 14.1602 8.37C13.4434 8.37 13.3968 8.68167 13.3968 9.18033V10.068H15.1887L15.0325 11.9069H13.3968V17.5H11.1532V11.9069H10V10.068H11.1532V8.93063C11.1532 7.37267 11.8854 6.5 13.7239 6.5C14.3626 6.5 14.8301 6.5935 15.4376 6.71817L15.1575 8.4789Z"
        fill="white"
      />
    </Svg>
  );
};

export default FaceBookIcon;
