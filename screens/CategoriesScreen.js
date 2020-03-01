import React from "react";

import { FlatList, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import HeaderButton from "../components/HeaderButton";

const CategoriesScreen = props => {
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

export default CategoriesScreen;
