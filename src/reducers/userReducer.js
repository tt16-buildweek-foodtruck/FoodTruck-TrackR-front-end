import { FETCH_USER } from "../actions/index";

const initialState = {
	user: {},
	error: "",
};

export function userReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_USER:
			return {
				...state,
				user: action.payload,
			};
		default:
			return state;
	}
}
