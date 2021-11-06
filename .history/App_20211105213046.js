import React from 'react';
import {NativeBaseProvider, Box} from 'native-base';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

export default function App() {
  const AppNavigator = createSwitchNavigator({
    Dashboard,
  });

  const AppContainer = createAppContainer(AppNavigator);
  return <AppContainer />;
}
