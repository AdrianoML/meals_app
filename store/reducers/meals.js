import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE, SET_FILTERS } from "../actions/meals";

// initial state of what I want to be available globally
const initialState = {
	meals: MEALS,
	filteredMeals: MEALS,
	favoriteMeals: [] // use something saved in a server instead of an empty array
};

const mealsReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_FAVORITE:
			// if it returns true, then it is already added, -1 signifies that it is not
			const existingIndex = state.favoriteMeals.findIndex(
				meal => meal.id === action.mealId
			);

			// already added
			if (existingIndex >= 0) {
				const favMealsCopy = [...state.favoriteMeals];

				// removing
				favMealsCopy.splice(existingIndex, 1);

				// return updated state
				return { ...state, favoriteMeals: favMealsCopy };
			} else {
				const newMeal = state.meals.find(meal => meal.id === action.mealId);

				return { ...state, favoriteMeals: state.favoriteMeals.concat(newMeal) };
			}
		case SET_FILTERS:
			const appliedFilters = action.filters;
			const updatedFilteredMeals = state.meals.filter(meal => {
				// if filter is toggled and food meets
				// the filter condition, remove it(jump over it)
				if (appliedFilters.glutenFree && !meal.isGlutenFree) return false;

				if (appliedFilters.lactoseFree && !meal.isLactoseFree) return false;

				if (appliedFilters.vegan && !meal.isVegan) return false;

				if (appliedFilters.vegetarian && !meal.isVegetarian) return false;

				return true;
			});

			return { ...state, filteredMeals: updatedFilteredMeals };
		default:
			return state;
	}
};

export default mealsReducer;
