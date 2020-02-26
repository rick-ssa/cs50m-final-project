import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SearchScreen from  './screens/SearchScreen'


export default function App() {
  
  
  return (
    <View style={styles.container}>
      <SearchScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
});
