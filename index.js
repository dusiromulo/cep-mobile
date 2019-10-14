import React, {getGlobal, setGlobal} from 'reactn';
import {AppRegistry, BackHandler} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import SearchScreen from './src/views/SearchScreen';
import ResultScreen from './src/views/ResultScreen';
import SearchHistoryScreen from './src/views/SearchHistoryScreen';
import AsyncStorage from '@react-native-community/async-storage';

const mountState = lastSearches => {
    return {
        asyncProgress: false,
        historySearch: null,
        lastSearches: lastSearches,
        cep: '',
        stackScreen: [<SearchScreen />],
    };
};

setGlobal(
    AsyncStorage.getItem('searches')
        .then(s => mountState(s ? JSON.parse(s) : []))
        .catch(e => mountState([]))
);

BackHandler.addEventListener('hardwareBackPress', () => {
    const state = getGlobal();
    console.log('hardwareBackPress', state);
    if (state.stackScreen.length > 1) {
        const stack = state.stackScreen;
        stack.pop();
        setGlobal({
            ...state,
            stackScreen: stack,
        });
        return true;
    } else {
        BackHandler.exitApp();
        return false;
    }
});

AppRegistry.registerComponent(appName, () => App);
