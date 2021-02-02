import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import OperatorFoodtruck from "../operatorDashboard/OperatorFoodTruck";
import OperatorMenu from "../operatorDashboard/OperatorMenu";
import "../../css/OperatorDashboard.css";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

export default function TruckDashboard(props) {
	const [truck, setTruck] = useState("");
	const params = useParams();

	useEffect(() => {
		fetchTruck(params.id);
	}, [params.id]);

	const fetchTruck = (id) => {
		axiosWithAuth()
			.get(`api/trucks/:${id}`)
			.then((res) => {
				setTruck(res.data);
			})
			.catch((err) => console.log(`There was an error:`, err));
	};
	return (
		<div>
			<div
				key={truck.truckId}
				id={truck.truckId}
				className="operator__dashboard__menu__container animate__animated animate__fadeInUp"
			>
				<h3 className="operator__dashboard__menu__container__itemName">
					{truck.truckName}
				</h3>
				<p className="operator__dashboard__menu__container__paragraph">
					{truck.truckLocation}
				</p>
			</div>
			<OperatorFoodtruck
				truck={truck}
				className="operator__dashboard__container__block"
			/>
			<OperatorMenu
				menu={truck.menuItems}
				className="operator__dashboard__container__block"
			/>
		</div>
	);
}
