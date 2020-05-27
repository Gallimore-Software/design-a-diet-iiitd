import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import MajorNutrients from './MajorNutrients';
import AllNutrients from './AllNutrients';

const Stack = createStackNavigator();

export default function StackNutrients() {

    return (
        <View flex={4}>
            <Stack.Navigator initialRouteName='MajorNutrients' screenOptions={{
                headerShown: false
            }} >
                {/* alter the view using state */}
                <Stack.Screen name='MajorNutrients' component={MajorNutrients} />
                <Stack.Screen name='AllNutrients' component={AllNutrients} />
            </Stack.Navigator>
        </View>
    )
}