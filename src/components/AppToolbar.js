import React from 'reactn';

import {Platform, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {RFValue} from 'react-native-responsive-fontsize';

export default class AppToolbar extends React.PureComponent {
    toolbarAndroid() {
        const state = this.global;
        if (state.stackScreen.length > 1) {
            return (
                <Icon.ToolbarAndroid
                    navIconName="md-arrow-back"
                    onIconClicked={() => {
                        const stack = state.stackScreen;
                        stack.pop();
                        this.setGlobal({
                            ...state,
                            stackScreen: stack,
                        });
                    }}
                    overflowIconName="md-more"
                    iconColor="white"
                    title={this.props.title}
                    titleColor="white"
                    style={styles.toolbar}
                />
            );
        } else {
            return (
                <Icon.ToolbarAndroid
                    overflowIconName="md-more"
                    iconColor="white"
                    title={this.props.title}
                    titleColor="white"
                    style={styles.toolbar}
                />
            );
        }
    }

    toolbarIOS() {
        return null;
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
