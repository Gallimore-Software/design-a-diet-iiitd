import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import RecommendedBox from '../components/RecommendedBox';
import MiddleNavBar from '../components/MiddleNavBar';
import API from '../api'




export default function HomeScreen() {
  const [recommendedFood, updateRecommendFood] = useState([]);
  const [categorizedFood, updateCategorizeFood] = useState([]);
  useEffect(()=>{
    (async()=>{
      const res = await API.getData('/ingredients')
      const data = await res.data
      updateRecommendFood(data)
      updateCategorizeFood([...data.sort()])
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


  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20}}>
        <TouchableOpacity><Text style={[styles.textStyle, styles.textBold]}>Recommended</Text></TouchableOpacity>
        <TouchableOpacity><Text style={[styles.textStyle,styles.textMuted]}>View All</Text></TouchableOpacity>
      </View>

      <View style={{paddingTop: 20, flex: 1}}>
        <ScrollView  horizontal={true}>
            {
              recommendedFood.map((item, index)=> {
                return (
                  <View key={index} style={{marginLeft:10}}> 
                    <RecommendedBox saveButton={true} ingredientName={item.name.split(' ').slice(-2).join(' ').toUpperCase()} style={styles.scrollHorizontal} /> 
                    <View style={{paddingHorizontal: 10}}>
                    
                      <Text style={styles.recommendedText}>Calories: {item.calories.toFixed(2)}</Text> 
                      <Text style={styles.recommendedText}>Proteins: {item.proteins??0}</Text> 
                      <Text style={styles.recommendedText}>Carbs: {item.carbohydrates.toFixed(2)}</Text> 
                      <Text style={styles.recommendedText}>Fats: {item.fat.toFixed(2)}</Text> 
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
              return (
                <View key={index} style={{marginLeft:10}}> 
                  <RecommendedBox  ingredientName={item.name.split(' ').slice(-2).join(' ').toUpperCase()}  /> 
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
