import React from 'react';
import Ionicons from "react-native-vector-icons/Ionicons";
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from "react-navigation";

import StartScreen from "../screens/StartScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import MealsScreen from "../screens/MealsScreen";
import RecipeScreen from "../screens/RecipeScreen";
import FiltersScreen from "../screens/FiltersScreen";

import Colors from "../templates/Colors";

const defaultSettings = {
  headerTitle: 'Unnamed Screen',
  headerTintColor: Colors.mainColor,
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  }
}

const StackNavigation = createStackNavigator({
  start: {
    screen: StartScreen,
    },
  meals: MealsScreen,
  recipe: RecipeScreen,
}, {
  defaultNavigationOptions: defaultSettings
});

const FavouritesStackNavigator = createStackNavigator({
  favourites: {
    screen: FavouritesScreen,
    navigationOptions: {
      headerTitle: 'Favourites'
    }
  },
  recipe: RecipeScreen,
}, {
  defaultNavigationOptions: defaultSettings
});

const Navigation = createBottomTabNavigator({
    all: {
      screen: StackNavigation,
      navigationOptions: {
        title: 'ALL',
        tabBarIcon: tabInfo => <Ionicons
          name='ios-restaurant'
          size={25}
          color={tabInfo.tintColor}
        />

      }
    },
    favourites: {
      screen: FavouritesStackNavigator,
      navigationOptions: {
        title: 'FAVOURITES',
        tabBarIcon: tabInfo => <Ionicons
          name='ios-star'
          size={25}
          color={tabInfo.tintColor}
        />
      }
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: 'open-sans-bold'
      }
    }
  });

const FiltersScreenStack = createStackNavigator({
  filter:  FiltersScreen
}, {
  defaultNavigationOptions: defaultSettings
})

const DrawerNavigator = createDrawerNavigator({
  Meals: {
    screen: Navigation,

  },
  Filters: {
    screen: FiltersScreenStack,
  }
}, {
  contentOptions: {
    activeTintColor: Colors.accentColor,
    labelStyle: {
      fontFamily: 'open-sans-bold'
    }
  }
});

export default createAppContainer(DrawerNavigator);