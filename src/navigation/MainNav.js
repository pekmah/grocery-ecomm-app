import React from 'react';
import {Welcome} from '../screens';
import {createStackNavigator} from '@react-navigation/stack';
import {noHeaderOptions} from '../utils/Header.config';

const MainNav = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Welcome'}
        component={Welcome}
        options={noHeaderOptions}
      />
    </Stack.Navigator>
  );
};

export default MainNav;