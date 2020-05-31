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
            <Stack.Screen name='RecommendedScreen' component={HomeScreen} />
            <Stack.Screen name='IngredientInfoScreen' component={IngredientInfoScreen} />
            <Stack.Screen name='NutritionalInfoScreen' component={NutritionalInfoScreen} />
        </Stack.Navigator>
    )
}