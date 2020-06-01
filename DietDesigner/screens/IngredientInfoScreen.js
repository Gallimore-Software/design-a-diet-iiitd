import React from 'react';
import { StyleSheet, StatusBar, Text, View, Button, Alert, TouchableOpacity} from 'react-native';

import IngredientName from '../components/IngredientInfoScreenComponents/IngredientName';
import IngredientImage from '../components/IngredientInfoScreenComponents/IngredientImage';
import Quantity from '../components/IngredientInfoScreenComponents/Quantity';
import Info from '../components/IngredientInfoScreenComponents/Info';
import ButtonArea from '../components/IngredientInfoScreenComponents/ButtonArea'

export default function IngredientInfoScreen({navigation, route}) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="skyblue" barStyle="light-content"/>
      <IngredientName name={route.params.ingredientName}/>
      <IngredientImage/>
      <Quantity/>
      <Info carbohydrates={route.params.carbohydrates} proteins={route.params.proteins} fats={route.params.fats}/>
  
      <ButtonArea navigation={navigation} nutrients={route.params.nutrients} name={route.params.ingredientName}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  
});
