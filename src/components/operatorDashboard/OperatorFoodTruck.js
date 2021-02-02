import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import AddFoodTruck from "../foodTruck/AddFoodTruck";

export default function OperatorFoodtruck() {
	const userId = "";
	const truckId = "";
	const { push } = useHistory();

	const handleViewTruck = () => {};

	const editTruck = () => {
		axiosWithAuth()
			.post(`api/trucks/user${userId}/`)
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
				.delete(`api/trucks/user${userId}/${truckId}`)
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
		<div>
			<div className="buttons">
				<button className="edit-button">Edit</button>
				<button className="delete-button">Delete</button>
			</div>
		</div>
	);
}
