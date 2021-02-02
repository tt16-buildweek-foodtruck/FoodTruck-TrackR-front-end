import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { dummyData } from "./constants/dummyMenuData";
import Navbar from "./components/navbar/Navbar";
import LoginForm from "./components/forms/LoginForm";
import Footer from "./components/footer/Footer";
import FoodTruck from "./components/foodTruck/FoodTruck";
import TruckDashboard from "./components/operatorDashboard/TruckDashboard";
import "./css/App.css";
import SignUpForm from "./components/forms/SignUpForm";
import Home from "./components/home/Home";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import AddFoodTruck from "./components/foodTruck/AddFoodTruck";

const initialState = [];

function App() {
	const [truckList, setTruckList] = useState(initialState);

	//Can save this for real endpoint
	// const getFoodTruck = () => {
	// 	axiosWithAuth()
	// 		.get(`api/trucks/user${userId}`)
	// 		.then((res) => {
	// 			console.log("GET FOOD TRUCK RES: ", res);
	// 		})
	// 		.catch((err) => {
	// 			console.log("GET FOOD TRUCK ERROR: ", err);
	// 		});
	// };

	const getTrucks = () => {
		setTruckList(dummyData);
	};

	useEffect(() => {
		getTrucks();
	}, []);

	return (
		<div className="App">
			<Navbar />

			{/* This will be a private route once the endpoint is available. */}
			<Route
				path="/foodtruck"
				render={(props) => {
					return <FoodTruck {...props} trucks={truckList} />;
				}}
			></Route>

			<Route
				path="/trucks/:id"
				render={(props) => {
					return <TruckDashboard {...props} />;
				}}
			></Route>
			<Route
				path="/add-food-truck"
				render={(props) => {
					return <AddFoodTruck {...props} />;
				}}
			></Route>
			<Route path="/login" component={LoginForm} />
			<Route path="/signup" component={SignUpForm} />
			<Route path="/home" component={Home} />
			<Footer />
		</div>
	);
}

export default App;
