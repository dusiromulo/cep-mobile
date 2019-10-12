/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useGlobal} from 'reactn';
import {
    SafeAreaView,
    StyleSheet,
    View,
    StatusBar,
} from 'react-native';
import AppToolbar from './components/AppToolbar';
import SearchScreen from './views/SearchScreen';

const App = () => {
    // const [value, setValue] = useGlobal('value');
    // useGlobal();
    return (
        <View style={[styles.container, styles.whiteBg]}>
            <StatusBar barStyle="dark-content" />
            <AppToolbar title={''} />
            <SafeAreaView style={styles.container}>
                <SearchScreen />
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    whiteBg: {
        backgroundColor: 'white',
    },
});

export default App;
