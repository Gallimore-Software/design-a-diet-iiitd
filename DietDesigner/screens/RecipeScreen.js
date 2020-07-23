import * as React from 'react';
import {Suspense} from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';
import RecommendedBox from '../components/RecommendedBox';
import MiddleNavBar from '../components/MiddleNavBar';
import { retrieveData, storeData } from '../api/AsyncStorage';
import API from '../api';


export default function RecipeScreen({navigation}) {
  let list = [1,2,3,4,5,6,7,8,9]

  const [savedItems, useSavedItems] =React.useState([]);
  const [recipes, updateRecipes] = React.useState(["0","0","0","0","0","0","0","0","0","0"]);

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
    
      (async () => {
        updateRecipes(["1","1","1","1","1","1","1","1","1","1"]);
        let name = savedItems.map((item)=>JSON.parse(item).name.toLowerCase())
        const res = await API.getData('/recipes/'+name).catch(() => {
          updateRecipes(["0","0","0","0","0","0","0","0","0","0"]);
        })
        if (res != undefined)  {
          const data = await res.data;

          updateRecipes(data)
        }

    })()
    }, [savedItems.join(',')])


    const navigateScreen2 = (ingredients, process, utensils, steps) => {
      navigation.navigate('Recipe Instruction', {ingredients:ingredients, process:process, utensils:utensils, steps:steps});
    }


    const navigateScreen = (name, calories, carbohydrates, proteins, fats, nutrients, image) => {
      navigation.navigate('Ingredient Info', {ingredientName: name??'',calories: calories, carbohydrates: carbohydrates??100, proteins: proteins??50, fats: fats??20, nutrients:nutrients, image:image});
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
                let {name, calories, proteins, carbohydrates, fats, nutrients, imagelink, quant} = item;
                // console.log(name);
                return (
                  <View key={index} style={{marginLeft:10}}> 
                    <RecommendedBox
                    imgSrc={imagelink}
                    recentFunction = {() => {storeData('recent', {name, calories, proteins, carbohydrates, fats, nutrients, imagelink})}}
                    navigateScreen={()=>navigateScreen(name, calories, parseFloat(carbohydrates).toFixed(2), proteins, fats, nutrients, imagelink)}
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
              if (item === "0") {
                return (
                  <View>

                  </View>
                )
              }

              if (item === "1") {
                return (
                <View style={{marginLeft:10}}> 
                  <RecommendedBox imgSrc={"./assets/images/loading_icon.gif"} ingredientName={"Loading..."} recentFunction={()=>{}} navigateScreen={()=>{}}  /> 
                </View>

                )
              }
              else {
                return (
                  <View style={{marginLeft:10}}> 
                    <RecommendedBox imgSrc={item.image} ingredientName={item.name} recentFunction={()=>{}} navigateScreen={()=>navigateScreen2(item.ingredients, item.process, item.utensils, item.steps)}  /> 
                  </View>
                )
              }
            })
          }
          
          </ScrollView>
      </View>
      <View style={{height: 15}}></View>
    </View>

      
  );
}

RecipeScreen.navigationOptions = {
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
