import * as React from 'react';
import { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, Picker} from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function AllNutrients({navigation}) {

    const [selectedValue, setSelectedValue] = useState("Sugars");

    const iter = [
        {nutrient: 'Copper', amount: '800mg'},
        {nutrient: 'Ash', amount: '700mg'},
        {nutrient: 'Zn', amount: '600mg'},
        {nutrient: 'Sucrose', amount: '500mg'},
        {nutrient: 'Fructose', amount: '400mg'},
        {nutrient: 'Lactose', amount: '300mg'},
        {nutrient: 'Vitamin G', amount: '300mg'},
        {nutrient: 'Calcium', amount: '200mg'},
        {nutrient: 'HCFS', amount: '150mg'},
        {nutrient: 'Vitamin A', amount: '100mg'},
        {nutrient: 'Vitamin C', amount: '20mg'},
        {nutrient: 'Vitamin D', amount: '10mg'},
        {nutrient: 'Vitamin E', amount: '15mg'},

    ]

    const onPressHandler = () => {
        navigation.navigate('MajorNutrients');
    }


    const colorList = ['red','black','lime','blue','darkorange','pink','violet','mediumturquoise','purple','skyblue'];

    return (
        <View style={styles.container}>
            <View style={styles.tabbar}>
            <TouchableOpacity onPress={onPressHandler}>
                <Text style={styles.notselected}>
                    Composition
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.selected}>
                    Others
                </Text>
            </TouchableOpacity>
            </View>
            <View style={{backgroundColor:'#fff', width: 260, borderWidth: 1, borderColor: 'black', marginTop: 5,}}>
            <Picker style={{width: 257}} mode='dropdown' selectedValue={selectedValue} onValueChange={(itemValue, itemPosition) => setSelectedValue(itemValue)}>
                <Picker.item label='Sugars' value='Sugars' />
                <Picker.item label='Minerals' value='Minerals' />
                <Picker.item label='Vitamins' value='Vitamins' />
                <Picker.item label='Essential Amino Acids' value='Essential Amino Acids' />
                <Picker.item label='Non Essential Amino Acids' value='Non Essential Amino Acids' />
                <Picker.item label='Essential Fatty Acids' value='Essential Fatty Acids' />
                <Picker.item label='Miscellaneous' value='Miscellaneous' />
            </Picker>
            </View>
            <ScrollView>
                {iter.map((item) => {
                    return (
                        <View flexDirection='row' justifyContent='space-evenly'>
                            <View flexDirection='row' alignItems='center'>
                                <Entypo name="dot-single" size={26} color={colorList[Math.floor(Math.random() * 10)]}/>
                                <Text>
                                    {item.nutrient}
                                </Text>
                            </View>
                            <Text style={styles.Light} marginLeft={5}>
                                {item.amount}
                            </Text>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    );
}

styles = StyleSheet.create({
    container: {
        flex: 4,
        elevation: 2,
        // backgroundColor: 'blue',
        
    },
    Bold: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    Light: {
        color: '#C4C4C4',
    },
    tabbar: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',

    },
    selected: {
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    notselected: {
        color: '#908989',
    },
})