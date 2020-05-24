import * as React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity} from 'react-native';

import Button1 from './Button1';

export default function ButtonArea() {
  return (
    <View style={styles.container}>
        <Button1 />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: '#23313d',
    marginHorizontal: 14,
    padding: 5,

  },
  
});
