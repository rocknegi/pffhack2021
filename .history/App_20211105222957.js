import React from 'react';
import {NativeBaseProvider, Box} from 'native-base';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import BottomNavigationBar from './src/components/BottomNavigationBar';
import {createStackNavigator} from 'react-navigation-stack';

export default function App() {
  const AppNavigator = createStackNavigator({
    BottomNavigationBar,
  });

  const AppContainer = createAppContainer(AppNavigator);
  return <AppContainer />;
}
