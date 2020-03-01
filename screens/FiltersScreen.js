import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";

const FilterScreen = props => {
  props.navigation.setOptions({
    title: "Filter Meals",
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

  return (
    <View style={styles.screen}>
      <Text>The Filter Screen</Text>
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

export default FilterScreen;