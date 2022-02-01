import React, { useState } from 'react';
import Header from '../components/Header';
import CurrencyType, { defaultCurrency } from '../types';
import ListCurrency from '../components/ListCurrency';
import Service from '../services/Service';
import SearchBar from "react-native-dynamic-search-bar";
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import AwesomeLoading from 'react-native-awesome-loading';
import Loading from '../components/Loading'
import Colors from '../types/colors';

/**
 * Functional component for Home
 * Show the components and call the service to get the list
 * @param message String for message
 */
const Home : React.FC<{message: string}> = (message) => {

    const [currencyList, setCurrencyList] = useState<CurrencyType[]>([]);
    const [filteredList, setFilteredList] = useState<CurrencyType[]>([]);
    const [searchText, setSearchText] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    //Call to service and get info
    const getInfo = async () => {
        setCurrencyList([]);
        setIsLoading(true);
        let service = new Service();
        let currency = await service.getAll();
        setCurrencyList(currency);
        setIsLoading(false);
    }

    //Filter list by text input
    const search = (searchText: string) => {
        setSearchText(searchText);
        let filteredData = currencyList.filter(function (item) {
          return item.name.includes(searchText);
        });
        setFilteredList(filteredData);
    }

    return(
        <>
            <Header title="Crypto App" />
            <View style={styles.title}>
                <Text style={styles.textTitle}>List</Text>
                <TouchableOpacity onPress={getInfo} style={styles.refresh}>
                    <Text style={styles.refreshText}>Refresh</Text>
                </TouchableOpacity>
            </View>
            <SearchBar
                style={styles.search}
                placeholder="Search by name"
                onChangeText={(text) => search(text)}
                onClearPress={() => setFilteredList([])}
            />
            {
                (currencyList.length > 0) ? 
                    <>
                    <ListCurrency currencyList={(filteredList.length > 0) ? filteredList : currencyList} />
                    </>
                :   (!isLoading) ? <Text style={styles.textNoinfo}>Please refresh to see data</Text> : null
            }
            {
                (isLoading) ?
                <Loading textLoading="Loading ... " /> : null
            }
        </>
    )
}

//Styles for component
const styles = StyleSheet.create({
    search: {
        height: 60,
        marginTop: 10,
        width: '100%'
    },
    textNoinfo: {
        fontSize: 17,
        color: Colors.gray,
        textAlign: 'center',
        marginTop: 30
    },
    refresh: {
        backgroundColor: Colors.primary,
        width: '20%',
        alignSelf: 'flex-end',
        marginTop: 15,
        padding: 10,
        marginHorizontal: 20,
        borderRadius: 10
    },
    refreshText: {
        color: Colors.black,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        paddingHorizontal: 15,
    },
    textTitle: {
        fontSize: 40,
        color: Colors.white,
        fontWeight: 'bold',
        width: '75%'
    }
})

export default Home;