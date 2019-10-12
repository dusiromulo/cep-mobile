import React, {Component} from 'react';

import {Platform, StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {RFValue} from 'react-native-responsive-fontsize';

export default class AppToolbar extends Component {
    toolbarAndroid() {
        return (
            <Icon.ToolbarAndroid
                navIconName="md-arrow-back"
                onIconClicked={() => {console.log("clicked!!");}} overflowIconName="md-more" iconColor="white"
                title={this.props.title} titleColor="white" style={styles.toolbar}
                actions={[]} onActionSelected={() => {}}
            />
        );
    }

    toolbarIOS() {
        return (
            <View style={styles.toolbarIOS}>
                <View style={{flexDirection: 'row'}}>
                    <Icon
                        style={{paddingRight:20,paddingLeft:10,paddingVertical:10}}
                        name="ios-arrow-back"
                        size={30}
                        color="white"
                        onPress={() => {}}
                    />
                    <Text style={styles.textIOS}>{this.props.title}</Text>
                </View>
                <Icon
                    style={{padding: 10}}
                    name="ios-log-out"
                    size={30}
                    color="white"
                    onPress={() => {}}
                />
            </View>
        );
    }

    render() {
        return Platform.select({
            android: this.toolbarAndroid(),
            ios: this.toolbarIOS(),
        });
    }
}
const styles = StyleSheet.create({
    toolbar: {
        height: 60,
        padding: 20,
        backgroundColor: '#4F99FB',
    },
    toolbarIOS: {
        height: 60,
        backgroundColor: '#4F99FB',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textIOS: {
        marginLeft: 10,
        alignSelf: 'center',
        color: 'white',
        fontSize: RFValue(22),
    },
});
