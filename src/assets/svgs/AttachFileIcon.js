import * as React from "react"
import Svg, { Ellipse, Path } from "react-native-svg"

function AttachFileIcon(props) {
  return (
    <Svg
    width={25}
    height={25}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12.77 12.65l-2.47 2.47a3.495 3.495 0 000 4.95 3.495 3.495 0 004.95 0l3.89-3.89a7.007 7.007 0 000-9.9 7.007 7.007 0 00-9.9 0L5 10.52c-2.34 2.34-2.34 6.14 0 8.49"
      stroke="#7B8783"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
  )
}

export default AttachFileIcon;
