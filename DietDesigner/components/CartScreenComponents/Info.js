import * as React from 'react';
import { StyleSheet, Text, Image, View, Button, Alert, TouchableOpacity, Dimensions} from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import {retrieveData} from '../../api/AsyncStorage';


const {width, height} = Dimensions.get('window');

export default function Info() {

  const [savedItems, useSavedItems] =React.useState([]);

  React.useEffect(()=>{
      (async () => {
          const asyncSavedItems = await retrieveData('cart2');

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

  let totalProteins = 0;
  let totalFats = 0;
  let totalCarbs = 0;
  let totalCalories = 0;
  savedItems.map((item, index) => {
      item = JSON.parse(item)
      totalCarbs += Math.round(item.carbohydrates);
      totalFats = item.fats??0;
      totalProteins += item.proteins??0;
      totalCalories += item.calories??0;
    })

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
  const data = [
    {
      name: "Carbohydrates",
      amount: totalCarbs,
      color: "#33ccff",
      legendFontColor: "#1affff",
      legendFontSize: 13
    },
    {
      name: "Fats",
      amount: Math.round(totalFats),
      color: "#ff6600",
      legendFontColor: "#ffa366",
      legendFontSize: 13
    },
    {
      name: "Proteins",
      amount: Math.round(totalProteins),
      color: "#33ff33",
      legendFontColor: "#66ff66",
      legendFontSize: 13
    }
  ];
  return (
    <View style={styles.container}>
      <View alignSelf='flex-start' marginLeft={15} marginTop={15}>
        <Text style={styles.textbold}>
          Total Cart Nutritional Value
        </Text>
      </View>
      <View>
      <PieChart
            data={data}
            width={width-35}
            height={height/4}
            chartConfig={chartconfig}
            accessor="amount"
            backgroundColor="transparent"
            absolute
            />
      </View>
      <Text style={styles.bold}>
        Calories: {totalCalories}
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 4,
    flexDirection: 'column',
    // backgroundColor: 'blue',
    marginTop: 10,
    marginHorizontal: 14,
    alignItems:'center'
  },
  image: {
    width: 380,
    height: 150,
    marginTop: 15,
  },
  textbold: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 20,
    textDecorationLine: 'underline',
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 18,
  }
  
});
