import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {useState, useEffect} from 'react';
import {retrieveData, clearData} from '../api/AsyncStorage';


export default function SearchLink({navigation}) {

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
