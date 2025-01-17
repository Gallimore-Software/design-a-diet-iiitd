import * as React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity} from 'react-native';


export default function Button1(props) {
const onPressHandler = () => {
    props.navigation.navigate('SearchLink');
  }
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onPressHandler}>
            <Text style={styles.text}>
                What's you ingredient

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
    color:"grey"
  },
  button: {
    alignSelf: 'center',
    borderRadius: 25,
   // backgroundColor: '#23313d',
    textAlign: 'center',
  }


  
});
