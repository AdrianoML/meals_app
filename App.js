import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import Navigator from "./navigation/Navigator";
import mealsReducer from "./store/reducers/meals";

// for performance efficiency
enableScreens();

// Redux Storage
const rootReducer = combineReducers({
	meals: mealsReducer
});

const store = createStore(rootReducer);
///

const fetchFonts = () => {
	return Font.loadAsync({
		"open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
		"open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
	});
};

export default function App() {
	const [fontLoaded, setFontLoaded] = useState(false);

	// this will load if fonst haven't been loaded yet
	if (!fontLoaded)
		return (
			<AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />
		);

	return (
		// Provider needs to wrap the entire app in order to redux work, well, globally of course
		<Provider store={store}>
			<NavigationContainer>
				<Navigator />
			</NavigationContainer>
		</Provider>
	);
}
