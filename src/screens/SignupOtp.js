import React from 'react';
import {View} from 'react-native';
import H1 from '../components/general/H1';
import {NextScreenBtn} from '../components/signup';

const SignupOtp = () => {
  return (
    <View className={'bg-white flex-1 px-5 relative'}>
      {/*title*/}
      <H1 text={'Enter otp'} />

      {/*  input   */}

      <NextScreenBtn />
    </View>
  );
};

export default SignupOtp;
