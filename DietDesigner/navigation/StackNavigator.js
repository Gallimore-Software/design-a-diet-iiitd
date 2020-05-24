import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from '../screens/SearchScreen';
import IngredientInfoScreen from '../screens/IngredientInfoScreen';

const Stack = createStackNavigator();

export default function StackNavigator({navigation, route}) {
    console.log(route)
    navigation.setOptions({headerShown: false});
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
        initialRouteName='SearchScreen'>
            <Stack.Screen name='SearchScreen' component={SearchScreen}/>
            <Stack.Screen name='IngredientInfoScreen' component={IngredientInfoScreen}/>
        </Stack.Navigator>
    )
}