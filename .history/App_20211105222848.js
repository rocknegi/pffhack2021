import React from 'react';
import {NativeBaseProvider, Box} from 'native-base';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import BottomNavigationBar from './src/components/BottomNavigationBar';

export default function App() {
  const AppNavigator = createSwitchNavigator({
    BottomNavigationBar,
  });

  const AppContainer = createAppContainer(AppNavigator);
  return <AppContainer />;
}
