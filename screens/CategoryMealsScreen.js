import React from "react";

import { View, Text, StyleSheet, Platform, FlatList } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const CategoryMealScreen = props => {
	const catId = props.route.params.categoryId;

	const selectedCategory = CATEGORIES.find(category => category.id === catId);

	// return all the meals wich have that category included
	const displayedMeals = MEALS.filter(
		meal => meal.categoryIds.indexOf(catId) >= 0
	);

	props.navigation.setOptions({
		title: selectedCategory.title,
		headerStyle: {
			backgroundColor: Platform.OS === "android" ? selectedCategory.color : "#fff"
		},
		headerTintColor: Platform.OS === "android" ? "#000" : selectedCategory.color
	});

	const navigateToMealDetailScreen = id => {
		props.navigation.navigate("mealDetailScreen", {
			mealId: id
		});
	};

	const renderMealItem = itemData => {
		return (
			<MealItem
				title={itemData.item.title}
				duration={itemData.item.duration}
				complexity={itemData.item.complexity}
				affordability={itemData.item.affordability}
				image={itemData.item.imageUrl}
				onSelectedMeal={navigateToMealDetailScreen.bind(this, itemData.item.id)}
			/>
		);
	};

	return (
		<View style={styles.screen}>
			<FlatList
				style={{ width: "100%" }}
				data={displayedMeals}
				renderItem={renderMealItem}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	}
});

export default CategoryMealScreen;
