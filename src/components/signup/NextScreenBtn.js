import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ForwardSvg} from '../../assets/icons';

const NextScreenBtn = ({handlePress}) => {
  return (
    <TouchableOpacity
      className={
        'bg-primary-green h-14 items-center w-14 rounded-full flex-row justify-center absolute right-3 bottom-2'
      }
      onPress={handlePress}>
      <ForwardSvg className={'rotate-180'} />
    </TouchableOpacity>
  );
};

export default NextScreenBtn;
