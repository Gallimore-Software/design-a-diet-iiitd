import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { MonoText } from '../components/StyledText';
import RecommendedBox from '../components/RecommendedBox';
import MiddleNavBar from '../components/MiddleNavBar';
import { retrieveData, storeData } from '../api/AsyncStorage';
import API from '../api';
export default function RecipeInstructionScreen() {
    return (
        <Viewstyle={{flex: 1, marginTop: 20, marginBottom: 1}}>
            <TouchableOpacity><Text style={[styles.textStyle, styles.textBold]}>INGREDIENTS REQUIRED</Text></TouchableOpacity>
            //list of ingredients here
             <TouchableOpacity><Text style={[styles.textStyle, styles.textBold]}>UTENSILS REQUIRED</Text></TouchableOpacity>
             //list of utensils here
             <TouchableOpacity><Text style={[styles.textStyle, styles.textBold]}>PROCESS</Text></TouchableOpacity>
             //process here
        </View>
    )
}
}