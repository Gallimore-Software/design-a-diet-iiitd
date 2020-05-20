import * as React from 'react';
import { StyleSheet, StatusBar, Text, View, Button, Alert, TouchableOpacity} from 'react-native';

import CartItems from '../components/CartScreenComponents/CartItems';
import Info from '../components/CartScreenComponents/Info';
import ButtonArea from '../components/CartScreenComponents/ButtonArea'

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="skyblue" barStyle="light-content"/>
      <CartItems/>
      <Info/>
      <ButtonArea/>
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
