import React, {useGlobal} from 'reactn';
import {
    SafeAreaView,
    StyleSheet,
    View,
    StatusBar,
    ActivityIndicator,
} from 'react-native';
import AppToolbar from './components/AppToolbar';

const App = () => {
    const [stackScreen] = useGlobal('stackScreen');
    const [async] = useGlobal('asyncProgress');
    const [s] = useGlobal('lastSearches');

    let loader = null;
    if (async) {
        loader = (
            <View style={styles.loader}>
                <ActivityIndicator size="large" color="#FFFFFF" />
            </View>
        );
    }
    if (stackScreen) {
        const screen = stackScreen[stackScreen.length - 1];
        return (
            <View style={[styles.container, styles.whiteBg]}>
                <StatusBar barStyle="dark-content" />
                <AppToolbar title={''} />
                <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
                {loader}
            </View>
        );
    }
    return null;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    loader: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#2699FB90',
        alignContent: 'center',
        justifyContent: 'center',
    },
    whiteBg: {
        backgroundColor: 'white',
    },
});

export default App;
