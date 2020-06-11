import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, SegmentedControlIOSComponent } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';


export default function RecipeInstructionScreen({navigation, route}) {

    const utensils_array = route.params.utensils.split('||');
    const steps_array = route.params.steps.split('|').splice(1);
    steps_array.pop();
    for (let i=0; i<steps_array.length; i++) {
        steps_array[i].trim();
    }
    console.log(steps_array);
    const utensils_set = [...new Set(utensils_array)];
    const process_array = route.params.process.split('||');
    const ingredients_array = route.params.ingredients;
    const ingredients_filtered = ingredients_array.filter((value, index, arr) => {
        return (
            value != ''
        )
    })

    function getUnique(array){
        var uniqueArray = [];
        
        // Loop through array values
        for(var value of array){
            if(uniqueArray.indexOf(value) === -1){
                uniqueArray.push(value);
            }
        }
        return uniqueArray;
    }

    const ingredients_filtered_final = getUnique(ingredients_filtered)

    console.log(steps_array);


    const colorList = ['red','black','lime','blue','darkorange','pink','violet','mediumturquoise','purple','skyblue'];

    return (
        <View style={styles.container}>
            <View flex={1}>
                <TouchableOpacity><Text style={[{marginTop:10, marginLeft:10,}, styles.textStyle, styles.textBold]}>INGREDIENTS REQUIRED</Text></TouchableOpacity>
                    <ScrollView>
                        {ingredients_filtered_final.map((element) => {
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
            <View flex={1}>
                <TouchableOpacity><Text style={[{marginTop:10, marginLeft:10,}, styles.textStyle, styles.textBold]}>INSTRUCTIONS</Text></TouchableOpacity>
                    <ScrollView>
                        {steps_array.map((element) => {
                            console.log(element, 100);
                            return(
                                <View marginLeft={10} flexDirection='row' alignItems='center'>
                                    <Text>
                                    {element}
                                    </Text>
                                </View>
                        )})}
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