import React from "react";
import MealsList from "../components/MealsList";
import { useSelector } from "react-redux";

const FavouritesScreen = props => {

  const favMeals = useSelector(state => state.meals.favMeals);

  return <MealsList navigation={props.navigation} listData={favMeals}/>;
}

export default FavouritesScreen;