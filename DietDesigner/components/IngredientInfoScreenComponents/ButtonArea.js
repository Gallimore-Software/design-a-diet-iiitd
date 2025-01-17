import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity} from 'react-native';

import Button1 from '../IngredientInfoScreenComponents/Button1';
import Buttons from '../IngredientInfoScreenComponents/Buttons';

export default function ButtonArea(props) {
  return (
    <View style={styles.container}>
        <Button1 navigation={props.navigation} quantity={props.quantity} nutrients={props.nutrients} name={props.name}/>
        <Buttons saveFunction={()=>props.saveFunction()}/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 3,
    flexDirection: 'column',
    // backgroundColor: '#23313d',
    alignSelf: 'stretch',
    marginHorizontal: 14,
    padding: 5,
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },
  
});
