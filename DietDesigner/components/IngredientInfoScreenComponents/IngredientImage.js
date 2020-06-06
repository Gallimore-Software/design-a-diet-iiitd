import React from 'react';
import {useState, useEffect} from 'react';
import { StyleSheet, Image, Text, View, Button, Alert, TouchableOpacity, ImageBackground} from 'react-native';
import API from '../../api'


export default function Header(props) {


  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer} >
      <ImageBackground style={styles.image} source={{uri: props.image}}>
      </ImageBackground>
      </View>
    </View>

  );
}


const styles = StyleSheet.create({

  container: {
    flex: 2,
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignSelf: 'center',
  },

  imagecontainer: {
    flex: 1,
    backgroundColor: "#C4C4C4",
    width: 150,
    height: 200,
    borderRadius: 10,
  },
  
  image: {
    flex: 1,
    alignItems: 'center',
    width: 150,
    height: 100,
    justifyContent: 'center',
    alignSelf: 'center',
    resizeMode: 'cover'

  }

  
});
