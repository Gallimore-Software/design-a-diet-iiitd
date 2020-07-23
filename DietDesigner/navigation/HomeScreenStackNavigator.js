import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import IngredientInfoScreen from '../screens/IngredientInfoScreen';
import NutritionalInfoScreen from '../screens/NutritionalInfoScreen';

const Stack = createStackNavigator();

export default function HomeScreenStackNavigator() {

    return (
        <Stack.Navigator initialRouteName='SearchScreen' screenOptions={{
            headerShown: true
          }} >
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Ingredient Info' component={IngredientInfoScreen} />
            <Stack.Screen name='Nutritional Info' component={NutritionalInfoScreen} />
        </Stack.Navigator>
    )
}