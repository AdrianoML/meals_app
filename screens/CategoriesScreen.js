import React from "react";

import {
	StyleSheet,
	FlatList,
	View,
	Text,
	TouchableOpacity
} from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = props => {
	const navigateToMealScreen = id => {
		props.navigation.navigate("categoryMealScreen", {
			categoryId: id
		});
	};

	const renderGridItem = itemData => {
		return (
			<CategoryGridTile
				id={itemData.item.id}
				title={itemData.item.title}
				color={itemData.item.color}
				select={navigateToMealScreen.bind(this, itemData.item.id)}
			/>
		);
	};

	return (
		// it can have columns
		<FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	}
});

export default CategoriesScreen;
