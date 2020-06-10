import * as React from 'react';
import {View, Text} from 'react-native';


export default function RecipeInstructionScreen({navigation, route}) {
    return (
        <View>
            <Text>
                {route.params.ingredients}
                {route.params.process}
                {route.params.utensils}
            </Text>
        </View>
    )
}