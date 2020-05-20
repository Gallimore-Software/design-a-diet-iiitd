import * as React from 'react';
import { StyleSheet, Text, Image, View, Button, Alert, TouchableOpacity} from 'react-native';


export default function Info() {
  return (
    <View style={styles.container}>
      <View marginLeft={15} marginTop={15}>
        <Text style={styles.textbold}>
          Total Cart Nutritional Value
        </Text>
      </View>
      <View>
        <Image style = {styles.image} source={require('../../assets/images/Logistics_temp.jpeg')}/>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: 'blue',
    marginTop: 10,
    marginHorizontal: 14,
  },
  image: {
    width: 380,
    height: 150,
    marginTop: 15,
  },
  textbold: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 20,
    textDecorationLine: 'underline',
  }

  
});
