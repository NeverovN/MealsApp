import React from "react";
import {Text} from "react-native";
import {MEALS_RECIPE} from "../data/MEALS_DATA";
import MealsList from "../components/MealsList";

const FavouritesScreen = props => {

  const filteredMeals = MEALS_RECIPE.filter(meal => true);


  return <MealsList navigation={props.navigation} listData={filteredMeals}/>;
}

export default FavouritesScreen;