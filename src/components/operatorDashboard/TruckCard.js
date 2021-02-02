import React from "react";
import TruckDashboard from "./TruckDashboard";

const TruckCard = ({ truck }) => {
	return (
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
	);
};

export default TruckCard;
