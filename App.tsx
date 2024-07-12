import {LogBox, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ShopDetailScreen} from './src/screens';

LogBox.ignoreAllLogs();

const App = () => {
  return <ShopDetailScreen />;
};

export default App;
