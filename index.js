/**
 * @format
 */

import React, {setGlobal} from 'reactn';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import SearchScreen from './src/views/SearchScreen';

setGlobal({
    asyncProgress: false,
    historySearch: null,
    lastSearch: null,
    cep: '',
    currScreen: <SearchScreen />,
});

AppRegistry.registerComponent(appName, () => App);
