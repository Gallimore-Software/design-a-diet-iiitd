import * as React from 'react';
import {View, StyleSheet} from 'react-native';

import IngredientName from '../components/NutritionalInfoScreenComponents/IngredientName';
import Quantity from '../components/NutritionalInfoScreenComponents/Quantity';
import ButtonArea from '../components/NutritionalInfoScreenComponents/ButtonArea';
import AllNutrients from '../components/NutritionalInfoScreenComponents/AllNutrients';

export default function NutritionalInfoScreen({navigation}) {

    return (
        <View style={styles.container}>
            <IngredientName/>
            <Quantity/>
            <AllNutrients/>
            <ButtonArea navigation={navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff'
    }
})