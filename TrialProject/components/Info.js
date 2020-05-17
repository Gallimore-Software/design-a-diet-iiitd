import React from 'react';
import { StyleSheet, Text, Image, View, Button, Alert, TouchableOpacity} from 'react-native';


export default function Info() {
  return (
    <View style={styles.container}>
      <Image style = {styles.image} source={require('../assets/Logistics_temp.jpeg')}/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    marginHorizontal: 14,
  },
  image: {
    width: 380,
    height: 150,
  }

  
});
