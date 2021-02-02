import { axiosWithAuth } from "../utils/axiosWithAuth";

export const FETCH_TRUCK = "FETCH_TRUCK";
export const FETCH_TRUCK_SUCCESS = "FETCH_TRUCK_SUCCESS";
export const FETCH_TRUCK_FAILURE = "FETCH_TRUCK_FAILURE";

export const fetchTruck = () => (dispatch) => {
	dispatch({ type: FETCH_TRUCK });
// 	axiosWithAuth()
// 		.get(`api/trucks/user/${userId}`)
// 		.then((res) => {
// 			dispatch({ type: FETCH_TRUCK_SUCCESS, payload: dummyData });
// 		})
// 		.catch((err) => {
// 			dispatch({ type: FETCH_TRUCK_FAILURE, payload: err });
// 		});
};


