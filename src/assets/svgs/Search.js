import React from 'react';
import Svg, {Mask, G, Path, Rect} from 'react-native-svg';

const Search = props => {
  return (
    <Svg
    style={{position:"absolute",top:'25%',transform: 'translateY(0%)',left:15}}
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width || 24}
      height={props?.height || 24}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5 11.1455C4.99956 8.21437 7.06975 5.69108 9.94452 5.11883C12.8193 4.54659 15.698 6.08477 16.82 8.79267C17.9421 11.5006 16.995 14.624 14.558 16.2528C12.121 17.8815 8.87287 17.562 6.8 15.4895C5.64763 14.3376 5.00014 12.775 5 11.1455Z"
        stroke="#686868"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M15.4883 15.4905L18.9993 19.0015"
        stroke="#686868"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default Search;
