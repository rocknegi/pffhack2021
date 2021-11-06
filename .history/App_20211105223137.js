import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import BottomNavigationBar from './src/components/BottomNavigationBar';

export default function App() {
  const AppNavigator = createStackNavigator(
    {
      BottomNavigationBar,
    },
    {
      initialRouteName: 'BottomNavigationBar',
    },
  );

  const AppContainer = createAppContainer(AppNavigator);
  return <AppContainer />;
}
