import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {Provider} from 'react-redux'
import store from './redux/Store'

import SearchScreen from  './screens/SearchScreen'

const Stack = createStackNavigator()

export default function App() {
  
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = 'home' component = {SearchScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
});
