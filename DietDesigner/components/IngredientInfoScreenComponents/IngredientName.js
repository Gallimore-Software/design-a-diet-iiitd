import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity} from 'react-native';


export default function Header({name}) {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>
            {name}
        </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: '#fcd671',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    marginHorizontal: 20,
  },
  
  text: {
    fontWeight: 'bold',
    fontSize: 30,
  }

  
});
