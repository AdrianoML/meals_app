import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

import Favorites from "../screens/FavoritesScreen";

import Colors from "../constants/Colors";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const StackNavigator = props => (
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
);

const TabNavigator = props => (
	<Tab.Navigator>
		<Tab.Screen
			name="Meals"
			options={{ title: "Meal Categories" }}
			component={StackNavigator}
		/>
		<Tab.Screen
			name="Favorites"
			options={{ title: "Favorites" }}
			component={Favorites}
		/>
	</Tab.Navigator>
);

export default TabNavigator;
