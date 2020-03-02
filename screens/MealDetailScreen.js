import React from "react";

import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	Image,
	Platform
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import Colors from "../constants/Colors";
import { toggleFavorite } from "../store/actions/meals";

const MealDetailScreen = props => {
	const mealsList = useSelector(state => state.meals.meals);

	const favoriteMeal = useSelector(state =>
		// returns true if element exists into the array
		state.meals.favoriteMeals.some(meal => meal.id === props.route.params.mealId)
	);

	const dispatch = useDispatch();

	const meal = mealsList.find(meal => meal.id === props.route.params.mealId);

	const toggleFavoriteHandler = () => {
		dispatch(toggleFavorite(meal.id));
	};

	props.navigation.setOptions({
		headerStyle: {
			backgroundColor: Platform.OS === "android" ? Colors.primary : "#fff"
		},
		headerTitle: () => (
			<View style={{ width: "100%" }}>
				<Text
					numberOfLines={1}
					style={{
						fontFamily: "open-sans-bold",
						fontSize: 22,
						width: 240,
						flexWrap: "nowrap",
						color: Platform.OS === "android" ? "#fff" : Colors.primary
					}}
				>
					{meal.title}
				</Text>
			</View>
		),
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title="Favorite"
					iconName={favoriteMeal ? "ios-star" : "ios-star-outline"} // ios-star-outline
					onPress={toggleFavoriteHandler}
				/>
			</HeaderButtons>
		)
	});

	return (
		<ScrollView>
			<Image source={{ uri: meal.imageUrl }} style={styles.image} />
			<View style={styles.details}>
				<DefaultText>{meal.duration}m</DefaultText>
				<DefaultText>{meal.complexity.toUpperCase()}</DefaultText>
				<DefaultText>{meal.affordability.toUpperCase()}</DefaultText>
			</View>
			<Text style={styles.textTitle}>Ingredients</Text>

			{meal.ingredients.map(ingredient => (
				<View key={ingredient} style={styles.listItem}>
					<DefaultText>{ingredient}</DefaultText>
				</View>
			))}

			<Text style={styles.textTitle}>Steps</Text>

			{meal.steps.map(step => (
				<View key={step} style={styles.listItem}>
					<DefaultText>{step}</DefaultText>
				</View>
			))}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	textTitle: {
		fontFamily: "open-sans-bold",
		fontSize: 22,
		textAlign: "center"
	},
	details: {
		flexDirection: "row",
		padding: 15,
		justifyContent: "space-around"
	},
	image: {
		width: "100%",
		height: 200 // might use dimensions API here, perhaps hmmmm
	},
	listItem: {
		marginVertical: 5,
		marginHorizontal: 20,
		borderColor: "#ccc",
		borderWidth: 2,
		borderRadius: 4,
		padding: 10
	}
});

export default MealDetailScreen;
