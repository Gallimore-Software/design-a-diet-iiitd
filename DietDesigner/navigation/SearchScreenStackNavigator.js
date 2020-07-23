import React from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from '../screens/SearchScreen';
import IngredientInfoScreen from '../screens/IngredientInfoScreen';
import NutritionalInfoScreen from '../screens/NutritionalInfoScreen';
import SearchLink from '../screens/SearchLink';
const Stack = createStackNavigator();

export default function SearchScreenStackNavigator() {

    return (
        <Stack.Navigator initialRouteName='SearchScreen' screenOptions={{
            headerShown: true
          }} >
            <Stack.Screen name='Search for the Ingredients' component={SearchScreen} />
            <Stack.Screen name='Ingredient Info' component={IngredientInfoScreen} />
            <Stack.Screen name='Nutritional Info' component={NutritionalInfoScreen} />
            <Stack.Screen name='SearchLink' component={SearchLink} />
        </Stack.Navigator>
    )
}