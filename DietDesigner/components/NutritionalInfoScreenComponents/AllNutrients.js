import * as React from 'react';
import { useState, useEffect} from 'react';
import {ActionSheetIOS, Button, View, Text, StyleSheet, TouchableOpacity, ScrollView, Picker, DatePickerAndroid, Platform} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import {Dropdown} from 'react-native-material-dropdown';

export default function AllNutrients({navigation}) {

    const [pickerLabel, setpickerLabel] = useState('Major Nutrients');
  
    const pickerdata =  [
        { value: 'Sugars'},
        { value: 'Minerals'},
        { value: 'Vitamins'},
        { value: 'Essential Amino Acids'},
        { value: 'Non Essential Amino Acids'},
        { value: 'Essential Fatty Acids'},
        { value: 'Miscellaneous'},
    ];

    const [nutrientlist, setnutrientlist] = useState([
        {nutrient: 'Calcium', amount: '800mg'},
        {nutrient: 'Tyrosine', amount: '700mg'},
        {nutrient: 'Vitamin C', amount: '600mg'},
        {nutrient: 'Vitamin D', amount: '500mg'},
        {nutrient: 'Vitamin E', amount: '400mg'},
        {nutrient: 'Vitamin F', amount: '300mg'},
        {nutrient: 'Vitamin G', amount: '300mg'},
        {nutrient: 'Phosphorus', amount: '200mg'},

    ]);

    const [selectedValue, setSelectedValue] = useState("Sugars");

    const [tab2, settab2] = useState({
        color: '#908989'
    });
    const [tab1, settab1] = useState({
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    });

    const [toggle, settoggle] = useState(true);

    const onPressHandler = () => {
        settab2({color: '#908989'});

        settab1({
            fontWeight: 'bold',
            textDecorationLine: 'underline'
        });
        
        setnutrientlist([
            {nutrient: 'Calcium', amount: '800mg'},
            {nutrient: 'Tyrosine', amount: '700mg'},
            {nutrient: 'Vitamin C', amount: '600mg'},
            {nutrient: 'Vitamin D', amount: '500mg'},
            {nutrient: 'Vitamin E', amount: '400mg'},
            {nutrient: 'Vitamin F', amount: '300mg'},
            {nutrient: 'Vitamin G', amount: '300mg'},
            {nutrient: 'Phosphorus', amount: '200mg'},
        ])

        settoggle(true);

        setSelectedValue('');

        setpickerLabel('   Major Nutrients');

    }
    const onPressHandler2 = () => {
        settab1({color: '#908989'});

        settab2({
            fontWeight: 'bold',
            textDecorationLine: 'underline'
        });

        setnutrientlist([
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
        ])

        settoggle(false);

        setSelectedValue('Sugars');

        setpickerLabel('  Nutrients Category');


    }


    const colorList = ['red','black','lime','blue','darkorange','pink','violet','mediumturquoise','purple','skyblue'];

    return (
        <View style={styles.container}>
            <View style={styles.tabbar}>
            <TouchableOpacity onPress={onPressHandler}>
                <Text style={tab1}>
                    Composition
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressHandler2}>
                <Text style={tab2}>
                    Others
                </Text>
            </TouchableOpacity>
            </View>
            <View style={{backgroundColor:'#fff', width: 260, marginTop: 5,}}>
                <Dropdown disabled={toggle} style={styles.picker} data={pickerdata} value={selectedValue} label={pickerLabel}  onChangeText={(value, index, data) => setSelectedValue(value)}/>
            </View>
            <ScrollView>
                {nutrientlist.map((item) => {
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
    picker: {
        marginLeft: 10,

    }
})