import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNav from './navigation/MainNav';

const Main = () => {
  return (
    <NavigationContainer>
      <MainNav />
    </NavigationContainer>
  );
};

export default Main;
