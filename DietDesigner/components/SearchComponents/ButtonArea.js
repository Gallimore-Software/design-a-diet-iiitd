import * as React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity} from 'react-native';

import Button1 from './Button1';
export default function ButtonArea(props) {
  return (
    <View style={styles.container}>
      <Button1 navigation={props.navigation}/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 2,
    flexDirection: 'column',
    // backgroundColor: '#23313d',
    marginHorizontal: 15,
    padding: 5,

  },
  
});
