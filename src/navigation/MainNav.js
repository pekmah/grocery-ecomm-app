import React from 'react';
import {Signup, SignupPhone, Welcome} from '../screens';
import {createStackNavigator} from '@react-navigation/stack';
import {
  noHeaderOptions,
  withBackBarHeaderOptions,
} from '../utils/Header.config';
import SignupOtp from '../screens/SignupOtp';

const MainNav = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Welcome'}
        component={Welcome}
        options={noHeaderOptions}
      />

      <Stack.Screen
        name={'Signup'}
        component={Signup}
        options={noHeaderOptions}
      />

      <Stack.Screen
        name={'Signup_phone'}
        component={SignupPhone}
        options={withBackBarHeaderOptions}
      />

      <Stack.Screen
        name={'Signup_otp'}
        component={SignupOtp}
        options={withBackBarHeaderOptions}
      />
    </Stack.Navigator>
  );
};

export default MainNav;
