/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {createRoot} from 'react-dom/client';
import React from 'react';

AppRegistry.registerComponent(appName, () => App);

if (Platform.OS === 'web') {
  console.log('testtt');
  const root = createRoot(document.getElementById('root'));
  root.render(<App />);
}
