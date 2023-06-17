import {TouchableOpacity, View} from 'react-native';
import {BackSvg} from '../assets/icons';

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
  headerLeft: props => (
    <TouchableOpacity {...props} className={'px-4'}>
      <BackSvg />
    </TouchableOpacity>
  ),
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
