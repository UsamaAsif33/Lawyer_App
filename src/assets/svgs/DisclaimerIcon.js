import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function DisclaimerIcon(props) {
  return (
    <Svg
      width={props?.width || 21}
      height={props?.height || 20}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        stroke={props.color || '#A0ABBB'}
        d="M10.5 15.051a.734.734 0 01-.75-.731v-.038a.75.75 0 111.5 0 .766.766 0 01-.75.77zm0-2.794a.75.75 0 01-.75-.75v-3.96a.75.75 0 011.5 0v3.96a.75.75 0 01-.75.75z"
        fill="#A0ABBB"
      />
      <Path
        stroke={props.color || '#A0ABBB'}
        d="M18 19.096H3c-1.084 0-2.054-.575-2.596-1.536-.543-.963-.532-2.091.029-3.018l7.5-12.387A2.969 2.969 0 0110.499.727a2.97 2.97 0 012.567 1.428l7.5 12.387c.561.927.572 2.054.03 3.016-.542.963-1.513 1.538-2.596 1.538zm-7.5-16.87c-.537 0-1.016.264-1.284.705l-7.5 12.388a1.474 1.474 0 00-.005 1.504c.272.484.754.773 1.289.773h15c.534 0 1.016-.29 1.29-.775a1.471 1.471 0 00-.008-1.502l-7.5-12.388a1.48 1.48 0 00-1.283-.704z"
        fill="#A0ABBB"
      />
    </Svg>
  );
}

export default DisclaimerIcon;
