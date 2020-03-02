import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Platform, Switch } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

const FilterSwitch = props => {
	return (
		<View style={styles.filterContainer}>
			<Text>{props.title}</Text>
			<Switch
				trackColor={{
					true: Colors.primary
				}}
				thumbColor={Platform.OS === "android" ? Colors.primary : "#fff"}
				{...props}
			/>
		</View>
	);
};

const FilterScreen = props => {
	const [isGlutenFree, setIsGlutenFree] = useState(false);
	const [isLactoseFree, setIsLactoseFree] = useState(false);
	const [isVegan, setIsVegan] = useState(false);
	const [isVegetarian, setIsVegetarian] = useState(false);

	// to be accessible outside of 'FilterScreen', not necessary in this case though
	/*useEffect(() => { 
    props.navigation.setParams({ save: saveFilters})
  }, [saveFilters]);*/

	props.navigation.setOptions({
		title: "Filter Meals",
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title="Save"
					iconName={Platform.OS === "android" ? "md-save" : "ios-save"}
					onPress={saveFilters}
				/>
			</HeaderButtons>
		),
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

	// with 'useCallback', the function will recreate only if
	// one of the dependencies actually changed its values
	// possibly avoiding an infinite loop, usually used together with useEffect
	const saveFilters = useCallback(() => {
		const appliedFilters = {
			glutenFree: isGlutenFree,
			lactoseFree: isLactoseFree,
			vegan: isVegan,
			vegetarian: isVegetarian
		};

		console.log(appliedFilters);
	}, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Available Filters / Restrictions</Text>
			<FilterSwitch
				title="Gluten-free"
				value={isGlutenFree}
				onValueChange={newValue => setIsGlutenFree(newValue)}
			/>
			<FilterSwitch
				title="Lactose-free"
				value={isLactoseFree}
				onValueChange={newValue => setIsLactoseFree(newValue)}
			/>
			<FilterSwitch
				title="Vegan"
				value={isVegan}
				onValueChange={newValue => setIsVegan(newValue)}
			/>
			<FilterSwitch
				title="Vegetarian"
				value={isVegetarian}
				onValueChange={newValue => setIsVegetarian(newValue)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center"
	},
	title: {
		fontFamily: "open-sans-bold",
		fontSize: 22,
		margin: 20,
		textAlign: "center"
	},
	filterContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "80%",
		marginVertical: 15
	}
});

export default FilterScreen;
