import * as React from 'react'
import {StyleSheet, View, Text} from 'react-native';

export default function RecentIngredientList(props) {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer} >

            </View>
            <Text style={styles.textStyle}>{props.ingredient}</Text>    
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#fff'
    },
    innerContainer:{
        backgroundColor: '#C4C4C4',
        height: 105,
        width: 105,
        borderRadius: 10
    },
    textStyle: {
        fontSize: 15,
        fontWeight: 'bold'
    }
});