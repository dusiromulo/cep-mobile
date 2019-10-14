import React, {useGlobal} from 'reactn';
import {StyleSheet, View, TextInput, Text, Alert} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import {findCep} from '../utils/MeuCEPApiService';
import ResultScreen from '../views/ResultScreen';
import SearchHistoryScreen from '../views/SearchHistoryScreen';

const SearchScreen = () => {
    const [cep, setCep] = useGlobal('cep');
    const [async, setAsync] = useGlobal('asyncProgress');
    const [lastSearches, setLastSearches] = useGlobal('lastSearches');
    const [stackScreen, setStackScreen] = useGlobal('stackScreen');
    const [currLocal, setCurrLocal] = useGlobal('currLocal');
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
    if (cep.length === 8) {
        buttonBgColor = '#4F99FB';
    }

    let lastSearchesLink = null;
    if (lastSearches.length > 0) {
        lastSearchesLink = (
            <Text
                style={styles.lastSearchLink}
                onPress={() => {
                    const stack = stackScreen;
                    stack.push(<SearchHistoryScreen searches={lastSearches} />);
                    setStackScreen(stack);
                }}>
                {'Clique para visualizar os últimos resultados!'}
            </Text>
        );
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
                <View>
                    {lastSearchesLink}
                    <TextInput
                        style={styles.textInput}
                        onChangeText={filterCep}
                        placeholder={'Digite o CEP'}
                        placeholderTextColor={styles.textInput.borderColor}
                        keyboardType={'number-pad'}
                        value={cep}
                        maxLength={8}
                    />
                </View>
                <Icon.Button
                    name="arrow-right"
                    backgroundColor={buttonBgColor}
                    onPress={() => {
                        if (cep.length === 8) {
                            setAsync(true);
                            findCep(cep)
                                .then(data => {
                                    setAsync(false);
                                    if (data.hasOwnProperty('networkError')) {
                                        Alert.alert(
                                            'Erro',
                                            'Por favor, verifique sua conexão com a internet.',
                                            [
                                                {
                                                    text: 'OK',
                                                    onPress: () =>
                                                        console.log(
                                                            'OK Pressed',
                                                        ),
                                                },
                                            ],
                                            {cancelable: true},
                                        );
                                    } else if (data.hasOwnProperty('erro')) {
                                        Alert.alert(
                                            'Erro',
                                            'O CEP digitado não existe.',
                                            [
                                                {
                                                    text: 'OK',
                                                    onPress: () =>
                                                        console.log(
                                                            'OK Pressed',
                                                        ),
                                                },
                                            ],
                                            {cancelable: true},
                                        );
                                    } else {
                                        AsyncStorage.getItem('searches')
                                            .then(s => {
                                                s = JSON.parse(s);
                                                if (s) {
                                                    if (s.length < 5) {
                                                        s.push(data);
                                                    } else {
                                                        s.shift();
                                                        s.push(data);
                                                    }
                                                } else {
                                                    s = [data];
                                                }
                                                AsyncStorage.setItem('searches', JSON.stringify(s))
                                                    .then(() => {
                                                        setLastSearches(s);
                                                        setCurrLocal(data);
                                                        stackScreen.push(<ResultScreen local={data} />);
                                                        setStackScreen(stackScreen);
                                                    }).catch(() => {});
                                            })
                                            .catch(e => {
                                                console.log('error!!', e);
                                            });
                                    }
                                })
                                .catch(() => {});
                        }
                    }}
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
        paddingBottom: 30,
        flexGrow: 0,
    },
    lastSearchLink: {
        color: '#4F99FB',
        fontSize: RFValue(18),
        marginBottom: 15,
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
        flexGrow: 1,
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
