import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';
import RecommendedBox from '../components/RecommendedBox';
import MiddleNavBar from '../components/MiddleNavBar';

export default function HomeScreen() {
  let list = [1,2,3,4,5,6,7,8,9]


  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20}}>
        <TouchableOpacity><Text style={[styles.textStyle, styles.textBold]}>Recommended</Text></TouchableOpacity>
        <TouchableOpacity><Text style={[styles.textStyle,styles.textMuted]}>View All</Text></TouchableOpacity>
      </View>

      <View style={{paddingTop: 20, flex: 1}}>
        <ScrollView  horizontal={true}>
            {
              list.map((item)=> {
                return (
                  <View key={item} style={{marginLeft:10}}> 
                    <RecommendedBox  style={styles.scrollHorizontal} /> 
                    <View style={{paddingHorizontal: 10}}>
                      <Text style={styles.recommendedText}>Calories:</Text> 
                      <Text style={styles.recommendedText}>Proteins:</Text> 
                      <Text style={styles.recommendedText}>Carbs:</Text> 
                      <Text style={styles.recommendedText}>Fats:</Text> 
                    </View>
                    
                  </View>
                )
                
              })
            }
            
        </ScrollView>
      </View>
      <View style={{flex: 1, marginTop: 20, marginBottom: 1}}>
          <MiddleNavBar />

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
