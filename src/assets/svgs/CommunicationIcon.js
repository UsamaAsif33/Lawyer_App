import React from 'react';
import Svg, {Path} from 'react-native-svg';

const CommunicationIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width || 18}
      height={props?.height || 18}
      viewBox="0 0 18 18"
      fill="none">
      <Path
        d="M8.53418 15.4006C9.80011 15.4006 11.0376 15.0252 12.0902 14.3219C13.1428 13.6186 13.9632 12.619 14.4476 11.4494C14.932 10.2799 15.0588 8.9929 14.8118 7.7513C14.5649 6.5097 13.9553 5.36921 13.0601 4.47407C12.165 3.57893 11.0245 2.96932 9.78289 2.72235C8.54129 2.47538 7.25433 2.60214 6.08477 3.08659C4.91521 3.57104 3.91556 4.39142 3.21225 5.444C2.50894 6.49658 2.13355 7.73408 2.13355 9C2.13213 9.987 2.36001 10.9608 2.79922 11.8447L2.13355 15.4006L5.68946 14.735C6.57338 15.1741 7.5472 15.402 8.53418 15.4006V15.4006Z"
        stroke="#10357F"
        stroke-width="1.42236"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.68945 9H5.69693"
        stroke="#10357F"
        stroke-width="1.42236"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8.53418 9H8.54166"
        stroke="#10357F"
        stroke-width="1.42236"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M11.3789 9H11.3864"
        stroke="#10357F"
        stroke-width="1.42236"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default CommunicationIcon;
