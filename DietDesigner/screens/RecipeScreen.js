import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';
import RecommendedBox from '../components/RecommendedBox';
import MiddleNavBar from '../components/MiddleNavBar';
import { retrieveData, storeData } from '../api/AsyncStorage';
import API from '../api';

export default function HomeScreen({navigation}) {
  let list = [1,2,3,4,5,6,7,8,9]

  const [savedItems, useSavedItems] =React.useState([]);
  const [images, updateImages] = React.useState([]);
  const [recipes, updateRecipes] = React.useState([]);

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

    React.useEffect(()=>{
      (async()=>{
        const res = await API.getData('/images')
        const data = await res.data
        updateImages(data);
      })()
    }, [])

    React.useEffect(()=>{
    
      (async () => {
        let name = savedItems.map((item)=>JSON.parse(item).name.toLowerCase())
        console.log(name)
        const res = await API.getData('/recipes/'+name)
        const data = await res.data;
        updateRecipes(data)

    })()
    }, [savedItems.join(',')])

  const navigateScreen = (name, calories, carbohydrates, proteins, fats, nutrients, image) => {
    navigation.navigate('IngredientInfoScreen', {ingredientName: name??'',calories: calories, carbohydrates: carbohydrates??100, proteins: proteins??50, fats: fats??20, nutrients:nutrients, image:image});
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
                let imglink = images[name];
                return (
                  <View key={index} style={{marginLeft:10}}> 
                    <RecommendedBox
                    imgSrc={imglink}
                    recentFunction = {() => {storeData('recent', {name, calories, proteins, carbohydrates, fats, nutrients, imglink})}}
                    navigateScreen={()=>navigateScreen(name, calories, parseFloat(carbohydrates).toFixed(2), proteins, fats.toFixed(2), nutrients, imglink)}
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
            recipes.slice(0,10).map((item)=> {
              return (
                <View style={{marginLeft:10}}> 
                  <RecommendedBox ingredientName={item.name} recentFunction={()=>{}} navigateScreen={()=>navigateScreen(item.name, 10, 20, 30, 40, 200, '')}  /> 
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
