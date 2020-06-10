import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';


export default function RecipeInstructionScreen({navigation, route}) {

    const utensils_array = route.params.utensils.split('||');
    const utensils_set = [...new Set(utensils_array)];
    const process_array = route.params.process.split('||');
    const ingredients_array = route.params.ingredients;
    const ingredients_filtered = ingredients_array.filter((value, index, arr) => {
        return (
            value != ''
        )
    })


    const colorList = ['red','black','lime','blue','darkorange','pink','violet','mediumturquoise','purple','skyblue'];

    return (
        <View style={styles.container}>
            <View flex={1}>
                <TouchableOpacity><Text style={[{marginTop:10, marginLeft:10,}, styles.textStyle, styles.textBold]}>INGREDIENTS REQUIRED</Text></TouchableOpacity>
                    <ScrollView>
                        {ingredients_filtered.map((element) => {
                            return (
                                <View flexDirection='row' alignItems='center'>
                                    <Entypo name="dot-single" size={26} color={colorList[Math.floor(Math.random() * 10)]}/>
                                    <Text>
                                    {element}
                                    </Text>
                                </View>
                            )
                        })}
                    </ScrollView>
            </View>
            <View flex={1}>
                <TouchableOpacity><Text style={[{marginTop:10, marginLeft:10,}, styles.textStyle, styles.textBold]}>UTENSILS REQUIRED</Text></TouchableOpacity>
                    <ScrollView>
                            {utensils_set.map((element) => {  
                                console.log(element);
                                if (element === '') {
                                    element = 'No Utensils Available'
                                }
                                return (
                                <View flexDirection='row' alignItems='center'>
                                    <Entypo name="dot-single" size={26} color={colorList[Math.floor(Math.random() * 10)]}/>
                                    <Text>
                                    {element}
                                    </Text>
                                </View>
                                )
                            })}
                    </ScrollView>
            </View>
            <View flex={1}>
                <TouchableOpacity><Text style={[{marginTop:10, marginLeft:10,}, styles.textStyle, styles.textBold]}>PROCESS</Text></TouchableOpacity>
                    <ScrollView>
                        {process_array.map((element) => {
                            return (
                                <View flexDirection='row' alignItems='center'>
                                    <Entypo name="dot-single" size={26} color={colorList[Math.floor(Math.random() * 10)]}/>
                                    <Text>
                                    {element}
                                    </Text>
                                </View>
                            )
                        })}
                    </ScrollView>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
    },
    textBold: {
        fontWeight: 'bold'
    },
    textStyle: {
        fontSize: 20,
    }
})