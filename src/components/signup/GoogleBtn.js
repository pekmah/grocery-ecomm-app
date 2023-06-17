import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {GoogleSvg} from '../../assets/icons';

const GoogleBtn = ({handlePress}) => {
  return (
    <TouchableOpacity
      className={
        'bg-[#4A66AC] h-14 items-center  w-full rounded-xl flex-row px-5 mb-4'
      }
      onPress={handlePress}>
      {/*facebook icon*/}
      <GoogleSvg />

      {/*text*/}
      <Text className={'text-white font-gilroy-semibold text-sm mx-auto '}>
        Continue with Google
      </Text>
    </TouchableOpacity>
  );
};

export default GoogleBtn;
