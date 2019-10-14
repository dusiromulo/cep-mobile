import React from 'reactn';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const labels = {
    cep: 'CEP',
    logradouro: 'Logradouro',
    complemento: 'Complemento',
    bairro: 'Bairro',
    localidade: 'Localidade',
    uf: 'UF',
    unidade: 'Unidade',
    ibge: 'IBGE',
    gia: 'GIA',
};

const Item = ({name, value}) => {
    return (
        <View style={styles.itemParent}>
            <Text style={styles.name}>{labels[name]}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    );
};

const ResultScreen = ({local}) => {
    const array = [];
    let i = 0;
    for (const key in local) {
        if (local[key] !== '') {
            array.push({
                id: `${i}`,
                name: key,
                value: local[key],
            });
            i++;
        }
    }
    return (
        <>
            <View style={styles.titleView}>
                <Text style={styles.title}>{'Resultado de endereço'}</Text>
                <Text style={styles.contentText}>
                    {'Detalhes do cep pesquisado.'}
                </Text>
            </View>
            <FlatList
                data={array}
                renderItem={({item}) => <Item name={item.name} value={item.value}/>}
                keyExtractor={item => item.id}
            />
        </>
    );
};

const styles = StyleSheet.create({
    titleView: {
        backgroundColor: '#4F99FB',
        paddingLeft: 50,
        paddingRight: 50,
        paddingBottom: 30,
        flexGrow: 0,
    },
    itemParent: {
        flex: 1,
        flexDirection: 'row',
        padding: 25,
    },
    name: {
        color: '#4F99FB',
        fontSize: RFValue(16),
        flex: 0.3,
    },
    value: {
        color: '#7C7C7C',
        fontSize: RFValue(16),
        flex: 0.7,
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
});

export default ResultScreen;
