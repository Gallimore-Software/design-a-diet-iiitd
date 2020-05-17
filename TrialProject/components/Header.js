import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity} from 'react-native';

import Logo from '../components/Logo';
import Account from '../components/Account';

export default function Header() {
  return (
    <View style={styles.container}>
        <Logo/>
        <Account/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'skyblue',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    marginHorizontal: 14,
  },

  
});
