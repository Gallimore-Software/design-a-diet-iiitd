import * as React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity} from 'react-native';


export default function Button1() {

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>
                What's you ingredient?
            </Text>
        </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 0,
    flexDirection: 'row',
    // backgroundColor: '#23313d',
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'left',
    width: 320,
    padding: 0,
  },
  


  
});
