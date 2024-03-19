import React from 'react';
import Svg, {Mask, G, Path, Rect,ClipPath, Defs} from 'react-native-svg';

const JobIcon = props => {
  
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      
      width={props?.width || 31}
      height={props?.height || 30}
      viewBox="0 0 31 30"
      fill="none">
      <G clip-path="url(#clip0_1447_818)">
        <Path
          d="M4.61478 11.1155C4.61478 10.4604 4.87502 9.83209 5.33825 9.36886C5.80149 8.90563 6.42976 8.64539 7.08488 8.64539H24.3756C25.0307 8.64539 25.659 8.90563 26.1222 9.36886C26.5854 9.83209 26.8457 10.4604 26.8457 11.1155V22.2309C26.8457 22.886 26.5854 23.5143 26.1222 23.9776C25.659 24.4408 25.0307 24.701 24.3756 24.701H7.08488C6.42976 24.701 5.80149 24.4408 5.33825 23.9776C4.87502 23.5143 4.61478 22.886 4.61478 22.2309V11.1155Z"
          stroke={props.color || "#A0ABBB"}
          stroke-width="1.85257"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M10.79 8.6454V6.1753C10.79 5.52019 11.0503 4.89191 11.5135 4.42868C11.9767 3.96544 12.605 3.7052 13.2601 3.7052H18.2003C18.8554 3.7052 19.4837 3.96544 19.947 4.42868C20.4102 4.89191 20.6704 5.52019 20.6704 6.1753V8.6454"
          stroke={props.color || "#A0ABBB"}
          stroke-width="1.85257"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M15.7302 14.8206V14.8329"
          stroke={props.color || "#A0ABBB"}
          stroke-width="1.85257"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M4.61478 16.0557C8.06252 17.793 11.8695 18.698 15.7302 18.698C19.591 18.698 23.3979 17.793 26.8457 16.0557"
          stroke={props.color || "#A0ABBB"}
          stroke-width="1.85257"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1447_818">
          <Rect
            width="29.6412"
            height="29.6412"
            fill="white"
            transform="translate(0.909637)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default JobIcon;
