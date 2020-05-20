import * as React from 'react';
import { StyleSheet, Image, Text, View, Button, Alert, TouchableOpacity} from 'react-native';
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';

export default function HeaderLogo() {
  return (
    <Image style={styles.Image} source={require('../assets/images/Logo_Temp.png')}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  Image: {
      width: 150,
      height: 55,
  }

  
});
