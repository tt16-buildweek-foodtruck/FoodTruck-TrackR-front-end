import React from "react";
import { Route } from "react-router-dom";

import PrivateRoute from "./components/privateServices/PrivateRoute";
import Navbar from "./components/navbar/Navbar";
import LoginForm from "./components/forms/LoginForm";
import Footer from "./components/footer/Footer";
import FoodTruck from "./components/foodTruck/FoodTruck";
import TruckDashboard from "./components/operatorDashboard/TruckDashboard";
import SignUpForm from "./components/forms/SignUpForm";
import Home from "./components/home/Home";
import AddFoodTruck from "./components/foodTruck/AddFoodTruck";
import "./css/App.css";

function App() {
	return (
		<div className="App">
			<Navbar />
			<PrivateRoute path="/foodtruck" component={FoodTruck} />;
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
			<Route exact path="/" component={Home} />
			<Footer />
		</div>
	);
}

export default App;
