import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';


export default function MiddleNavBar(props) {
  return (
    <View style={styles.container}> 
        <TouchableOpacity>
            <Text style={styles.textStyle}>
                Popular
            </Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.textStyle}>
                Protein-Rich
            </Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.textStyle}>
                Low Calorie
            </Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.textStyle}>
                Less Carbs
            </Text>
        </TouchableOpacity>
        
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    textStyle: {
        fontSize: 15,
        fontWeight: '600'
    }   
  });