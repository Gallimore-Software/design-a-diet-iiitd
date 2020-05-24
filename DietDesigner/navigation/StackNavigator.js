import React from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from '../screens/SearchScreen';
import IngredientInfoScreen from '../screens/IngredientInfoScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {

    return (
        <Stack.Navigator initialRouteName='SearchScreen' screenOptions={{
            headerShown: true
          }} >
            <Stack.Screen name='Search for the Ingredients' component={SearchScreen} />
            <Stack.Screen name='IngredientInfoScreen' component={IngredientInfoScreen} />
        </Stack.Navigator>
    )
}