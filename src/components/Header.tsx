import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../types/colors';

/**
 * Functional component to show the header with customized text
 * @param title Title for the header of the app
 */
const Header: React.FC<{title: string}> = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

//Styles for component
const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.black,
    alignItems: 'flex-start',
    backgroundColor: Colors.primary,
    paddingHorizontal: 20
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.black,
  },
});
export default Header;