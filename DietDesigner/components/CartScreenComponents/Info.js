import * as React from 'react';
import { StyleSheet, Text, Image, View, Button, Alert, TouchableOpacity, Dimensions} from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const {width, height} = Dimensions.get('window');

export default function Info() {
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
      amount: 1400,
      color: "#33ccff",
      legendFontColor: "#1affff",
      legendFontSize: 13
    },
    {
      name: "Fats",
      amount: 360,
      color: "#ff6600",
      legendFontColor: "#ffa366",
      legendFontSize: 13
    },
    {
      name: "Proteins",
      amount: 567,
      color: "#33ff33",
      legendFontColor: "#66ff66",
      legendFontSize: 13
    }
  ];
  return (
    <View style={styles.container}>
      <View marginLeft={15} marginTop={15}>
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
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: 'blue',
    marginTop: 10,
    marginHorizontal: 14,
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
  }

  
});
