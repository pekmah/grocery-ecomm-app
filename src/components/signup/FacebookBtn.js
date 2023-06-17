import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {FacebookSvg} from '../../assets/icons';

const FacebookBtn = ({handlePress}) => {
  return (
    <TouchableOpacity
      className={
        'bg-[#4A66AC] h-14 items-center  w-full rounded-xl flex-row px-5'
      }
      onPress={handlePress}>
      {/*facebook icon*/}
      <FacebookSvg />

      {/*text*/}
      <Text className={'text-white font-gilroy-semibold text-sm mx-auto '}>
        Continue with Facebook
      </Text>
    </TouchableOpacity>
  );
};

export default FacebookBtn;
