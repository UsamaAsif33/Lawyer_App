import Toast from 'react-native-simple-toast';

export const showToast = (message) => {
  Toast.showWithGravity(
    message.toString(),
    Toast.SHORT,
    Toast.BOTTOM,
  );
};