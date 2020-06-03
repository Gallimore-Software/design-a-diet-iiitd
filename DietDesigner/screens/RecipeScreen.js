import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';
import RecommendedBox from '../components/RecommendedBox';
import MiddleNavBar from '../components/MiddleNavBar';
import { retrieveData, storeData } from '../api/AsyncStorage';

export default function HomeScreen({navigation}) {
  let list = [1,2,3,4,5,6,7,8,9]

  const [savedItems, useSavedItems] =React.useState([]);

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

  const navigateScreen = (name, calories, carbohydrates, proteins, fats, nutrients) => {
    navigation.navigate('IngredientInfoScreen', {ingredientName: name??'',calories: calories, carbohydrates: carbohydrates??100, proteins: proteins??50, fats: fats??20, nutrients:nutrients});
  }


  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20}}>
        <TouchableOpacity><Text style={[styles.textStyle, styles.textBold]}>Your Ingredients</Text></TouchableOpacity>
        
      </View>

      <View style={{paddingTop: 20, flex: 1}}>
        <ScrollView  horizontal={true}>
            {
              savedItems.map((item, index)=> {
                item = JSON.parse(item);
                let {name, calories, proteins, carbohydrates, fats, nutrients} = item;
                return (
                  <View key={index} style={{marginLeft:10}}> 
                    <RecommendedBox
                    recentFunction = {() => {storeData('recent', {name, calories, proteins, carbohydrates, fats, nutrients})}}
                    navigateScreen={()=>navigateScreen(name, calories, parseFloat(carbohydrates).toFixed(2), proteins, fats.toFixed(2), nutrients)}
                    ingredientName={name.split(' ').slice(-2).join(' ').toUpperCase()} 
                    style={styles.scrollHorizontal} /> 
                    
                    
                  </View>
                )
                
              })
            }
            
        </ScrollView>
      <View style={{height:20}} />
        {/* <ButtonArea/> */}
      </View>
      <View style={{flex: 1, marginTop: 20, marginBottom: 1}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20}}>
        <TouchableOpacity><Text style={[styles.textStyle, styles.textBold]}>Choose Recipe</Text></TouchableOpacity>
        
      </View>

          <ScrollView style={{paddingTop: 20, flex: 4}} horizontal={true}>
          {
            list.map((item)=> {
              return (
                <View style={{marginLeft:10}}> 
                  <RecommendedBox   /> 
                </View>
              )
              
            })
          }
          
          </ScrollView>
      </View>
      <View style={{height: 15}}></View>
    </View>

      
  );
}

HomeScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

  },
  textStyle: {
    fontSize: 20,
    
  },
  textMuted: {
    fontWeight: '100'
  },
  textBold: {
    fontWeight: 'bold'
  },
  
  recommendedText: {
    fontSize: 10,
    fontWeight: 'bold',
  }

  
});
