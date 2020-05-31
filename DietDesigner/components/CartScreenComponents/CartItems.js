import * as React from 'react';
import {ScrollView, StyleSheet, Text, Image, View, Button, Alert, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import {retrieveData} from '../../api/AsyncStorage';



export default function CartItems() {

    const [savedItems, useSavedItems] =React.useState([]);

    React.useEffect(()=>{
        (async () => {
            const asyncSavedItems = await retrieveData('cart');

            useSavedItems([...asyncSavedItems.map(
                    (item) => {
                        // console.log(savedItems)
                        return JSON.stringify(item)
                    }
                )]);
            
            
            // console.log(savedItems);
            // console.log(typeof(savedItems))
        })()
    })


    return (
        <View style={styles.container}>
            <ScrollView>
                {savedItems.map((item, index) => {
                    item = JSON.parse(item)
                    return (
                        <View key={index} style={styles.ingredientview}>
                            <Text style={styles.textbold}>
                                 {item.name.split(' ').slice(-2).join(' ').toUpperCase()}
                            </Text>
                            <TextInput style={styles.textinput} placeholder="Enter Quantity"/>
                            <Text>
                                gm
                            </Text>
                            <AntDesign style={styles.minusicon} name='closecircleo' size={20} color='black'/>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    );
}




const styles = StyleSheet.create ({
    container: {
        display: 'flex',
        flex: 2,
    },
    ingredientview: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: '#C4C4C4',
        borderRadius: 10,
        marginTop: 15,
    },

    textinput: {
        marginLeft: 15,
        marginRight: 15,
        textAlign: 'center',
        flex: 1,
        backgroundColor: '#F4F1F1',
    },

    textbold: {
        fontWeight: 'bold'
    },
    minusicon: {
        marginLeft: 15,
    }
});