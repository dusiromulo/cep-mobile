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
    ScrollView,
    Button,
    Text,
    StatusBar,
} from 'react-native';
import AppToolbar from './src/components/AppToolbar';

const App = () => {
    const [value, setValue] = useGlobal('value');

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <AppToolbar title={''} />
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <Text style={styles.footer}>{value}</Text>
                    <Button
                        onPress={() => setValue(value + 1)}
                        title={'Change'}
                    />
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#FEFEFE',
    },
    footer: {
        color: '#000000',
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});

export default App;
