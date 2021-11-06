import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {NativeBaseProvider} from 'native-base';

import BottomNavigationBar from './src/components/BottomNavigationBar';

export default function App() {
  const AppNavigator = createStackNavigator(
    {
      BottomNavigationBar,
    },
    {
      initialRouteName: 'BottomNavigationBar',
      headerMode: 'none',
    },
  );

  const AppContainer = createAppContainer(AppNavigator);
  return (
    <NativeBaseProvider>
      <AppContainer />
    </NativeBaseProvider>
  );
}
