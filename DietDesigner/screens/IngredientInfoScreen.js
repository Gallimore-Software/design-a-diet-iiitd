import React from 'react';
import { StyleSheet, StatusBar, Text, View, Button, Alert, TouchableOpacity} from 'react-native';

import IngredientName from '../components/IngredientInfoScreenComponents/IngredientName';
import IngredientImage from '../components/IngredientInfoScreenComponents/IngredientImage';
import Quantity from '../components/IngredientInfoScreenComponents/Quantity';
import Info from '../components/IngredientInfoScreenComponents/Info';
import ButtonArea from '../components/IngredientInfoScreenComponents/ButtonArea'

export default function IngredientInfoScreen({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="skyblue" barStyle="light-content"/>
      <IngredientName/>
      <IngredientImage/>
      <Quantity/>
      <Info/>
      <ButtonArea navigation={navigation}/>
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
