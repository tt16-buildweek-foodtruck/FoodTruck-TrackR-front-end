import {
	FETCH_TRUCK,
	FETCH_TRUCK_SUCCESS,
	FETCH_TRUCK_FAILURE,
} from "../actions/menuActions";

export const initialState = {
    isFetching: false,
    truck: {},
    error: ''

};

export const truckReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_TRUCK:
			return {
				...state,
				isFetching: true,
			};
		case FETCH_TRUCK_SUCCESS:
			return {
				...state,
				isFetching: false,
				truck: action.payload,
			};
		case FETCH_TRUCK_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
