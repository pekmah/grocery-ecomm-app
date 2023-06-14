import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const CButton = ({
  handlePress,
  text = 'Continue',
  loading,
  loadingText,
  className,
}) => {
  return (
    <TouchableOpacity
      disabled={loading}
      className={`bg-primary-green h-14 items-center justify-center w-full rounded-xl ${className} ${
        loading ? 'opacity-60' : 'opacity-100'
      }`}
      onPress={handlePress}>
      <Text className={'text-white font-gilroy-semibold text-base '}>
        {loading ? loadingText : text}
      </Text>
    </TouchableOpacity>
  );
};

export default CButton;
