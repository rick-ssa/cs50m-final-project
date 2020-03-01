import React from 'react';
import { StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {Provider} from 'react-redux'
import store from './redux/Store'
import colors from './assets/colors'

import SearchScreen from  './screens/SearchScreen'

const Stack = createStackNavigator()

export default function App() {
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions = {{
            headerStyle: {
              backgroundColor: colors.LIGHTGREEN,
            },
            headerTintColor: colors.LIGHT,
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}
        >
          <Stack.Screen name = 'Search' component = {SearchScreen} />
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
