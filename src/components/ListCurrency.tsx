import React, { useState } from 'react';
import {FlatList, Text, StyleSheet, TouchableOpacity, Modal, View} from 'react-native';
import CurrencyType, { defaultCurrency } from '../types/';
import ModalContent from './ModalContent';
import Colors from '../types/colors';

/**
 * Functional component to show the list of data and call the modal component
 * @param data Includes currencyList The list of data to render
 */
const ListCurrency: React.FC<{currencyList: Array<CurrencyType>}> = (data) => {

    const [actCurrency, setActCurrency] = useState<CurrencyType>(defaultCurrency);
    const [showDetail, setShowDetail] = useState<boolean>(false);
    const { currencyList } = data;

    const showDetails = (item: CurrencyType) => {
        setActCurrency(item);
        setShowDetail(true);
    }

    return (
        <>
            <FlatList
                data={currencyList}
                keyExtractor={(item, index) => `${item.id}-${index}`}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => showDetails(item)} style={styles.item}>
                        <View>
                            <Text style={styles.itemSymbol}>{item.symbol} </Text>
                            <Text style={styles.itemName}>{item.name} </Text>
                        </View>
                        <Text style={styles.quantity}>USD ${item.price_usd}</Text>
                    </TouchableOpacity>
                )}
            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={showDetail}
                onRequestClose={() => {
                    setShowDetail(!showDetail);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>{actCurrency.name} ({actCurrency.symbol}) Information</Text>
                        <ModalContent actCurrency={actCurrency} />
                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setShowDetail(!showDetail)}
                        >
                            <Text style={styles.textStyle}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    );
};

//Styles for component
const styles = StyleSheet.create({
    item: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: Colors.primary,
    },
    itemName: {
        fontSize: 17
    },
    itemSymbol: {
        fontWeight: 'bold',
        fontSize: 17
    },
    quantity: {
        padding: 6,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 0, 0.5)',
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'rgba(255, 255, 0, 0.2)',
    },
    textStyle: {
        color: Colors.primary,
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        color: Colors.black,
        fontWeight: 'bold',
        fontSize: 18,
        borderBottomColor: Colors.black,
        paddingBottom: 20,
        borderBottomWidth: 1,
    },
    button: {
        padding: 10,
        elevation: 2
    },
    buttonClose: {
        backgroundColor: Colors.black,
        marginTop: 20,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: Colors.white,
        borderRadius: 20,
        padding: 35,
        shadowColor: Colors.gray,
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
});
export default ListCurrency;