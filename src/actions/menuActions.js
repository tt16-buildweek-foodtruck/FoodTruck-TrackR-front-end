import { axiosWithAuth } from "../utils/axiosWithAuth";

export const FETCH_MENU = "FETCH_MENU";
export const FETCH_MENU_SUCCESS = "FETCH_MENU_SUCCESS";
export const FETCH_MENU_FAILURE = "FETCH_MENU_FAILURE";

export const fetchMenu = () => (dispatch) => {
	dispatch({ type: FETCH_MENU });
	// axiosWithAuth()
	// 	.get("/")
	// 	.then((res) => {
	// 		dispatch({ type: FETCH_MENU_SUCCESS, payload: dummyData });
	// 	})
	// 	.catch((err) => {
	// 		dispatch({ type: FETCH_MENU_FAILURE, payload: err });
	// 	});
};
