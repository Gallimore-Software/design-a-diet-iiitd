import * as React from 'react';
import {View, StyleSheet} from 'react-native';

import IngredientName from '../components/NutritionalInfoScreenComponents/IngredientName';
// import Quantity from '../components/NutritionalInfoScreenComponents/Quantity';
import ButtonArea from '../components/NutritionalInfoScreenComponents/ButtonArea';
import AllNutrients from '../components/NutritionalInfoScreenComponents/AllNutrients';

export default function NutritionalInfoScreen({navigation, route}) {

    return (
        <View style={styles.container}>
            <IngredientName name={route.params.name}/>
            {/* <Quantity/> */}
            <AllNutrients quantity={route.params.quantity} nutrients={route.params.nutrients}/>
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