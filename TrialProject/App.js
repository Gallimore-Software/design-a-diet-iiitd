import React from 'react';
import { StyleSheet, StatusBar, Text, View, Button, Alert, TouchableOpacity} from 'react-native';

import Header from './components/Header';
import IngredientName from './components/IngredientName';
import IngredientImage from './components/IngredientImage';
import Quantity from './components/Quantity';
import Info from './components/Info';
import ButtonArea from './components/ButtonArea'
import TabBar from './components/TabBar';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="skyblue" barStyle="light-content"/>
      <Header/>
      <IngredientName/>
      <IngredientImage/>
      <Quantity/>
      <Info/>
      <ButtonArea/>
      <TabBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'powderblue',
    justifyContent: 'center',
  },
  
});
