import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import RecommendedBox from '../components/RecommendedBox';
import RecentIngredientList from '../components/RecentIngredientList';
import { ReactButton, ScrollView } from 'react-native-gesture-handler';
import {useState, useEffect} from 'react';

import {retrieveData} from '../api/AsyncStorage';


export default function SearchScreen({navigation}) {
    let list = [1,2,3,4,5,6,7,8,9]

    const [savedItems, useSavedItems] = useState([]);
    useEffect(()=>{
        (async () => {
            const asyncSavedItems = await retrieveData('cart');
            useSavedItems([...asyncSavedItems]);
            // console.log(asyncSavedItems);
        })()
    })

    const onPressHandler = (name, carbohydrates, proteins, fats) => {
        navigation.navigate('IngredientInfoScreen', {ingredientName: name??'',carbohydrates: carbohydrates??100, proteins: proteins??50, fats: fats??20});
      }

    return (
        <View style={{flex: 1, backgroundColor: '#ffffff'}}>
            <View style={{ borderWidth: 1, flexDirection: 'row'}}>
                <Ionicons name="ios-search" size={20}/>
                <TextInput
                    placeholder="What's your Ingredient?"
                    placeholderTextColor="grey"
                    style={{flex: 1, fontWeight: '700' }}
                    onSubmitEditing={()=>{console.log("Hello World")}}
                />
            </View>


            <View style={{paddingTop: 10, flex: 2}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20}}>
                    <TouchableOpacity><Text style={[styles.textStyle, styles.textBold]}>Recent</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={[styles.textStyle,styles.textMuted]}>View All</Text></TouchableOpacity>
                </View>
                <View style={ { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, paddingTop: 10 }}>
                    <TouchableOpacity onPress={()=>onPressHandler("Potato", 200, 100, 50)}>                    
                        <RecentIngredientList ingredient="Potato"/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>onPressHandler("Orange", 150, 30, 27)}>                    
                        <RecentIngredientList ingredient="Orange"/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>onPressHandler("Apple", 300, 60, 12)}>                    
                        <RecentIngredientList ingredient="Apple"/>
                    </TouchableOpacity>
                </View>
                
            </View>


            <View style={{flex:3}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20}}>
                    <TouchableOpacity><Text style={[styles.textStyle, styles.textBold]}>Saved</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={[styles.textStyle,styles.textMuted]}>View All</Text></TouchableOpacity>
                </View>

                <View style={{paddingTop: 20, flex: 1}}>
                    <ScrollView  horizontal={true}>
                        {
                        savedItems.map((item, index)=> {
                            return (
                            <View key={index} style={{marginLeft:10}}> 
                                <RecommendedBox ingredientName={item.name.split(' ').slice(-2).join(' ').toUpperCase()}  style={styles.scrollHorizontal} /> 
                                <View style={{paddingHorizontal: 10}}>
                                <Text style={styles.recommendedText}>Calories: {item.calories}</Text> 
                                <Text style={styles.recommendedText}>Proteins: {item.proteins??0}</Text> 
                                <Text style={styles.recommendedText}>Carbs: {item.carbohydrates}</Text> 
                                <Text style={styles.recommendedText}>Fats: {item.fat??0}</Text> 
                                </View>
                                
                            </View>
                            )
                            
                        })
                        }
                        
                    </ScrollView>
                </View>
                <View style={{height: 20}} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
})
