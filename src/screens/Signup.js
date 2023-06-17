import React from 'react';
import {Image, Text, View} from 'react-native';
import {SignupInput} from '../components/signup';

import FacebookBtn from '../components/signup/FacebookBtn';
import GoogleBtn from '../components/signup/GoogleBtn';
import {useNavigation} from '@react-navigation/native';

const image1 = require('../assets/images/signup-1.jpg');
const Signup = () => {
  const navigation = useNavigation();
  const handlePressInput = () => {
    navigation.navigate('Signup_phone');
  };
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

      <View className={'mt-10 px-5 h-[40%]'}>
        <Text className={'font-gilroy-semibold text-2xl text-black'}>
          Get your groceries{'\n'}with Santocs
        </Text>

        {/*  input    */}
        <SignupInput handlePress={handlePressInput} />

        {/*  text   */}
        <Text className={'text-center text-gray-400 font-gilroy-medium my-8'}>
          or connect with social media
        </Text>

        <View>
          {/*  Google button  */}
          <GoogleBtn />
          {/*  Facebook Button    */}
          <FacebookBtn />
        </View>
      </View>
    </View>
  );
};

export default Signup;
