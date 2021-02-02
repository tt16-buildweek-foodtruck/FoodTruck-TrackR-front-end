import React from "react";
import { v4 as uuid } from "uuid";
import { dummyData } from "../../constants/dummyMenuData";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import OperatorDashboard from "../operatorDashboard/OperatorDashboard";
import Menu from "../menu/Menu";
import "../../css/Foodtruck.css";

const FoodTruck = () => {
	const userId = "";
	const operator = true;

	const getFoodTruck = () => {
		axiosWithAuth()
			.get(`api/trucks/user${userId}`)
			.then((res) => {
				console.log("GET FOOD TRUCK RES: ", res);
			})
			.catch((err) => {
				console.log("GET FOOD TRUCK ERROR: ", err);
			});
	};

	return (
		<div className="foodTruck__container">
			{operator === true
				? dummyData.map((truck) => {
						return (
							<div key={uuid()}>
								<h1 className="foodTruck__container__title">
									Welcome to Your Foodtruck Dashboard
								</h1>
								<OperatorDashboard
									truck={truck}
									className="foodTruck__container__dashboard"
								/>
							</div>
						);
				  })
				: dummyData.map((truck) => {
						return (
							<div key={uuid()} className="foodTruck__container__card">
								<h1 className="foodTruck__container__title">
									Find a truck near you!
								</h1>
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
	);
};

export default FoodTruck;
