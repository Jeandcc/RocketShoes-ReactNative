import React from 'react';
import {StatusBar} from 'react-native';

import Routes from './routes';
import NavigationService from './services/navigation';

if (__DEV__) {
  import('./config/ReactotronConfig').then(() =>
    // eslint-disable-next-line no-console
    console.log('Reactotron Configured')
  );
}

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#141419" />
      <Routes
        ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
      />
    </>
  );
}
