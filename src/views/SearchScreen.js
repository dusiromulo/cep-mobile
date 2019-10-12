import React from 'react';
import {useGlobal} from 'reactn';
import {StyleSheet, View, TextInput, Text} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchScreen = () => {
    const [cep, setCep] = useGlobal('cep');
    const filterCep = text => {
        const invalidChar =
            text.includes('.') ||
            text.includes(' ') ||
            text.includes('-') ||
            text.includes(',');
        if (!invalidChar) {
            return setCep(text);
        }
    };
    let buttonBgColor = '#D0D0D0';
    if (cep.length === 9) {
        buttonBgColor = '#4F99FB';
    }

    return (
        <>
            <View style={styles.titleView}>
                <Text style={styles.title}>{'Busca de endereço'}</Text>
                <Text style={styles.contentText}>
                    {'Informe o cep abaixo para continuar a busca.'}
                </Text>
            </View>
            <View style={styles.containerElements}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={filterCep}
                    placeholder={'Digite o CEP'}
                    placeholderTextColor={styles.textInput.borderColor}
                    keyboardType={'number-pad'}
                    value={cep}
                    maxLength={9}
                />
                <Icon.Button
                    name="arrow-right"
                    backgroundColor={buttonBgColor}
                    onPress={() => {}}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    titleView: {
        backgroundColor: '#4F99FB',
        paddingLeft: 50,
        paddingRight: 50,
        flexGrow: 0.1,
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontSize: RFValue(24),
    },
    contentText: {
        color: 'white',
        textAlign: 'center',
        fontSize: RFValue(16),
    },
    containerElements: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 20,
        flexGrow: 0.9,
    },
    textInput: {
        height: 40,
        borderColor: '#4F9CFB',
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
    },
});

export default SearchScreen;
