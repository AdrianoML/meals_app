import React from "react";

import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

const FavoriteScreen = props => (
	<MealList data={MEALS.slice(0, 2)} nav={props.navigation} />
);

export default FavoriteScreen;
