import React from "react";
import {MEALS_DATA, MEALS_RECIPE} from "../data/MEALS_DATA";
import MealsList from "../components/MealsList";


const MealsScreen = props => {



  const mealsId = props.navigation.getParam('itemId');
  const mealsToDisplay = MEALS_RECIPE.filter(meal =>
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