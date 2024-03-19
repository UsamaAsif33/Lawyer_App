import React from 'react';
import Svg, {Mask,FeComposite,FeGaussianBlur,FeOffset,FeColorMatrix, G, Path,Filter, Defs,FeBlend} from 'react-native-svg';

const Curve = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width || 433}
      height={props?.height || 147}
      viewBox="0 0 433 147"
      fill="none">
      <G filter="url(#filter0_d_1066_38233)">
        <Path
          d="M21.5 35H135.714C155.139 35 173.155 45.1392 183.235 61.7442C198.388 86.7054 234.612 86.7054 249.765 61.7442C259.845 45.1392 277.861 35 297.286 35H411.5V122H216.5H21.5V35Z"
          fill="white"
        />
      </G>
      <Defs>
        <Filter
          id="filter0_d_1066_38233"
          x="-8.5"
          y="0"
          width="450"
          height="147"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          <FeFlood flood-opacity="0" result="BackgroundImageFix" />
          <FeColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <FeOffset dy="-5" />
          <FeGaussianBlur stdDeviation="15" />
          <FeComposite in2="hardAlpha" operator="out" />
          <FeColorMatrix
            type="matrix"
            values="0 0 0 0 0.698039 0 0 0 0 0.698039 0 0 0 0 0.698039 0 0 0 0.16 0"
          />
          <FeBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1066_38233"
          />
          <FeBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1066_38233"
            result="shape"
          />
        </Filter>
      </Defs>
    </Svg>
  );
};

export default Curve;
