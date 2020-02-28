import React from "react";

import {
	TouchableOpacity,
	View,
	Text,
	StyleSheet,
	Platform,
	TouchableNativeFeedback
} from "react-native";

const CategoryGridTiles = props => {
	let GridTile = TouchableOpacity;

	if (Platform.OS === "android" && Platform.Version >= 21)
		GridTile = TouchableNativeFeedback;

	return (
		<View style={styles.gridItem}>
			<GridTile style={{ flex: 1 }} onPress={props.select}>
				<View
					style={{
						...styles.container,
						...{ backgroundColor: props.color }
					}}
				>
					<Text numberOfLines={2} style={styles.title}>
						{props.title}
					</Text>
				</View>
			</GridTile>
		</View>
	);
};

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 15,
		height: 150,

		borderRadius: 10,
		//only needed in android, in ios it won't show the shadows if set to hidden
		overflow:
			Platform.OS === "android" && Platform.Version >= 21 ? "hidden" : "visible",

		elevation: 6
	},
	container: {
		flex: 1,
		borderRadius: 10,
		padding: 15,
		justifyContent: "flex-end",
		alignItems: "flex-end",

		shadowColor: "#000",
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 10
	},
	title: {
		fontFamily: "open-sans-bold",
		fontSize: 22,
		textAlign: "right"
	}
});

export default CategoryGridTiles;
