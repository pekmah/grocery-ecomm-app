import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {KenyaSvg} from '../../assets/icons';

const signupInput = ({handlePress}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      className={
        'py-3 border-b border-gray-300 mt-3 flex-row items-center space-x-3'
      }>
      {/*flag icon*/}
      <KenyaSvg width={10} height={10} />
      {/*  Text */}
      <Text className={'text-black font-gilroy-medium'}>+254</Text>
    </TouchableOpacity>
  );
};

export default signupInput;
