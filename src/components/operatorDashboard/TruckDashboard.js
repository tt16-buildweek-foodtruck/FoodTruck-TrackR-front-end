import React, { useEffect, useState } from "react";
import OperatorFoodtruck from "../operatorDashboard/OperatorFoodTruck";
import { v4 as uuid } from "uuid";
import { useParams } from "react-router-dom";
import OperatorMenu from "../operatorDashboard/OperatorMenu";
import "../../css/OperatorDashboard.css";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

export default function TruckDashboard({ userId }) {
	const { truckId } = useParams();

	const [truck, setTruck] = useState("");

	useEffect(() => {
		fetchTruck();
	}, []);

	const fetchTruck = () => {
		axiosWithAuth()
			.get(`api/menus/truck${userId}`)
			.then((res) => {
				setTruck(res.data);
			})
			.catch((err) => console.log(`There was an error:`, err));
	};

	return (
		<div className="animate__animated animate__fadeInUp">
			<div key={uuid()}>
				<h3 className="operator__dashboard__menu__container__itemName">
					{truck.truckName}
				</h3>
				<p className="operator__dashboard__menu__container__paragraph">
					{truck.truckLocation}
				</p>
			</div>
			<OperatorFoodtruck
				truck={truck}
				truckId={truckId}
				className="operator__dashboard__container__block"
			/>
			<OperatorMenu
				userId={userId}
				truckId={truckId}
				className="operator__dashboard__container__block"
			/>
		</div>
	);
}
