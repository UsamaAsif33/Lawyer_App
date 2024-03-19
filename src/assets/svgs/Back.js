import React from 'react';
import Svg, {Mask, G, Path, Rect} from 'react-native-svg';
import { COLORS } from '../../shared/theme';

const Back = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.0404 11.2929C18.4309 11.6834 18.4309 12.3166 18.0404 12.7071L14.7475 16L18.0404 19.2929C18.4309 19.6834 18.4309 20.3166 18.0404 20.7071C17.6498 21.0976 17.0167 21.0976 16.6261 20.7071L12.6261 16.7071C12.2356 16.3166 12.2356 15.6834 12.6261 15.2929L16.6261 11.2929C17.0167 10.9024 17.6498 10.9024 18.0404 11.2929Z"
        fill={COLORS.primary}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.10711 7.10711C5.62511 8.5891 5 11.1929 5 16C5 20.8071 5.62511 23.4109 7.10711 24.8929C8.5891 26.3749 11.1929 27 16 27C20.8071 27 23.4109 26.3749 24.8929 24.8929C26.3749 23.4109 27 20.8071 27 16C27 11.1929 26.3749 8.5891 24.8929 7.10711C23.4109 5.62511 20.8071 5 16 5C11.1929 5 8.5891 5.62511 7.10711 7.10711ZM5.69289 5.69289C7.8109 3.57489 11.2071 3 16 3C20.7929 3 24.1891 3.57489 26.3071 5.69289C28.4251 7.8109 29 11.2071 29 16C29 20.7929 28.4251 24.1891 26.3071 26.3071C24.1891 28.4251 20.7929 29 16 29C11.2071 29 7.8109 28.4251 5.69289 26.3071C3.57489 24.1891 3 20.7929 3 16C3 11.2071 3.57489 7.8109 5.69289 5.69289Z"
        fill={COLORS.primary}
      />
    </Svg>
  );
};

export default Back;
