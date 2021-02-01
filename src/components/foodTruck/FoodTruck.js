import React from "react";
import { v4 as uuid } from "uuid";
import { dummyData } from "../../constants/dummyMenuData";
import Menu from "../menu/Menu";
import "../../css/Foodtruck.css";

export default function FoodTruck() {
	return (
		<div className="foodTruck__container">
			<h1 className="foodTruck__container__title">Find a truck near you!</h1>
			{dummyData.map((truck) => {
				return (
					<div key={uuid()} className="foodTruck__container__card">
						<h3 className="foodTruck__container__card__title">
							{truck.truckName}
						</h3>
						<p className="foodTruck__container__card__location">
							We're currently: {truck.truckLocation}
						</p>
						<Menu menu={truck} />
					</div>
				);
			})}
		</div>
	);
}
