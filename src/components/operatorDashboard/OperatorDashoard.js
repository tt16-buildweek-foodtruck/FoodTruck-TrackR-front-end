import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import TruckCard from "./TruckCard";
import { v4 as uuid } from "uuid";
import "../../css/OperatorDashboard.css";

const OperatorDashboard = ({ props, truck }) => {
	const { push } = useHistory();

	const handleAddTruck = () => {
		push("/add-food-truck");
	};

	return (
		<div className="operator__dashboard__container">
			<h2 className="operator__dashboard__container__title">
				Your Food Trucks
			</h2>
			<button onClick={handleAddTruck}>Add New Truck</button>
			{/* <TruckDashboard truck={truck} /> */}
			{truck.map((foodTruck) => {
				return (
					<div>
						<Link key={uuid()} to={`/trucks/${foodTruck.truckId}`}>
							<TruckCard props={props} truck={foodTruck} />
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default OperatorDashboard;
