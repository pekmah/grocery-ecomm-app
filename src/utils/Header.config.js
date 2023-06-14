import {View} from 'react-native';

// No back button no header title
export const emptyBarHeaderOptions = {
  headerShown: true,
  title: '',
  headerLeft: () => <View />,
  headerShadowVisible: false,
};
// contains back button, no title
export const withBackBarHeaderOptions = {
  headerShown: true,
  title: '',
  headerShadowVisible: false,
};
// shows back button and title
export const defaultHeaderOptions = {
  headerShown: true,
};

// No header displayed
export const noHeaderOptions = {
  headerShown: false,
};
