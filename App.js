import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";

import { enableScreens } from "react-native-screens";
import Navigator from "./navigation/Navigator";

// for performance efficiency
enableScreens();

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
		<NavigationContainer>
			<Navigator />
		</NavigationContainer>
	);
}
