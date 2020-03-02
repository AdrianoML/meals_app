import React from "react";
import { useSelector } from "react-redux"; // useSelector hook is used in this case, instead of connect(which is for React.Component)
import { View, StyleSheet } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";
import DefaultText from "../components/DefaultText";

const CategoryMealScreen = props => {
	const catId = props.route.params.categoryId;

	// state(global, in App.js).meals(reducer name, set globally).filteredMeal(the property wanted)
	const availableMeals = useSelector(state => state.meals.filteredMeals); // intead of state.meals.meals

	const selectedCategory = CATEGORIES.find(category => category.id === catId);

	// return all the meals wich have that category included
	const displayedMeals = availableMeals.filter(
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

	return displayedMeals.length > 0 ? (
		<MealList data={displayedMeals} nav={props.navigation} />
	) : (
		<View style={styles.fallbackText}>
			<DefaultText>Sorry, no meals found, try changing the filters.</DefaultText>
		</View>
	);
};

const styles = StyleSheet.create({
	fallbackText: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	}
});

export default CategoryMealScreen;
