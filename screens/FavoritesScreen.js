import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

import MealList from "../components/MealList";
import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";

const FavoriteScreen = props => {
	const favMeals = useSelector(state => state.meals.favoriteMeals);

	props.navigation.setOptions({
		headerLeft: () => (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title="Favorite"
					iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
					onPress={() => props.navigation.toggleDrawer()}
				/>
			</HeaderButtons>
		)
	});

	return favMeals.length > 0 ? (
		<MealList data={favMeals} nav={props.navigation} />
	) : (
		<View style={styles.fallbackContainer}>
			<DefaultText style={styles.fallbackText}>
				You don't have any favorites yet, please add some.
			</DefaultText>
		</View>
	);
};

const styles = StyleSheet.create({
	fallbackContainer: {
		flex: 1,
		justifyContent: "center"
	},
	fallbackText: {
		textAlign: "center"
	}
});

export default FavoriteScreen;
