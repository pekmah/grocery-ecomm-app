import React from 'react';
import {Text, TextInput, View} from 'react-native';
import H1 from '../components/general/H1';
import {KenyaSvg} from '../assets/icons';
import {NextScreenBtn} from '../components/signup';
import {useNavigation} from '@react-navigation/native';

const SignupPhone = () => {
  const navigation = useNavigation();
  const handleNext = () => {
    navigation.navigate('Signup_otp');
  };
  return (
    <View className={'bg-white flex-1 px-5 relative'}>
      {/*title*/}
      <H1 text={'Enter your mobile number'} />

      {/*  input   */}
      <View
        className={
          'py-1 border-b border-gray-300 mt-3 flex-row items-center space-x-2'
        }>
        {/*flag icon*/}
        <KenyaSvg />

        {/*  Text */}
        <Text className={'text-black font-gilroy-medium'}>+254</Text>

        <TextInput className={'flex-1 text-gray-800 font-gilroy-medium h-10'} />
      </View>

      <NextScreenBtn handlePress={handleNext} />
    </View>
  );
};

export default SignupPhone;
