import React, { useState } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { enableScreens } from "react-native-screens";

import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryMealsScreen from "./screens/CategoryMealsScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

import Colors from "./constants/Colors";

// for performance efficiency
enableScreens();

const fetchFonts = () => {
	return Font.loadAsync({
		"open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
		"open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
	});
};

const Stack = createStackNavigator();

export default function App() {
	const [fontLoaded, setFontLoaded] = useState(false);

	// this will load if fonst haven't been loaded yet
	if (!fontLoaded)
		return (
			<AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />
		);

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerStyle: {
						backgroundColor: Platform.OS === "android" ? Colors.primary : "#fff"
					},
					headerTintColor: Platform.OS === "android" ? "#fff" : Colors.primary
				}}
			>
				<Stack.Screen
					name="categoriesScreen"
					options={{ title: "Meal Categories" }}
					component={CategoriesScreen}
				/>
				<Stack.Screen
					name="categoryMealScreen"
					options={{ title: "Meals" }}
					component={CategoryMealsScreen}
				/>
				<Stack.Screen
					name="mealDetailScreen"
					options={{ title: "Meal Details" }}
					component={MealDetailScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
