import React from 'react';
import {useState, useEffect} from 'react';
import { StyleSheet, Image, Text, View, Button, Alert, TouchableOpacity, ImageBackground} from 'react-native';
import API from '../../api'


export default function Header(props) {

  let image = props.image;
  if (image == '' || image== 'NF') {
    image = 'https://upload.wikimedia.org/wikipedia/commons/2/28/Galbi-tang_ingredients.jpg';
  }

  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer} >
      <ImageBackground style={styles.image} source={{uri: image}}>
      </ImageBackground>
      </View>
    </View>

  );
}


const styles = StyleSheet.create({

  container: {
    flex: 3,
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignSelf: 'center',
  },

  imagecontainer: {
    flex: 1,
    backgroundColor: "#fff",
    width: 150,
    height: 200,
    borderRadius: 10,
  },
  
  image: {
    flex: 1,
    alignItems: 'center',
    width: 150,
    height: 130,
    justifyContent: 'center',
    alignSelf: 'center',
    resizeMode: 'cover'

  }

  
});
