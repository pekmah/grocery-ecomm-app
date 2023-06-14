import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {Welcome1Svg} from '../assets/icons';
import {CButton} from '../components/general';
import {useNavigation} from '@react-navigation/native';

const backroundImage = require('../assets/images/welcome-1.jpg');
const Welcome = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('Signup');
  };

  return (
    <View className={'flex-1 bg-blue-200'}>
      <ImageBackground
        className={'flex-1 '}
        resizeMode={'cover'}
        source={backroundImage}>
        <View
          className={
            'absolute bg-transparent space-y-3 bottom-0 left-0 right-0 h-1/2 items-center '
          }>
          {/* Logo icon*/}
          <Welcome1Svg />

          <Text
            className={
              'font-gilroy-semibold text-white text-3xl text-center leading-10'
            }>
            Welcome {'\n'} to our store
          </Text>

          <Text
            className={
              'font-gilroy-medium text-[#fcfcfcA0] text-base text-center '
            }>
            Get your groceries in as fast as one hour
          </Text>

          <View className={'w-full px-5 py-5'}>
            <CButton handlePress={handlePress} text={'Get Started '} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Welcome;
