import React, {useGlobal} from 'reactn';
import {
    StyleSheet,
    View,
    FlatList,
    Text,
    TouchableNativeFeedback,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/FontAwesome';
import ResultScreen from './ResultScreen';

const Item = ({local}) => {
    const [stackScreen, setStackScreen] = useGlobal('stackScreen');
    return (
        <TouchableNativeFeedback
            onPress={() => {
                stackScreen.push(<ResultScreen local={local} />);
                setStackScreen(stackScreen);
            }}>
            <View style={styles.itemParent}>
                <Text style={styles.value}>{local.cep}</Text>
                <Icon name="arrow-right" size={30} color="#4F99FB" />
            </View>
        </TouchableNativeFeedback>
    );
};

const SearchHistoryScreen = ({searches}) => {
    const array = [];
    for (let i = searches.length - 1; i >= 0; i--) {
        const local = searches[i];
        array.push({
            id: `${i}`,
            local: local,
        });
    }
    return (
        <>
            <View style={styles.titleView}>
                <Text style={styles.title}>{'Últimas buscas'}</Text>
                <Text style={styles.contentText}>
                    {"Clique para ver detalhes dos últimos CEP's procurados."}
                </Text>
            </View>
            <FlatList
                style={styles.list}
                data={array}
                renderItem={({item}) => <Item local={item.local} />}
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
    list: {
        padding: 15,
    },
    itemParent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 25,
        margin: 5,
        backgroundColor: '#F1F9FF',
    },
    value: {
        color: '#7C7C7C',
        fontSize: RFValue(16),
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

export default SearchHistoryScreen;
