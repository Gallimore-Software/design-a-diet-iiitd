import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity} from 'react-native';


export default function Button1(props) {
  const onPressHandler = () => {
    props.navigation.goBack();
  }
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onPressHandler}>
            <Text style={styles.text}>
                Back to Basic Composition
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
    marginHorizontal: 14,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    width: 320,
    padding: 10,
  },
  button: {
    alignSelf: 'center',
    borderRadius: 25,
    backgroundColor: '#F4F1F1',
    textAlign: 'center',
  }


  
});
