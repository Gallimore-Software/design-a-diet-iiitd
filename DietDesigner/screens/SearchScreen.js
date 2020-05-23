import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import RecommendedBox from '../components/RecommendedBox';
import RecentIngredientList from '../components/RecentIngredientList';
import { ReactButton, ScrollView } from 'react-native-gesture-handler';


export default function SearchScreen() {
    let list = [1,2,3,4,5,6,7,8,9]

    return (
        <View style={{flex: 1, backgroundColor: '#ffffff'}}>
            <View style={{ borderWidth: 1, flexDirection: 'row'}}>
                <Ionicons name="ios-search" size={20}/>
                <TextInput
                    placeholder="What's your Ingredient?"
                    placeholderTextColor="grey"
                    style={{flex: 1, fontWeight: '700' }}
                />
            </View>


            <View style={{paddingTop: 10, flex: 2}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20}}>
                    <TouchableOpacity><Text style={[styles.textStyle, styles.textBold]}>Recent</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={[styles.textStyle,styles.textMuted]}>View All</Text></TouchableOpacity>
                </View>
                <View style={ { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, paddingTop: 10 }}>
                    <RecentIngredientList ingredient="Banana"/>
                    <RecentIngredientList ingredient="Orange"/>
                    <RecentIngredientList ingredient="Apple"/>
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
