import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RecipeScreen from '../screens/RecipeScreen';
import RecipeInstructionScreen from '../screens/RecipeInstructionScreen';
import IngredientInfoScreen from '../screens/IngredientInfoScreen';
import NutritionalInfoScreen from '../screens/NutritionalInfoScreen';


const Stack = createStackNavigator();

export default function RecipeStackNavigator() {
    return (
        <Stack.Navigator initialRouteName='RecipeScreen' screenOptions={{
            headerShown: true
          }} >
            <Stack.Screen name='Recipes' component={RecipeScreen} />
            <Stack.Screen name='Ingredient Info' component={IngredientInfoScreen} />
            <Stack.Screen name='Nutritional Info' component={NutritionalInfoScreen} />
            <Stack.Screen name='Recipe Instruction' component={RecipeInstructionScreen} />
        </Stack.Navigator>
    )
}