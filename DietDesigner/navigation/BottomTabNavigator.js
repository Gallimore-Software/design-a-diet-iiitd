import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import CartScreen from '../screens/CartScreen';
import RecipeScreen from '../screens/RecipeScreen';
import HeaderImageLogo from '../components/HeaderLogo.js';
import SearchScreenStackNavigator from './SearchScreenStackNavigator';
import HomeScreenStackNavigator from './HomeScreenStackNavigator';
import RecipeStackNavigator from './RecipeStackNavigator';
import CartStackNavigator from './CartStackNavigator';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({headerTitle: getHeaderTitle(route), headerRight: ()=> <HeaderImageLogo/>, headerShown: showHeader(route)});
  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreenStackNavigator}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchScreenStackNavigator}
        options={{
          title: 'Search',
          
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-search" />
        }}
      />
      <BottomTab.Screen
        name="Diet"
        component={RecipeStackNavigator}
        options={{
          title: 'Diets',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={CartStackNavigator}
        options={{
          title: 'Cart',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-cart" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'How to get started';
    case 'Search':
      return 'Search for your items';
    case 'Diet':
      return 'Plan your Diet'
    case 'Cart':
      return 'Your cart'
  }
}


function showHeader(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return false
    case 'Search':
      return false
    case 'Diet':
      return false
    case 'Cart':
      return false
  }
}
