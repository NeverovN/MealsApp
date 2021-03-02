import React from "react";
import {MEALS_DATA} from "../data/MEALS_DATA";
import MealsList from "../components/MealsList";
import { useSelector } from "react-redux";


const MealsScreen = props => {

  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const mealsId = props.navigation.getParam('itemId');
  const mealsToDisplay = availableMeals.filter(meal =>
    meal.catId.indexOf(mealsId) >= 0
  );

  return <MealsList navigation={props.navigation} listData={mealsToDisplay}/>;
}

MealsScreen.navigationOptions = props => {
  const mealId = props.navigation.getParam('itemId');

  const meal = MEALS_DATA.find(meal => meal.id === mealId);

  return {
    headerTitle: meal.title
  };
}

export default MealsScreen;