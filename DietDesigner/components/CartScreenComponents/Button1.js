import * as React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity} from 'react-native';
import {retrieveData} from '../../api/AsyncStorage'

export default function Button1(props) {

  const [savedItems, useSavedItems] = React.useState([]);

  const onPressHandler = (nutrients, name) => {
    props.navigation.navigate('NutritionalInfoScreen', {nutrients, name});
  }

  React.useEffect(()=>{
      (async () => {
          const asyncSavedItems = await retrieveData('cart2');

          useSavedItems([...asyncSavedItems.map(
                  (item) => {
                      // console.log(savedItems)
                      return JSON.stringify(item)
                  }
              )]);
        })()
    })


    const merge = (data) => {
      const result = {}; 
    
      data.forEach(basket => { 
        for (let [key, value] of Object.entries(basket)) { 
          if (result[key]) { 
            result[key] += value; 
          } else { 
            result[key] = value;
          }
        }
      });
      return result; 
    };
    
    let arr = []
    savedItems.map((item, index) => {
      item = JSON.parse(item);
      let {name, calories, proteins, carbohydrates, fat, nutrients} = item;
      arr.push(nutrients);
    })
    const totalNutrients = merge(arr)

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => onPressHandler(totalNutrients, 'Cart')}>
            <Text style={styles.text}>
                See Full Nutritional Composition
            </Text>
        </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: '#23313d',
    alignSelf: 'center',
    marginHorizontal: 14,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    width: 320,
    padding: 10,
  },
  button: {
    alignSelf: 'center',
    borderRadius: 25,
    backgroundColor: '#F4F1F1',
    textAlign: 'center',
  }


  
});
