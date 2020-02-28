import React from "react";

import { View, Text, StyleSheet, Button } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { MEALS } from "../data/dummy-data";
import HeaderButton from "../components/HeaderButton";

const MealDetailScreen = props => {
	const meal = MEALS.find(meal => meal.id === props.route.params.mealId);

	props.navigation.setOptions({
		title: meal.title,
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title="Favorite"
					iconName="ios-star"
					onPress={() => console.log("Marked as favorite!")}
				/>
			</HeaderButtons>
		)
	});

	return (
		<View style={styles.screen}>
			<Text>{meal.title}</Text>
			<Button
				title="Go Back to Categories"
				onPress={() => props.navigation.popToTop()}
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

export default MealDetailScreen;
