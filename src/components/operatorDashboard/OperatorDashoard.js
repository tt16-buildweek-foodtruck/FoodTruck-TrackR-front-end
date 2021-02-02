import React from "react";
import OperatorFoodtruck from "./OperatorFoodTruck";
import OperatorMenu from "./OperatorMenu";
import "../../css/OperatorDashboard.css";

const OperatorDashboard = ({ truck }) => {
	return (
		<div className="operator__dashboard__container">
			<h2 className="operator__dashboard__container__title">Food Trucks</h2>
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
};

export default OperatorDashboard;
