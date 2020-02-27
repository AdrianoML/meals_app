import React from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	TouchableNativeFeedback,
	Platform,
	ImageBackground
} from "react-native";

const MealItem = props => {
	let MealItemComponent = TouchableOpacity;

	if (Platform.OS === "android" && Platform.Version >= 21)
		MealItemComponent = TouchableNativeFeedback;

	return (
		<View style={styles.mealItem}>
			<MealItemComponent onPress={props.onSelectedMeal}>
				<View>
					<View style={{ ...styles.mealRow, ...styles.mealHeader }}>
						<ImageBackground source={{ uri: props.image }} style={styles.bgImage}>
							<View style={styles.titleContainer}>
								<Text style={styles.title} numberOfLines={1}>
									{props.title}
								</Text>
							</View>
						</ImageBackground>
					</View>
					<View style={{ ...styles.mealRow, ...styles.mealDetail }}>
						<Text>{props.duration}m</Text>
						<Text>{props.complexity.toUpperCase()}</Text>
						<Text>{props.affordability}</Text>
					</View>
				</View>
			</MealItemComponent>
		</View>
	);
};

const styles = StyleSheet.create({
	mealItem: {
		height: 200,
		width: "90%",
		backgroundColor: "#f5f5f5",
		alignSelf: "center",
		marginTop: 22,
		borderRadius: 10,
		overflow: "hidden"
	},
	bgImage: {
		width: "100%",
		height: "100%",
		justifyContent: "flex-end",

		overflow: "hidden"
	},
	mealRow: {
		flexDirection: "row"
	},
	mealHeader: {
		height: "85%"
	},
	mealDetail: {
		height: "15%",
		paddingHorizontal: 10,
		justifyContent: "space-between",
		alignItems: "center"
	},
	titleContainer: {
		backgroundColor: "rgba(0, 0, 0, .5)",
		paddingVertical: 5,
		paddingHorizontal: 12
	},
	title: {
		fontFamily: "open-sans-bold",
		fontSize: 22,
		color: "#fff",
		textAlign: "center"
	}
});

export default MealItem;
