import React from "react";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealScreen = props => {
  const catId = props.route.params.categoryId;

  const selectedCategory = CATEGORIES.find(category => category.id === catId);

  // return all the meals wich have that category included
  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  props.navigation.setOptions({
    title: selectedCategory.title
    /*
		headerStyle: {
			backgroundColor: Platform.OS === "android" ? selectedCategory.color : "#fff"
		},
		headerTintColor: Platform.OS === "android" ? "#000" : selectedCategory.color
		*/
  });

  return <MealList data={displayedMeals} nav={props.navigation} />;
};

export default CategoryMealScreen;
