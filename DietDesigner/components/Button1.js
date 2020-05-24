import * as React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity} from 'react-native';


export default function Button1() {

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>
                Back to Cart
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
    alignSelf: 'center',
    marginHorizontal: 10
    ,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    width: 160,
    padding: 10,
  },
  button: {
    alignSelf: 'center',
    borderRadius: 15,
    backgroundColor: '#F4F1F1',
    textAlign: 'center',
  }


  
});
