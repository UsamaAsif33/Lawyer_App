import React from 'react';
import Svg, {Circle, G, Path, Defs} from 'react-native-svg';
import {COLORS} from '../../shared/theme';

const AboutIcon = props => {
  return (
    <Svg
      width={props?.width || 20}
      height={props?.height || 21}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M10 .911c-5.238 0-9.5 4.486-9.5 10s4.262 10 9.5 10 9.5-4.486 9.5-10-4.262-10-9.5-10zm0 18.182c-4.286 0-7.773-3.67-7.773-8.182C2.227 6.4 5.714 2.73 10 2.73s7.773 3.67 7.773 8.182c0 4.511-3.487 8.182-7.773 8.182z"
        fill="#A0ABBB"
        stroke={props.color || "#A0ABBB" }
      />
      <Path
        d="M9.624 6.366c0-.279.207-.437.376-.437s.375.158.375.437c0 .278-.206.436-.375.436-.17 0-.376-.158-.376-.436zm.288 3.939c0-.05.019-.086.04-.109.02-.021.037-.024.048-.024.011 0 .028.003.048.024.021.023.04.06.04.109v5.454c0 .05-.019.087-.04.109-.02.021-.037.025-.048.025-.011 0-.028-.004-.048-.025a.156.156 0 01-.04-.109v-5.454z"
        fill="#A0ABBB"
        strokeWidth={1.55152}
        stroke={props.color || "#A0ABBB" }
      />
    </Svg>
  );
};

export default AboutIcon;
