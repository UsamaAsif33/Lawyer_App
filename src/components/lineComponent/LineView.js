import React, { memo } from "react";
import { View } from "react-native";

const LineView = (props) => {
  return (
    <View style={props?.style} />
  );
};

export default memo(LineView);
