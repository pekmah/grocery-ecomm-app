import React from 'react';
import {Text} from 'react-native';

const H1 = ({text}) => {
  return (
    <Text className={'text-2xl text-black font-gilroy-semibold mt-3'}>
      {text}
    </Text>
  );
};

export default H1;
