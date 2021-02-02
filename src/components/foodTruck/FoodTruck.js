import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import OperatorDashboard from "../operatorDashboard/OperatorDashoard";
import Menu from "../menu/Menu";
import "../../css/Foodtruck.css";

const FoodTruck = ({ props, trucks }) => {
	const userId = "";
	const operator = true;
	const [renderTrucks, setRenderTrucks] = useState([]);

	// useEffect(() => {
	// 	const refreshTrucks = () => {
	// 		setRenderTrucks(trucks);
	// 	};
	// 	refreshTrucks();
	// }, [trucks]);

	return (
		<div className="foodTruck__container">
			{operator === true ? (
				<div>
					<h1 className="foodTruck__container__title">
						Welcome to Your Foodtruck Dashboard
					</h1>
					<OperatorDashboard
						truck={trucks}
						className="foodTruck__container__dashboard"
					/>
				</div>
			) : (
				<div className="foodTruck__container__card">
					<h1 className="foodTruck__container__title animate__animated animate__fadeInUp">
						Find a truck near you!
					</h1>
					{trucks.map((truck) => {
						return (
							<div key={uuid()}>
								<h3 className="foodTruck__container__card__title">
									{truck.truckName}
								</h3>
								<p className="foodTruck__container__card__location">
									We're currently: {truck.truckLocation}
								</p>
								<div>
									<Menu menu={truck} />
								</div>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default FoodTruck;
