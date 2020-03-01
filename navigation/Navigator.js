import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

import Favorites from "../screens/FavoritesScreen";
import FilterScreen from "../screens/FiltersScreen";

import Colors from "../constants/Colors";

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

let Tab = createBottomTabNavigator();

if (Platform.OS === "android") Tab = createMaterialBottomTabNavigator();

const StackNavigatorFilter = props => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "#fff"
      },
      headerTintColor: Platform.OS === "android" ? "#fff" : Colors.primary
    }}
  >
    <Stack.Screen
      name="favoritesScreen"
      options={{ title: "Your Favorites" }}
      component={FilterScreen}
    />
  </Stack.Navigator>
);

const StackNavigatorFavorites = props => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "#fff"
      },
      headerTintColor: Platform.OS === "android" ? "#fff" : Colors.primary
    }}
  >
    <Stack.Screen
      name="favoritesScreen"
      options={{ title: "Your Favorites" }}
      component={Favorites}
    />
    <Stack.Screen
      name="mealDetailScreen"
      options={{ title: "Meal Details" }}
      component={MealDetailScreen}
    />
  </Stack.Navigator>
);

const StackNavigatorMeals = props => (
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
    <Stack.Screen
      name="favoriteScreen"
      options={{ title: "A Screen" }}
      component={Favorites}
    />
  </Stack.Navigator>
);

const TabNavigator = props => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: Colors.secondary
    }}
    barStyle={{ backgroundColor: Colors.primary }}
  >
    <Tab.Screen
      name="Meals"
      options={{
        title: "Meals",
        tabBarIcon: tabInfo => {
          return (
            <Ionicons name="ios-restaurant" size={25} color={tabInfo.color} />
          );
        }
      }}
      component={StackNavigatorMeals}
    />
    <Tab.Screen
      name="Favorites"
      options={{
        title: "Favorites",
        //tabBarLabel: "Favorites!!!!",
        tabBarIcon: tabInfo => {
          return <Ionicons name="ios-star" size={25} color={tabInfo.color} />;
        }
      }}
      component={StackNavigatorFavorites}
    />
  </Tab.Navigator>
);

const DrawerNavigator = props => (
  <Drawer.Navigator
    drawerContentOptions={{
      activeTintColor: Colors.secondary,
      labelStyle: {
        fontFamily: "open-sans-bold"
      }
    }}
  >
    <Drawer.Screen name="Home" component={TabNavigator} />
    <Drawer.Screen name="Filter" component={StackNavigatorFilter} />
  </Drawer.Navigator>
);

export default DrawerNavigator;
