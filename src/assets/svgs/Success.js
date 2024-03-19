import React from 'react';
import Svg, {ClipPath, G, Path, Defs, Rect} from 'react-native-svg';

const Success = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width || 101}
      height={props?.height || 100}
      viewBox="0 0 101 100"
      fill="none">
      <G clip-path="url(#clip0_1066_36994)">
        <Path
          d="M94.5549 58.6989C97.3409 56.3447 100.5 53.6768 100.5 49.998C100.5 46.3192 97.3398 43.6527 94.5563 41.2985C92.7906 39.8068 90.9657 38.2701 90.5494 36.9848C90.0978 35.5929 90.6812 33.19 91.2409 30.8686C92.1217 27.228 93.0329 23.4646 90.9513 20.5982C88.8445 17.7106 84.789 17.4038 81.2074 17.134C78.8374 16.955 76.4 16.7706 75.2453 15.9305C74.1195 15.1101 73.2005 12.865 72.3142 10.6926C70.9449 7.34295 69.3938 3.54676 65.9545 2.4303C62.6391 1.35315 59.3709 3.36266 56.2186 5.30855C54.1539 6.578 52.0183 7.89326 50.5 7.89326C48.9817 7.89326 46.8461 6.57658 44.7803 5.30855C41.6201 3.36238 38.3601 1.35824 35.0458 2.4303C31.605 3.54676 30.0553 7.34182 28.6872 10.6915C27.7984 12.8642 26.8819 15.1104 25.7549 15.9307C24.6003 16.7709 22.1564 16.9553 19.7929 17.1343C16.2113 17.3976 12.1558 17.7109 10.049 20.5999C7.96738 23.4598 8.87853 27.2232 9.75943 30.8703C10.3205 33.1917 10.9025 35.5946 10.4506 36.9865C10.0346 38.2664 8.21228 39.8096 6.44512 41.3002C3.65736 43.6539 0.5 46.3214 0.5 49.9991C0.5 53.6768 3.66019 56.3458 6.44512 58.7001C8.20945 60.1907 10.0346 61.7285 10.4506 63.0123C10.9022 64.4054 10.3188 66.8071 9.75943 69.1285C8.87853 72.7692 7.96738 76.5326 10.049 79.399C12.1558 82.2879 16.2113 82.5948 19.7929 82.8645C22.1629 83.0436 24.6014 83.2294 25.7563 84.0681C26.8821 84.8885 27.7998 87.1336 28.6875 89.3074C30.0568 92.657 31.6067 96.4518 35.0472 97.5697C35.6659 97.7708 36.3124 97.8726 36.9631 97.8711C39.6176 97.8711 42.2301 96.2595 44.7817 94.6926C46.8478 93.4206 48.9834 92.1053 50.5014 92.1053C52.0194 92.1053 54.1554 93.422 56.2211 94.6926C59.3813 96.6348 62.6442 98.6429 65.9542 97.5697C69.395 96.4518 70.9461 92.657 72.3139 89.3074C73.2013 87.1347 74.1193 84.8885 75.2462 84.0681C76.3997 83.2294 78.8436 83.045 81.2057 82.866C84.7884 82.6027 88.8493 82.2894 90.9496 79.4004C93.0312 76.5391 92.12 72.7771 91.2406 69.13C90.6784 66.8074 90.0975 64.4057 90.5491 63.0138C90.9654 61.7324 92.7905 60.1892 94.5549 58.6989ZM86.1727 61.5891C85.3181 64.2224 86.0556 67.2666 86.7679 70.2136C87.3723 72.7155 88.0583 75.5437 87.23 76.6813C86.3819 77.8453 83.4511 78.0664 80.865 78.2613C77.8603 78.4889 74.7527 78.7222 72.5407 80.3324C70.3536 81.9231 69.1843 84.787 68.0534 87.5546C67.0645 89.9762 65.9466 92.7201 64.5363 93.1785C63.2525 93.5894 60.8021 92.0883 58.6427 90.7584C56.0198 89.1507 53.3231 87.4851 50.5 87.4851C47.6769 87.4851 44.9697 89.1468 42.3641 90.7558C40.2047 92.0858 37.7555 93.5854 36.469 93.176C35.0627 92.7178 33.9423 89.9736 32.952 87.5521C31.8222 84.787 30.6517 81.9206 28.4658 80.3299C26.2538 78.7197 23.1448 78.4864 20.1387 78.2573C17.554 78.0611 14.6229 77.8413 13.7751 76.6774C12.9482 75.5383 13.6342 72.7075 14.2386 70.2082C14.9509 67.2613 15.687 64.2159 14.8338 61.5851C14.0123 59.0558 11.6736 57.0833 9.41951 55.1754C7.39954 53.4636 5.10865 51.5333 5.10865 49.9941C5.10865 48.4548 7.3984 46.5205 9.41838 44.8142C11.6765 42.9062 14.0123 40.9337 14.8341 38.403C15.6887 35.7697 14.9512 32.7266 14.2388 29.781C13.6345 27.2791 12.9485 24.4495 13.7753 23.3119C14.6234 22.1479 17.5543 21.9268 20.139 21.7319C23.1451 21.504 26.2538 21.271 28.4661 19.6593C30.6517 18.0686 31.8225 15.2062 32.9523 12.4386C33.9423 10.017 35.059 7.27168 36.4705 6.81469C36.6297 6.76577 36.7951 6.74173 36.9617 6.74371C38.3205 6.74371 40.455 8.06039 42.3601 9.23482C44.9711 10.8425 47.6718 12.5042 50.4949 12.5042C53.318 12.5042 56.0198 10.8515 58.6348 9.23736C60.7942 7.90627 63.2341 6.4038 64.531 6.81724C65.9359 7.27423 67.0577 10.0196 68.048 12.4408C69.1792 15.206 70.3483 18.0712 72.5342 19.6616C74.7462 21.2732 77.8552 21.5051 80.8613 21.7342C83.446 21.9304 86.3771 22.1516 87.2249 23.3141C88.0518 24.4532 87.3672 27.284 86.7614 29.7844C86.0491 32.7299 85.313 35.7756 86.1662 38.4064C86.9877 40.9371 89.3264 42.9096 91.5819 44.8176C93.6019 46.5293 95.8916 48.4582 95.8916 49.9974C95.8916 51.5367 93.6019 53.471 91.5808 55.1787C89.3221 57.087 86.9877 59.0595 86.1727 61.5891Z"
          fill="#10357F"
        />
        <Path
          d="M61.06 35.5112L46.3286 50.2426L39.9397 43.8538C36.9815 40.897 32.1865 40.8981 29.2296 43.8564C26.2727 46.8146 26.2739 51.6096 29.2321 54.5665L40.9748 66.3091C43.9319 69.2654 48.7252 69.2654 51.6824 66.3091L71.7676 46.2171C74.7462 43.2826 74.7821 38.4887 71.8473 35.5101C68.9125 32.5314 64.1189 32.4955 61.1403 35.4303C61.1134 35.4575 61.0866 35.4843 61.06 35.5112ZM68.5087 42.9588L48.4235 63.044C47.2522 64.1658 45.405 64.1658 44.2336 63.044L32.4899 51.3003C31.3336 50.1434 31.3341 48.2679 32.4913 47.1119C33.6482 45.9555 35.5237 45.9561 36.6797 47.1133L44.696 55.1307C45.5958 56.0297 47.0539 56.0297 47.9535 55.1307L64.3152 38.7664C65.4517 37.5894 67.3272 37.5563 68.5045 38.6929C69.6817 39.8294 69.7145 41.7049 68.578 42.8821C68.5542 42.9068 68.5299 42.9311 68.505 42.9551L68.5087 42.9588Z"
          fill="#10357F"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1066_36994">
          <Rect
            width="100"
            height="100"
            fill="white"
            transform="translate(0.5)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default Success;
