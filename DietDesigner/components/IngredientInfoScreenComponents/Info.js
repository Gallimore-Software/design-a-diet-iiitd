import React from 'react';
import {Dimensions, StyleSheet, Text, Image, View, Button, Alert, TouchableOpacity} from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const {width, height} = Dimensions.get('window');

export default function Info(props) {
  const chartconfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
  console.log(props.carbohydrates, props.fats, props.proteins);
  const data = [
    {
      name: "Carbohydrates",
      amount: Math.round(props.carbohydrates),
      color: "#33ccff",
      legendFontColor: "#1affff",
      legendFontSize: 13
    },
    {
      name: "Fats",
      amount: Math.round(props.fats),
      color: "#ff6600",
      legendFontColor: "#ffa366",
      legendFontSize: 13
    },
    {
      name: "Proteins",
      amount: Math.round(props.proteins),
      color: "#33ff33",
      legendFontColor: "#66ff66",
      legendFontSize: 13
    }
  ];
  return (
    <View style={styles.container}>
      <PieChart
            data={data}
            width={width-35}
            height={height/4}
            chartConfig={chartconfig}
            accessor="amount"
            backgroundColor="transparent"
            absolute
            />
      <Text style={styles.bold}>
        Calories: {props.calories}
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 4,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 14,
  },
  image: {
    width: 380,
    height: 150,
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 18,
  }

  
});
