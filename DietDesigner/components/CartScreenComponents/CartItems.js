import * as React from 'react';
import {ScrollView, StyleSheet, Text, Image, View, Button, Alert, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

export default function CartItems() {
    const iter = [1,2,3,4,5,6,7,8,9,10];
    return (
        <View style={styles.container}>
            <ScrollView>
                {iter.map((item) => {
                    return (
                        <View style={styles.ingredientview}>
                            <Text style={styles.textbold}>
                                Ingredient {item}
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