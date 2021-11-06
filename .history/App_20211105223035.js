import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import BottomNavigationBar from './src/components/BottomNavigationBar';

export default function App() {
  const AppNavigator = createStackNavigator({
    BottomNavigationBar: BottomNavigationBar,
  });

  const AppContainer = createAppContainer(AppNavigator);
  return <AppContainer />;
}
