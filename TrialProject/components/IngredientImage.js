import React from 'react';
import { StyleSheet, Image, Text, View, Button, Alert, TouchableOpacity} from 'react-native';



export default function Header() {
  return (
    <Image style={styles.Image} source={require('../assets/Ingredient_Image_temp.jpg')}/>
  );
}


const styles = StyleSheet.create({
  
  Image: {
    alignItems: 'center',
    width: 250,
    height: 250,
    justifyContent: 'center',
    alignSelf: 'center',

  }

  
});
