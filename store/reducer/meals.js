import {MEALS_RECIPE} from "../../data/MEALS_DATA";
import {SET_FILTERS, TOGGLE_FAV} from "../actions/meals";

const initialState = {
  meals: MEALS_RECIPE,
  filteredMeals: MEALS_RECIPE,
  favMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAV: {
      const index = state.favMeals.findIndex(meal => meal.id === action.id);
      if (index >= 0) {
        const updatedFavMeals = [...state.favMeals];
        updatedFavMeals.splice(index, 1);
        return {...state, favMeals: updatedFavMeals};
      } else {
          const meal = state.meals.find(meal => meal.id === action.id);
          return {...state, favMeals: state.favMeals.concat(meal)}
      }
    }
    case SET_FILTERS: {
      const appliedFilters = action.filters;
      const filteredMeals = state.meals.filter(meal => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree)
          return false;
        if (appliedFilters.lactoseFree && !meal.isLactoseFree)
          return false;
        if (appliedFilters.vegan && !meal.isVegan)
          return false;
        if (appliedFilters.vegetarian && !meal.isVegetarian)
          return false;
        return true;
      });
      return {...state, filteredMeals: filteredMeals};
    }
    default: {
      return state;
    }
  }
}

export default mealsReducer;