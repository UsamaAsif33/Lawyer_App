import * as React from "react"
import Svg, { Ellipse, Path } from "react-native-svg"

function ChatBtn(props) {
  return (
    <Svg
      width={52}
      height={51}
      viewBox="0 0 52 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Ellipse cx={26} cy={25.5} rx={26} ry={25.5} fill="#F1F1F1" />
      <Path d="M33 24h-2v-3h-3v-2h3v-3h2v3h3v2h-3v3z" fill="#10357F" />
      <Path
        d="M35 26h-2v3H22.334a1.984 1.984 0 00-1.2.4L19 31V19h7v-2h-7a2 2 0 00-2 2v16l4.8-3.6c.346-.26.767-.4 1.2-.4h10a2 2 0 002-2v-3z"
        fill="#10357F"
      />
    </Svg>
  )
}

export default ChatBtn;
