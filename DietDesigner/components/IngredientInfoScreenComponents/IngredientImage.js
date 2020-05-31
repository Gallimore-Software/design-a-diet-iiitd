import React from 'react';
import { StyleSheet, Image, Text, View, Button, Alert, TouchableOpacity} from 'react-native';



export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>

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
    height: 300,
    borderRadius: 10,
  },
  
  image: {
    alignItems: 'center',
    width: 250,
    height: 250,
    justifyContent: 'center',
    alignSelf: 'center',

  }

  
});
