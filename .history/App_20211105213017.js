import React from 'react';
import {NativeBaseProvider, Box} from 'native-base';

export default function App() {
  const AppNavigator = createSwitchNavigator({
    Dashboard,
  });

  const AppContainer = createAppContainer(AppNavigator);
  return !auth ? (
    <ThemeContext.Provider value={themeHook}>
      <AppContainer />
    </ThemeContext.Provider>
  ) : (
    <PINCode
      status={'enter'}
      finishProcess={giveAuth}
      disableLockScreen={true}
    />
  );
}
