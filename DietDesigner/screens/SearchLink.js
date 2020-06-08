import * as React from 'react';
import { StyleSheet, Text,FlatList, View, TextInput, TouchableOpacity } from 'react-native';

import { Component } from 'react';
import { ActivityIndicator  } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import API from '../api';
import {storeData, retrieveData} from '../api/AsyncStorage';


import moment from 'moment';
import decode from 'parse-entities';
import { createStackNavigator, createBottomTabNavigator} from 'react-navigation';


export default class SearchLink extends Component {
  constructor(props) {
    super(props);
    //setting default state
    this.state = { isLoading: true, text: '' ,arrayholder:[]};
    //this.arrayholder = [];
  }

  // const navigateScreen = (name, calories, carbohydrates, proteins, fats, nutrients, image) => {
  //       navigation.navigate('IngredientInfoScreen', {ingredientName: name??'',calories: calories, carbohydrates: carbohydrates??100, proteins: proteins??50, fats: fats??20, nutrients:nutrients, image:image});
  //     }

_onPress(item) {
    this.props.navigation.navigate('IngredientInfoScreen', 
      {ingredientName: item.name??'',calories: item.calories, 
      carbohydrates: item.carbohydrates??100, 
      proteins: item.proteins??50, 
      fats: item.fats??20, nutrients:item.nutrients, image:item.image});
  }

  componentDidMount() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson
          },
          function() {
            this.arrayholder = responseJson;
          }
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  // componentDidMount() {
  //       (async()=>{
  //           const res = await API.getData('/ingredients')
  //            const data = await res.data
  //            data=data[name]
  //            console.log(data);
  //               this.setState(
  //               { 
  //                 arrayholder: data }
  //           )
  //         })()
  //   }
  
  SearchFilterFunction(text) {
    
    const newData = this.arrayholder.filter(function(item) {
     
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      
      dataSource: newData,
      text: text,
    });
  }
  ListViewItemSeparator = () => {
    
    return (
      <View
        style={{
          height: 0.3,
          width: '100%',
          backgroundColor: '#080808',
        }}
      />
    );
  };
renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => this._onPress(item)}>
        <View style={styles.container}>
          <Text style={styles.textStyle}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };


  render() {

    if (this.state.isLoading) {
      
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      //ListView to show with textinput used as search bar
      <View View style={{flex: 1, backgroundColor: '#ffffff'}}>
        
        <TextInput
          style={styles.textInputStyle}
          autoFocus={true}

          onChangeText={text => this.SearchFilterFunction(text)}
          value={this.state.text}
          placeholder="  What's your Ingredient?"
        />
        <FlatList
          data={this.state.dataSource}

          ItemSeparatorComponent={this.ListViewItemSeparator}
           // renderItem={({ this.renderItem }) => (
           //  <Text style={styles.textStyle}>{item.title}</Text>
           // )}
           renderItem={this.renderItem}
          
          enableEmptySections={true}
          style={{ marginTop: 10 }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    marginTop: 40,
    padding: 16,
  },
  textStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
});



