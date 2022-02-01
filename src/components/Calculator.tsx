import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import Colors from '../types/colors';

/**
 * Functional component to calculate the value of certain amount of the currency
 * @param price Actual price for one of the selected currency
 */
const Calculator : React.FC <{price: string}> = ({price}) => {

    const [number, setNumber] = useState<string>('1');
    const [total, setTotal] = useState<string>(price);
    const [oneBtc, setOneBtc] = useState<string>(price);

    const calculateUsd = (newValue: string) => {
        if(newValue != ''){
            setNumber(newValue);
            let newUsd = parseFloat(newValue) * parseFloat(oneBtc);
            setTotal(newUsd.toString());
        }else{
            setNumber('');
            setTotal('0');
        }
    }

    return(
        <View>
            <Text style={styles.textInput}>BTC:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(newValue) => {calculateUsd(newValue)}}
                value={number}
                keyboardType="numeric"
            />
            <Text style={styles.textInput}>USD:</Text>
            <Text style={styles.totalUsd}>$ {total}</Text>
        </View>
    )
}

//Styles for component
const styles = StyleSheet.create({
    input: {
        backgroundColor: Colors.white,
        marginVertical: 5,
        color: Colors.black,
        borderColor: Colors.gray,
        borderWidth: 1,
        paddingHorizontal: 15,
    },
    textInput:{
        color: Colors.black,
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 13
    },
    totalUsd:{
        color: Colors.black,
        fontWeight: 'bold',
        marginTop: 5,
        fontSize: 17,
    }
})

export default Calculator;