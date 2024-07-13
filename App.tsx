import React from 'react';
import {LogBox} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {ShopDetailScreen} from './src/screens';

LogBox.ignoreAllLogs();

const App = () => {
  return (
    <SafeAreaProvider>
      <ShopDetailScreen />
    </SafeAreaProvider>
  );
};

export default App;
