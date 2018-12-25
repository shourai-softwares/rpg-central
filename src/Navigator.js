import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from './containers/HomeScreen';
import PlayScreen from './containers/PlayScreen';
import StatusScreen from './containers/StatusScreen';

const MainStack = createStackNavigator({
  HomeScreen,
  PlayScreen,
  StatusScreen,
});

export default createAppContainer(MainStack);
