/**
 * @format
 */

import React, {setGlobal} from 'reactn';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

setGlobal({
  value: 0,
});

AppRegistry.registerComponent(appName, () => App);
