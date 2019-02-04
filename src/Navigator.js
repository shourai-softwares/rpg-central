import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from './containers/HomeScreen';
import PlayScreen from './containers/PlayScreen';

const MainStack = createStackNavigator({
  HomeScreen,
  PlayScreen,
});

export default createAppContainer(MainStack);
