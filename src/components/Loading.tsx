import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Colors from '../types/colors';

/**
 * Functional component to show some text on loading actions
 * @param textLoading Text to show on screen while loading
 */
const Loading : React.FC<{textLoading: string}> = ({textLoading}) => {
    return(
        <>
            <Text style={styles.textLoading}>{textLoading}</Text>
        </>
    )
}

//Styles for component
const styles = StyleSheet.create({
    textLoading: {
        textAlign: 'center',
        fontSize: 19,
        fontWeight: 'bold',
        color: Colors.white,
        marginTop: 30
    }
});

export default Loading;