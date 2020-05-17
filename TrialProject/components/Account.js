import React from 'react';
import { StyleSheet, Image, Text, View, Button, Alert, TouchableOpacity} from 'react-native';
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';

export default function Logo() {
  return (
    <TouchableOpacity>
     <Image style={styles.Image} source={require('../assets/Account_Image.png')}/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    flex: 1,
    justifyContent: 'center',
  },
  Image: {
      width: 30,
      height: 30,
      marginTop: 30,
  }

  
});
