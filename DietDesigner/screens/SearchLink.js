import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { Keyboard,StyleSheet, Text,FlatList, View, TextInput, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {useState, useEffect} from 'react';
import {retrieveData, clearData} from '../api/AsyncStorage';


export default function SearchLink({navigation}) {
  

    return (
        <View style={{flex: 1, backgroundColor: '#ffffff'}}>
            <View style={{ borderWidth: 1, flexDirection: 'row'}}>
                <Ionicons name="ios-search" size={25}/>
                <TextInput
                style={{fontSize:16}} 
                    placeholder="    What's your Ingredient?"
                     autoFocus={true}
                    placeholderTextColor="grey"
                    style={{flex: 1, fontWeight: '700' }}
                    onSubmitEditing={()=>{console.log("Hello World")}}
                />
            </View>
            <FlatList

            
                enableEmptySections={true}
                  style={{ marginTop: 10 }}
                 keyExtractor={(item, index) => index.toString()}
             />


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
