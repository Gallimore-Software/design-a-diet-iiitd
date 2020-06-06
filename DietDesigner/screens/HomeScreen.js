import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import RecommendedBox from '../components/RecommendedBox';
import MiddleNavBar from '../components/MiddleNavBar';
import API from '../api'
import {storeData, retrieveData} from '../api/AsyncStorage'




export default function HomeScreen({navigation, routes}) {
  const [images, updateImages] = useState([]);
  const [recommendedFood, updateRecommendFood] = useState([]);
  const [categorizedFood, updateCategorizeFood] = useState([]);
  let imageDict = {};

  useEffect(()=>{
    (async()=>{
      const res = await API.getData('/ingredients')
      const data = await res.data
      updateRecommendFood(data)
      updateCategorizeFood([...data.sort()])
    })()
  }, [])

  useEffect(()=>{
    (async()=>{
      const res = await API.getData('/images')
      const data = await res.data
      updateImages(data);
    })()
  }, [])

  let sortCategorizedFood = (sortByKey) => {
    let arr = categorizedFood.sort((a, b) => (
      parseFloat(a[sortByKey]) - parseFloat(b[sortByKey])
      ))

    
    if (sortByKey==="name") {
      categorizedFood.sort();
    }
    else if(sortByKey==="proteins") {
      arr = [...arr]
    }
    else {
      arr = [...arr.reverse()] 
    }
    updateCategorizeFood(arr)
  }

  const navigateScreen = (name, calories, carbohydrates, proteins, fats, nutrients, image) => {
    // name, carbohydrates, proteins, fats
    // navigation.navigate('IngredientInfoScreen', {ingredientName: name??'',carbohydrates: carbohydrates??100, proteins: proteins??50, fats: fats??20});
    navigation.navigate('IngredientInfoScreen', {ingredientName: name.split(' ').slice(-2).join(' ').toUpperCase()??'', calories:calories, carbohydrates:carbohydrates??100, proteins:50, fats:20, nutrients:nutrients, image: image});
  }




  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20}}>
        <TouchableOpacity><Text style={[styles.textStyle, styles.textBold]}>Recommended</Text></TouchableOpacity>
        {/* <TouchableOpacity><Text style={[styles.textStyle,styles.textMuted]}>View All</Text></TouchableOpacity> */}
      </View>

      <View style={{paddingTop: 20, flex: 1}}>
        <ScrollView  horizontal={true}>
            {
              recommendedFood.map((item, index)=> {
                let {name, calories, proteins, carbohydrates, fat, nutrients} = item;
                // console.log(name, images[name])
                let imglink = images[name];
                return (
                  <View key={index} style={{marginLeft:10}}> 
                    <RecommendedBox 
                    saveButton={true}
                    recentFunction = {() => {storeData('recent', {name, calories, proteins, carbohydrates, fat, nutrients, imglink})}}
                    saveFunction={()=>{storeData('cart',{name, calories, proteins, carbohydrates, fat, nutrients, imglink})}} 
                    ingredientName={name.split(' ').slice(-2).join(' ').toUpperCase()} 
                    navigateScreen={()=>navigateScreen(name, calories, carbohydrates.toFixed(2), proteins, fat.toFixed(2), nutrients, imglink)}
                    style={styles.scrollHorizontal}
                    imgSrc={imglink}
                    /> 
                    <View style={{paddingHorizontal: 10}}>
                    
                      <Text style={styles.recommendedText}>Calories: {calories.toFixed(2)}</Text> 
                      <Text style={styles.recommendedText}>Proteins: {proteins??0}</Text> 
                      <Text style={styles.recommendedText}>Carbs: {carbohydrates.toFixed(2)}</Text> 
                      <Text style={styles.recommendedText}>Fats: {fat.toFixed(2)}</Text> 
                    </View>
                    
                  </View>
                )
                
              })
            }
            
        </ScrollView>
      </View>
      <View style={{flex: 1, marginTop: 20, marginBottom: 1}}>
          <MiddleNavBar updateCategorizeFood={sortCategorizedFood} />

          <ScrollView style={{paddingTop: 20, flex: 4}} horizontal={true}>
          {
            categorizedFood.map((item, index)=> {
              let {name, calories, proteins, carbohydrates, fat, nutrients} = item;
              // console.log(item);
              let imglink = images[name];
              return (
                <View key={index} style={{marginLeft:10}}> 
                  <RecommendedBox imgSrc={images[name]} recentFunction = {() => {storeData('recent', {name, calories, proteins, carbohydrates, fat, nutrients, imglink})}} ingredientName={item.name.split(' ').slice(-2).join(' ').toUpperCase()} 
                  navigateScreen={()=>navigateScreen(item.name, item.calories, item.carbohydrates.toFixed(2), item.proteins, item.fat.toFixed(2), item.nutrients, imglink)}
                  /> 
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
