import React from 'react';
import { StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {Provider} from 'react-redux'
import store from './redux/Store'
import colors from './assets/colors'

import SearchScreen from  './screens/SearchScreen'
import RecipesScreen from './screens/RecipesScreen'
import IngredientScreen from './screens/IngredientScreen'
import DirectionScreen from './screens/DirectionScreen'

const Stack = createStackNavigator()

const Tab = createBottomTabNavigator()

function RecipeScreen() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'ingredients') {
          iconName = 'lemon'
        } else if (route.name === 'directions') {
          iconName = 'list-alt';
        }

        // You can return any component that you like here!
        return <Icon name={iconName} size={size} color={color} />;
      },
    })}

      tabBarOptions = {{
        activeTintColor: colors.YELLOW,
        inactiveTintColor: colors.LIGHTGREEN,
        activeBackgroundColor: colors.DARKGREEN,
        inactiveBackgroundColor: colors.DARKGREEN,
      }}
    >
      <Tab.Screen name = 'ingredients' component = {IngredientScreen} />
      <Tab.Screen name = 'directions' component = {DirectionScreen} />
    </Tab.Navigator>
  )
}

export default function App() {
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName = {'Search'}
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
          <Stack.Screen
            name = 'Recipe'
            component = {RecipeScreen}
          />

        
          <Stack.Screen 
            name = 'Recipes'
            component = {RecipesScreen}
          />

          <Stack.Screen 
            name = 'Search' 
            component = {SearchScreen} 
          />
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
