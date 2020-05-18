import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';

import Colors from '../constants/Colors';
import { View, StyleSheet, Text } from 'react-native';

export default function RecommendedBox(props) {
  return (
    <View style={styles.container}>
        <View style={styles.innerContainer} >


        </View>

        <View style={{marginTop: 10}} >
            <Text>Ingredient</Text>
            <Text style={{fontSize: 12, fontWeight: "100"}}>Quantity</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F4F1F1',
      borderRadius: 10,
      display: 'flex',
      padding: 10,
      width: 160
    },
    innerContainer: {
        borderRadius: 8,
        backgroundColor: '#C4C4C4',
        height: 120,
        width: 140
    }
  });