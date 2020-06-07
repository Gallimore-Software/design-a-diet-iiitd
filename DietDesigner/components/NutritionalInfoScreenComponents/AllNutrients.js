import * as React from 'react';
import { useState, useEffect} from 'react';
import {ActionSheetIOS, Button, View, Text, StyleSheet, TouchableOpacity, ScrollView, Picker, DatePickerAndroid, Platform} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import {Dropdown} from 'react-native-material-dropdown';

export default function AllNutrients(props) {


    const filteredNutrients = {Minerals: {}, Sugars: {}, Vitamins: {}, EssentialAminoAcids: {}, NonEssentialAminoAcids: {}, EssentialFattyAcids: {}, Miscellaneous: {}}

    filteredNutrients.Minerals = {
        'Calcium, Ca': -1,
        'Ash': -1,
        'Fiber, total dietary': -1,
        'Copper, Cu': -1,
        'Fluoride, F': -1,
        'Magnesium, Mg': -1,
        'Manganese, Mn': -1,
        'Phosphorus, P': -1,
        'Potassium, K': -1,
        'Sodium, Na': -1,
        'Zinc, Zn': -1,
        'Selenium, Se': -1,
        'Iron, Fe': -1,
    }

    filteredNutrients.EssentialAminoAcids = {
        'Isoleucine': -1,
        'Histidine': -1,
        'Leucine': -1,
        'Lysine': -1,
        'Methionine': -1,
        'Phenylalanine': -1,
        'Tryptophan': -1,
        'Threonine': -1,
        'Valine': -1,
        'Arginine': -1,
        'Proline': -1,
    }

    filteredNutrients.Sugars = {
        'Fructose': -1,
        'Galactose': -1,
        'Glucose (dextrose)': -1,
        'Lactose': -1,
        'Maltose': -1,
        'Starch': -1,
        'Sucrose': -1,
        'Sugars, total': -1
    }

    filteredNutrients.NonEssentialAminoAcids = {
        'Alanine': -1,
        'Aspartic acid': -1,
        'Cystine': -1,
        'Glutamic acid': -1,
        'Glycine': -1,
        'Hydroxyproline': -1,
        'Serine': -1,
        'Tyrosine': -1
    }

    filteredNutrients.Vitamins = {
        'Vitamin A': -1,
        'Vitamin B-12': -1,
        'Vitamin B-12, added': -1,
        'Vitamin B': -1,
        'Vitamin C': -1,
        'Folate, DFE': -1,
        'Folic acid': -1,
        'Vitamin D (D2 + D3)': -1,
        'Vitamin D2': -1,
        'Vitamin D3': -1,
       'Vitamin E': -1,
        'Vitamin E, added': -1,
        'Vitamin K (phylloquinone)': -1,
        'Vitamin K': -1,
        'Choline, total': -1,
        'Dihydrophylloquinone': -1,
        'Carotene, alpha': -1,
        'Carotene, beta': -1,
        'Betaine': -1,
        'Cryptoxanthin': -1,
        'Menaquinone-4': -1,
        'Niacin': -1,
        'Pantothenic acid': -1,
        'Retinol': -1,
        'Riboflavin': -1,
        'Folate, food': -1,
        'Folate, total': -1,
        'Thiamin': -1,
        'Tocopherol, beta': -1,
        'Tocopherol, delta': -1,
        'Tocopherol, gamma': -1,
        'Tocotrienol, alpha': -1,
        'Tocotrienol, beta': -1,
        'Tocotrienol, delta': -1,
        'Tocotrienol, gamma': -1
    }

    filteredNutrients.Miscellaneous = {
        'Alcohol, ethyl': -1,
        'Beta-sitosterol': -1,
        'Campesterol': -1,
        'Lutein + zeaxanthin': -1,
        'Lycopene': -1,
        'Phytosterols': -1,
        'Stigmasterol': -1,
        'Theobromine': -1
    }

    filteredNutrients.EssentialFattyAcids = {
        'Cholestrol': -1,
        "Fatty acids, total monounsaturated": 43.957,
        "Fatty acids, total polyunsaturated": 20.572,
        "Fatty acids, total polyunsaturated 15:0": 0,
        "Fatty acids, total polyunsaturated 16:1 c": null,
        "Fatty acids, total polyunsaturated 16:1 t": null,
        "Fatty acids, total polyunsaturated 17:0": 0,
        "Fatty acids, total polyunsaturated 17:1": null,
        "Fatty acids, total polyunsaturated 18:1 c": null,
        "Fatty acids, total polyunsaturated 18:1 t": null,
        "Fatty acids, total polyunsaturated 18:2 CLAs": null,
        "Fatty acids, total polyunsaturated 18:2 i": null,
        "Fatty acids, total polyunsaturated 18:2 n-6 c,c": null,
        "Fatty acids, total polyunsaturated 18:2 t not further defined": null,
        "Fatty acids, total polyunsaturated 18:2 t,t": null,
        "Fatty acids, total polyunsaturated 18:3 n-6 c,c,c": null,
        "Fatty acids, total polyunsaturated 20:2 n-6 c,c": 0,
        "Fatty acids, total polyunsaturated 20:3 undifferentiated": 0,
        "Fatty acids, total polyunsaturated 22:1 c": null,
        "Fatty acids, total polyunsaturated 22:1 t": null,
        "Fatty acids, total polyunsaturated 24:0": 0,
        "Fatty acids, total polyunsaturated 24:1 c": 0,
        "Fatty acids, total saturated": 6.283,
        "Fatty acids, total saturated 10:0": 0,
        "Fatty acids, total saturated 12:0": 0,
        "Fatty acids, total saturated 14:0": 0,
        "Fatty acids, total saturated 14:1": 0,
        "Fatty acids, total saturated 16:0": 4.387,
        "Fatty acids, total saturated 16:1 undifferentiated": 0,
        "Fatty acids, total saturated 18:0": 1.825,
        "Fatty acids, total saturated 18:1 undifferentiated": 43.743,
        "Fatty acids, total saturated 18:2 undifferentiated": 19.578,
        "Fatty acids, total saturated 18:3 undifferentiated": 0.994,
        "Fatty acids, total saturated 18:4": 0,
        "Fatty acids, total saturated 20:0": 0.071,
        "Fatty acids, total saturated 20:1": 0.214,
        "Fatty acids, total saturated 20:4 undifferentiated": 0,
        "Fatty acids, total saturated 20:5 n-3 (EPA)": 0,
        "Fatty acids, total saturated 22:0": 0,
        "Fatty acids, total saturated 22:1 undifferentiated": 0,
        "Fatty acids, total saturated 22:5 n-3 (DPA)": 0,
        "Fatty acids, total saturated 22:6 n-3 (DHA)": 0,
        "Fatty acids, total saturated 4:0": 0,
        "Fatty acids, total saturated 6:0": 0,
        "Fatty acids, total saturated 8:0": 0,
        "Fatty acids, total trans": null,
        "Fatty acids, total trans-monoenoic": null,
        "Fatty acids, total trans-polyenoic": null,
        "Fatty acids, total trans-polyenoic 13:0": 0,
        "Fatty acids, total trans-polyenoic 15:1": null,
        "Fatty acids, total trans-polyenoic 18:1-11 t (18:1t n-7)": null,
        "Fatty acids, total trans-polyenoic 18:3 n-3 c,c,c (ALA)": null,
        "Fatty acids, total trans-polyenoic 18:3i": null,
        "Fatty acids, total trans-polyenoic 20:3 n-3": null,
        "Fatty acids, total trans-polyenoic 20:3 n-6": null,
        "Fatty acids, total trans-polyenoic 20:4 n-6": null,
        "Fatty acids, total trans-polyenoic 21:5": null,
        "Fatty acids, total trans-polyenoic 22:4": null,
        'proteins': -1,
    }




    const [pickerLabel, setpickerLabel] = useState('   Major Nutrients');
  
    const pickerdata =  [
        { value: 'Minerals'},
        { value: 'Sugars'},
        { value: 'Vitamins'},
        { value: 'Essential Amino Acids'},
        { value: 'Non Essential Amino Acids'},
        { value: 'Essential Fatty Acids'},
        { value: 'Miscellaneous'},
    ];


    const [selectedValue, setSelectedValue] = useState("");

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
        
        setnutrientlist(majorlist.slice(Math.max(majorlist.length-10, 1)).reverse())

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

        setnutrientlist(newlist[1])

        settoggle(false);

        setSelectedValue('Sugars');

        setpickerLabel('  Nutrients Category');


    }

    let newlist = [];
    let majorlist = [];

    
    for (let j=0; j<Object.keys(filteredNutrients).length; j++) {
        let type = Object.keys(filteredNutrients)[j];
        let templist = []
        for(let i=0; i<Object.keys(filteredNutrients[type]).length; i++) {
            let nutri = Object.keys(filteredNutrients[type])[i];
            let am = props.nutrients[nutri]??0;
            if (am != 0) {
                am = (am*props.quantity)/100
                am = am.toFixed(4);
            }
            if (nutri.includes('Fatty acids')) {
                nutri = nutri.slice(13);
            }
            if (nutri.includes('not further defined')) {
                nutri = nutri.slice(0, nutri.length-20);
            }
            if (nutri.includes('undifferentiated')) {
                nutri = nutri.slice(0, nutri.length-17);
            }
            templist.push({ nutrient: nutri, amount: am +'mg' })
            majorlist.push({ nutrient: nutri, amount: am });
        }
        newlist.push(templist);
    }

    majorlist.sort(function(a, b) {
        return a.amount-b.amount
    })

    for (let i=0; i<majorlist.length; i++) {
        majorlist[i].amount = majorlist[i].amount + 'mg'
    }

    const [nutrientlist, setnutrientlist] = useState(majorlist.slice(Math.max(majorlist.length-10, 1)).reverse());

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
                <Dropdown animationDuration={50} disabled={toggle} style={styles.picker} data={pickerdata} value={selectedValue} label={pickerLabel}  onChangeText={ (value, index, data) => setnutrientlist(newlist[index])}/>
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

const styles = StyleSheet.create({
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