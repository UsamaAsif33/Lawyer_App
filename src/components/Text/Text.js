import React from 'react';
import {StyleSheet, Text} from 'react-native';

export const Text11 = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={[style.Text11, textStyle]} />;
};

export const Text12 = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={[style.Text12, textStyle]} />;
};

export const Text13 = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={[style.Text13, textStyle]} />;
};

export const Text14 = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={[style.Text14, textStyle]} />;
};
export const Text15 = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={[style.Text15, textStyle]} />;
};

export const Text16 = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={[style.Text16, textStyle]} />;
};

export const Text17 = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={[style.Text17, textStyle]} />;
};

export const Text18 = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={[style.Text18, textStyle]} />;
};
export const Text20 = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={[style.Text20, textStyle]} />;
};

export const Text23 = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={[style.Text23, textStyle]} />;
};

export const Text24 = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={[style.Text24, textStyle]} />;
};

export const Text28 = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={{...style.Text28, ...textStyle}} />;
};

export const Text30 = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={{...style.Text30, ...textStyle}} />;
};

const style = StyleSheet.create({
  Text11: {
    fontSize: 11,
    fontFamily: 'Inter-Regular',
    fontWeight: 600,
  },
  Text12: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    fontWeight: 600,
  },
  Text13: {
    fontSize: 13,
    fontFamily: 'Inter-Regular',
    fontWeight: 600,
  },
  Text14: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    fontWeight: 600,
  },
  Text15: {
    fontSize: 15,
    fontFamily: 'Inter-Regular',
    fontWeight: 400,
  },
  Text16: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    fontWeight: 400,
  },
  Text17: {
    fontSize: 17,
    fontFamily: 'Inter-Regular',
    fontWeight: 400,
  },
  Text18: {
    fontSize: 18,
    fontFamily: 'Inter-Regular',
    fontWeight: 700,
  },
  Text20: {
    fontSize: 20,
    fontFamily: 'Inter-Regular',
    fontWeight: 400,
  },
  Text23: {
    fontSize: 23,
    fontFamily: 'Inter-Regular',
    fontWeight: 600,
  },
  Text24: {
    fontSize: 24,
    fontFamily: 'Inter-SemiBold',
    fontWeight: 400,
  },
  Text28: {
    fontSize: 28,
    fontFamily: 'Inter-Regular',
    fontWeight: 700,
  },
  Text30: {
    fontSize: 30,
    fontFamily: 'Inter-SemiBold',
    fontWeight: 600,
  },
});
