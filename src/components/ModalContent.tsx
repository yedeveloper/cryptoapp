import React from 'react';
import CurrencyType from '../types';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../types/Colors';
import Calculator from './Calculator';

/**
 * Functional component to show the body of the modal
 * @param data includes actCurrency with the info of the actual currency
 */
const ModalContent : React.FC<{actCurrency:CurrencyType}> = (data) => {

    const {actCurrency} = data;

    return(
        <View>
            <View style={styles.itemModal}>
                <Text style={styles.textTitle}>Name</Text>
                <Text style={styles.textDetail}>{actCurrency.name}</Text>
            </View>
            <View style={styles.itemModal}>
                <Text style={styles.textTitle}>Symbol</Text>
                <Text style={styles.textDetail}>{actCurrency.symbol}</Text>
            </View>
            <View style={styles.itemModal}>
                <Text style={styles.textTitle}>Rank</Text>
                <Text style={styles.textDetail}>{actCurrency.rank}</Text>
            </View>
            <View style={styles.itemModal}>
                <Text style={styles.textTitle}>Price USD</Text>
                <Text style={styles.textDetail}>{actCurrency.price_usd}</Text>
            </View>
            <View style={styles.itemModal}>
                <Text style={styles.textTitle}>Percent Change 24H</Text>
                <Text style={styles.textDetail}>{actCurrency.percent_change_24h}</Text>
            </View>
            <View style={styles.itemModal}>
                <Text style={styles.textTitle}>Calculate</Text>
                <Calculator price={actCurrency.price_usd} />
            </View>
        </View>
    );

}

//Styles for component
const styles = StyleSheet.create({
    itemModal: {
        borderBottomColor: Colors.black,
        width: '100%',
        paddingVertical: 10,
        borderBottomWidth: 1,
    },
    textTitle: {
        fontSize: 11,
        fontWeight: 'bold',
        color: Colors.gray
    },
    textDetail: {
        marginTop: 5,
        fontSize: 17,
        color: Colors.black
    }
});

export default ModalContent;