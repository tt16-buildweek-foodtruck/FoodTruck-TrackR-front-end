import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { dummyData } from "../../constants/dummyMenuData";

export default function OperatorFoodtruck() {
	const userId = "";
	const truckId = "";
	const { push } = useHistory();

	const fakedData = dummyData[1];

	const handleViewTruck = () => {};

	const editTruck = () => {
		axiosWithAuth()
			.post(`https://tt16-food-truck-api.herokuapp.com/api/trucks/user${userId}/`)
			.then((res) => {
				console.log("POST FOOD TRUCK RES: ", res);
				push("/update-truck/${}");
			})
			.catch((err) => {
				console.log("POST FOOD TRUCK ERROR: ", err);
			});
		const deleteTruck = (event) => {
			event.preventDefault();
			axiosWithAuth()
				.delete(`https://tt16-food-truck-api.herokuapp.com/api/trucks/user${userId}/${truckId}`)
				.then((res) => {
					console.log("DELETE FOOD TRUCK RES: ", res);
					push("/operator-dashboard");
				})
				.catch((err) => {
					console.log("DELETE FOOD TRUCK ERROR: ", err);
				});
		};
	};

	return (
		<div className="operator__dashboard__menu ">
			<h3 className="operator__dashboard__menu__title">
				{fakedData.truckName}
			</h3>
			<div className="buttons">
				<button className="operator__dashboard__menu__btn">Edit</button>
				<button className="operator__dashboard__menu__btn">Delete</button>
			</div>
		</div>
	);
}
