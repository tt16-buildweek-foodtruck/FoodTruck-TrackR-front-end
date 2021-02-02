import React from "react";
import OperatorFoodtruck from "./OperatorFoodTruck";
import OperatorMenu from "./OperatorMenu";

const OperatorDashboard = ({ truck }) => {
	return (
		<div>
			<div>
				<h2>Food Trucks</h2>
				<OperatorFoodtruck />
				<OperatorMenu menu={truck.menuItems} />
			</div>
		</div>
	);
};

export default OperatorDashboard;
