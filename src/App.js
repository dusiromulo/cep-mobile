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
    const [screen] = useGlobal('currScreen');
    const [async] = useGlobal('asyncProgress');

    let loader = null;
    if (async) {
        loader = (
            <View style={styles.loader}>
                <ActivityIndicator size="large" color="#000000" />
            </View>
        );
    }
    return (
        <View style={[styles.container, styles.whiteBg]}>
            <StatusBar barStyle="dark-content" />
            <AppToolbar title={''} />
            <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
            {loader}
        </View>
    );
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
        backgroundColor: '#00000020',
        alignContent: 'center',
        justifyContent: 'center',
    },
    whiteBg: {
        backgroundColor: 'white',
    },
});

export default App;
