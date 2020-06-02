import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CartScreen from '../screens/CartScreen';
import NutritionalInfoScreen from '../screens/NutritionalInfoScreen';

const Stack = createStackNavigator();

export default function CartStackNavigator() {

    return (
        <Stack.Navigator initialRouteName='CartScreen' screenOptions={{
            headerShown: true
          }} >
            <Stack.Screen name='CartScreen' component={CartScreen} />
            <Stack.Screen name='NutritionalInfoScreen' component={NutritionalInfoScreen} />
        </Stack.Navigator>
    )
}