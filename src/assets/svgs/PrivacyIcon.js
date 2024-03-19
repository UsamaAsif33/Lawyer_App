import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function PrivacyIcon(props) {
  return (
    <Svg
      width={props?.width || 25}
      height={props?.height || 25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G
        clipPath="url(#clip0_1943_1910)"
        stroke="#A0ABBB"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round">
        <Path
          stroke={props.color || '#A0ABBB'}
          d="M8.5 12.911a1 1 0 011-1h6a1 1 0 011 1v3a1 1 0 01-1 1h-6a1 1 0 01-1-1v-3zM10.5 11.911v-2a2 2 0 114 0v2"
        />
        <Path
          stroke={props.color || '#A0ABBB'}
          d="M4.5 6.911a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2h-12a2 2 0 01-2-2v-12z"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1943_1910">
          <Path
            stroke={props.color || '#A0ABBB'}
            fill="#fff"
            transform="translate(.5 .911)"
            d="M0 0H24V24H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default PrivacyIcon;
