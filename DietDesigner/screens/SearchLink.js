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
    this.state = { isLoading: false, text: '' ,arrayholder:[], dataSource:[]};
    //this.arrayholder = [];
  }

  // const navigateScreen = (name, calories, carbohydrates, proteins, fats, nutrients, image) => {
  //       navigation.navigate('IngredientInfoScreen', {ingredientName: name??'',calories: calories, carbohydrates: carbohydrates??100, proteins: proteins??50, fats: fats??20, nutrients:nutrients, image:image});
  //     }

_onPress(item) {
    console.log(item)
    this.props.navigation.navigate('IngredientInfoScreen', 
      {ingredientName: item.title.split(' ').slice(-2).join(' ').toUpperCase()??'',calories: item.calories, 
      carbohydrates: item.carbohydrates??100, 
      proteins: item.nutrients.proteins??50, 
      fats: item.fat??20, nutrients:item.nutrients, image:item.image??''});
  }

  

  fetchData = ()=>{
    API.getData('/recs/'+this.state.text).then(res=>{
      return res.data
    }).then(res=>{
      this.setState({dataSource: res.map((item, index)=> {
        return {id: index, title: item.name.split(' ').join(' ').toUpperCase(), nutrients: item.nutrients, fat: item.fat, carbohydrates: item.carbohydrates, calories:item.calories}

      })})
    })
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
    // console.log(item)
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
          onSubmitEditing={this.fetchData}
          onChangeText={(text) => this.setState({text})}
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



