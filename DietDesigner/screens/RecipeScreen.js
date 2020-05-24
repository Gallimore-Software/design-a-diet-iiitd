import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';
import RecommendedBox from '../components/RecommendedBox';
import MiddleNavBar from '../components/MiddleNavBar';
import ButtonArea from '../components/ButtonArea'

export default function HomeScreen() {
  let list = [1,2,3,4,5,6,7,8,9]


  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20}}>
        <TouchableOpacity><Text style={[styles.textStyle, styles.textBold]}>Your Ingredients</Text></TouchableOpacity>
        
      </View>

      <View style={{paddingTop: 20, flex: 1}}>
        <ScrollView  horizontal={true}>
            {
              list.map((item)=> {
                return (
                  <View key={item} style={{marginLeft:10}}> 
                    <RecommendedBox  style={styles.scrollHorizontal} /> 
                    
                    
                  </View>
                )
                
              })
            }
            
        </ScrollView>
        <ButtonArea/>
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
