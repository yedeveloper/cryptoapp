import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Home from './src/containers/Home';

/**
 * Root component for the App
 */
const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Home message="Welcome" />
    </SafeAreaView>
  );
};

//Styles for globla container
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  contentWrapper: {
    padding: 20,
  },
});
export default App;