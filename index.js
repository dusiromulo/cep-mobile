/**
 * @format
 */

import {setGlobal} from 'reactn';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

setGlobal({
    asyncProgress: false,
    historySearch: null,
    lastSearch: null,
    cep: '',
});

AppRegistry.registerComponent(appName, () => App);
