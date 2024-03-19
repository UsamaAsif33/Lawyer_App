import React from 'react';
import Svg, {Mask, G, Path,Defs} from 'react-native-svg';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { COLORS } from '../../shared/theme';


const AddIcon = props => {
  return (
    <Svg
    style={{backgroundColor:COLORS.primary,borderRadius:30,marginTop:hp('-7')}}
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width || 48}
      height={props?.height || 47}
      viewBox="0 0 43 42"
      fill="none">
      <Path
        d="M12.9062 21L21.5 21M21.5 21L30.0937 21M21.5 21V12.4062M21.5 21L21.5 29.5937"
        stroke={props.color || COLORS.white}
        stroke-width="2.625"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default AddIcon;
