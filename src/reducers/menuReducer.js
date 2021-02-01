import {
	FETCH_MENU,
	FETCH_MENU_SUCCESS,
	FETCH_MENU_FAILURE,
} from "../actions/menuActions";

export const initialState = {
	isFetching: false,
	menuItems: [],
	customerRatings: [5, 5],
};

export const menuReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_MENU:
			return {
				...state,
				isFetching: true,
			};
		case FETCH_MENU_SUCCESS:
			return {
				...state,
				isFetching: false,
				menuItems: action.payload,
			};
		case FETCH_MENU_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
