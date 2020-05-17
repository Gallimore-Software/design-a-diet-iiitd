import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity} from 'react-native';

import Button1 from '../components/Button1';
import Buttons from '../components/Buttons'

export default function ButtonArea() {
  return (
    <View style={styles.container}>
        <Button1/>
        <Buttons/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 2,
    flexDirection: 'column',
    // backgroundColor: '#23313d',
    alignSelf: 'stretch',
    marginHorizontal: 14,
    padding: 5,
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },
  
});
