import React from 'react';
import {Image, Text, View} from 'react-native';

const image1 = require('../assets/images/signup-1.jpg');
const Signup = () => {
  return (
    <View className={'flex-1 bg-white'}>
      <Image
        source={image1}
        className={'h-[45%] '}
        resizeMode={'contain'}
        resizeMethod="resize"
        style={{
          resizeMode: 'contain',
        }}
      />

      <View className={'mt-10 px-5'}>
        <Text className={'font-gilroy-semibold text-2xl text-black'}>
          Get your groceries{'\n'}with Santocs
        </Text>
      </View>
    </View>
  );
};

export default Signup;
