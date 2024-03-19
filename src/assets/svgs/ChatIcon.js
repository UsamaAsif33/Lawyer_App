import React from 'react';
import Svg, {Mask, G, Path, Rect,ClipPath,Defs} from 'react-native-svg';

const ChatIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width || 31}
      height={props?.height || 30}
      viewBox="0 0 31 30"
      fill="none">
      <G clip-path="url(#clip0_1447_825)">
        <Path
          d="M10.3334 11.25H20.3334"
          stroke={props.color || "#A0ABBB"}
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M10.3334 16.25H17.8334"
          stroke={props.color || "#A0ABBB"}
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M11.5834 22.5H7.83337C6.83881 22.5 5.88499 22.1049 5.18172 21.4017C4.47846 20.6984 4.08337 19.7446 4.08337 18.75V8.75C4.08337 7.75544 4.47846 6.80161 5.18172 6.09835C5.88499 5.39509 6.83881 5 7.83337 5H22.8334C23.8279 5 24.7818 5.39509 25.485 6.09835C26.1883 6.80161 26.5834 7.75544 26.5834 8.75V18.75C26.5834 19.7446 26.1883 20.6984 25.485 21.4017C24.7818 22.1049 23.8279 22.5 22.8334 22.5H19.0834L15.3334 26.25L11.5834 22.5Z"
          stroke={props.color || "#A0ABBB"}
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1447_825">
          <Rect
            width="30"
            height="30"
            fill="white"
            transform="translate(0.333374)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default ChatIcon;
