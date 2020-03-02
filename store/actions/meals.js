// constants, actions
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const SET_FILTERS = "SET_FILTERS";

// action creator, used when a favorite is toggled,
// gets the id of it
export const toggleFavorite = id => {
	// return object with the action type and data wanted(payload)
	return {
		type: TOGGLE_FAVORITE,
		mealId: id
	};
};

// filterSettings is an object containing my toggles filtered options
export const setFilter = filtersSettings => {
	return { type: SET_FILTERS, filters: filtersSettings };
};
