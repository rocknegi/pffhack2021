import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

export default function App() {
  const AppNavigator = createStackNavigator({
    BottomNavigationBar,
  });

  const AppContainer = createAppContainer(AppNavigator);
  return <AppContainer />;
}
