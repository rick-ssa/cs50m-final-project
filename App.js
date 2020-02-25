import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from './assets/colors'

import Pill from './components/Pill';

export default function App() {
  return (
    <View style={styles.container}>
      <Pill text = 'Ricardo Santos'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.LIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
