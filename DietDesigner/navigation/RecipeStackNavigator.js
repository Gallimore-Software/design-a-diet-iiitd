import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RecipeScreen from '../screens/RecipeScreen';
import RecipeInstructionScreen from '../screens/RecipeInstructionScreen';
import IngredientInfoScreen from '../screens/IngredientInfoScreen';


const Stack = createStackNavigator();

export default function RecipeStackNavigator() {
    return (
        <Stack.Navigator initialRouteName='RecipeScreen' screenOptions={{
            headerShown: true
          }} >
            <Stack.Screen name='RecipeScreen' component={RecipeScreen} />
            <Stack.Screen name='IngredientInfoScreen' component={IngredientInfoScreen} />
            <Stack.Screen name='RecipeInstructionScreen' component={RecipeInstructionScreen} />
        </Stack.Navigator>
    )
}