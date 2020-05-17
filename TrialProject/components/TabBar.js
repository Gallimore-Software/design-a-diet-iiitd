import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity} from 'react-native';


export default function Buttons() {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>
                HOME
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>
                SEARCH
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>
                DIETS
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>
                CART
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
    backgroundColor: '#0000',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    // shadowColor: 'black',
    // shadowOpacity: 1.0,
    elevation: 1,
  },
  text: {
    fontSize: 19,
    textAlign: 'center',
    padding: 10,
  },
  button: {
    alignSelf: 'center',
    borderRadius: 15,
    backgroundColor: '#C4C4C4',
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10,
    
  }


  
});
