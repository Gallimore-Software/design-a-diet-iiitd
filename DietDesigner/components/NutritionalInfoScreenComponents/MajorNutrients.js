import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function MajorNutrients({navigation}) {

    const onPressHandler = () => {
        navigation.navigate('AllNutrients');
    }

    const colorList = ['red','black','lime','blue','darkorange','pink','violet','mediumturquoise','purple','skyblue'];

    return (
        <View style={styles.container}>
            <View style={styles.tabbar}>
            <TouchableOpacity>
                <Text style={styles.selected}>
                    Composition
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressHandler}>
                <Text style={styles.notselected}>
                    Others
                </Text>
            </TouchableOpacity>
            </View>
            <View marginLeft={30} marginTop={15}>
                <Text style={styles.Bold}>
                    Major Nutrients
                </Text>
            </View>
            <View flexDirection='row' justifyContent='space-evenly'>
                <View flexDirection='row' alignItems='center'>
                    <Entypo name="dot-single" size={26} color={colorList[Math.floor(Math.random() * 10)]}/>
                    <Text>
                        Calcium
                    </Text>
                </View>
                <Text style={styles.Light} marginLeft={5}>
                    800 mg
                </Text>
            </View>
            <View flexDirection='row' justifyContent='space-evenly'>
                <View flexDirection='row' alignItems='center'>
                    <Entypo name="dot-single" size={26} color={colorList[Math.floor(Math.random() * 10)]} />
                    <Text>
                        Tyrosine
                    </Text>
                </View>
                <Text style={styles.Light}>
                    700 mg
                </Text>
            </View>
            <View flexDirection='row' justifyContent='space-evenly'>
                <View flexDirection='row' alignItems='center'>
                    <Entypo name="dot-single" size={26} color={colorList[Math.floor(Math.random() * 10)]} />
                    <Text>
                        Vitamin C
                    </Text>
                </View>
                <Text style={styles.Light}>
                    600 mg
                </Text>
            </View>
            <View flexDirection='row' justifyContent='space-evenly'>
                <View flexDirection='row' alignItems='center'>
                    <Entypo name="dot-single" size={26} color={colorList[Math.floor(Math.random() * 10)]} />
                    <Text>
                        Vitamin D
                    </Text>
                </View>
                <Text style={styles.Light}>
                    500 mg
                </Text>
            </View>
            <View flexDirection='row' justifyContent='space-evenly'>
                <View flexDirection='row' alignItems='center'>
                    <Entypo name="dot-single" size={26} color={colorList[Math.floor(Math.random() * 10)]} />
                    <Text>
                        Vitamin E
                    </Text>
                </View>
                <Text style={styles.Light}>
                    400 mg
                </Text>
            </View>
            <View flexDirection='row' justifyContent='space-evenly'>
                <View flexDirection='row' alignItems='center'>
                    <Entypo name="dot-single" size={26} color={colorList[Math.floor(Math.random() * 10)]} />
                    <Text>
                        Vitamin F
                    </Text>
                </View>
                <Text style={styles.Light}>
                    300 mg
                </Text>
            </View>
            <View flexDirection='row' justifyContent='space-evenly'>
                <View flexDirection='row' alignItems='center'>
                    <Entypo name="dot-single" size={26} color={colorList[Math.floor(Math.random() * 10)]} />
                    <Text>
                        Vitamin G
                    </Text>
                </View>
                <Text style={styles.Light}>
                    200 mg
                </Text>
            </View>
            <View flexDirection='row' justifyContent='space-evenly'>
                <View flexDirection='row' alignItems='center'>
                    <Entypo name="dot-single" size={26} color={colorList[Math.floor(Math.random() * 10)]} />
                    <Text>
                        Phosphorus
                    </Text>
                </View>
                <Text style={styles.Light}>
                    100 mg
                </Text>
            </View>
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
    }

})