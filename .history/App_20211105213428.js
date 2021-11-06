import React from 'react';
import {NativeBaseProvider, Box} from 'native-base';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

export default function App() {
  const Dashboard = createDrawerNavigator(
    {},
    {
      contentOptions: {
        activeTintColor: '#fd6d24',
        backgroundTintColor: '#fdbf83',
      },
      initialRouteName: 'MainNavigator',
      drawerType: 'slide',
      contentComponent: props => <CustomDrawerScreen {...props} />,
    },
  );

  const AppNavigator = createSwitchNavigator({
    Dashboard,
  });

  const AppContainer = createAppContainer(AppNavigator);
  return <AppContainer />;
}
