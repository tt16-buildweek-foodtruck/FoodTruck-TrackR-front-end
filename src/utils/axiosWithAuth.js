import axios from "axios";

export const axiosWithAuth = () => {
	const token = localStorage.getItem("token");

	return axios.create({
		baseURL: "https://tt16-food-truck-api.herokuapp.com/",
		headers: {
			Authorization: token,
		},
	});
};
