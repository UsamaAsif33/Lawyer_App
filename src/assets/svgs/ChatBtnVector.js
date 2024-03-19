import * as React from "react"
import Svg, { Ellipse, Path } from "react-native-svg"

function ChatBtnVector(props) {
  return (
    <Svg
      width={20}
      height={19}
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M18.617.823a1.511 1.511 0 00-1.531-.365L1.846 5.542a1.5 1.5 0 00-.24 2.76l6.324 3.125 3.125 6.344a1.5 1.5 0 001.343.823h.104a1.49 1.49 0 001.313-1.042l5.156-15.198a1.469 1.469 0 00-.354-1.531zM2.492 6.979l13.302-4.437L8.41 9.927 2.492 6.98zm9.98 9.969l-2.96-5.917 7.386-7.385-4.427 13.302z"
        fill="#7B8783"
      />
    </Svg>
  )
}

export default ChatBtnVector;
