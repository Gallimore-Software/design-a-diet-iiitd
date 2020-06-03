import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity} from 'react-native';


export default function Buttons(props) {

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => {props.saveFunction()}}>
            <Text style={styles.text}>
                Add to Cart
            </Text>
        </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: '#23313d',
    alignSelf: 'stretch',
    marginHorizontal: 14,
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    width: 130,
    padding: 10,
  },
  button: {
    alignSelf: 'center',
    borderRadius: 25,
    backgroundColor: '#F4F1F1',
    textAlign: 'center',
  }


  
});
