import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./components/privateServices/PrivateRoute";
import Navbar from "./components/navbar/Navbar";
import LoginFormRewrite from "./components/forms/LoginFormRewrite";
// import LoginForm from "./components/forms/LoginForm";
import Footer from "./components/footer/Footer";
import FoodTruck from "./components/foodTruck/FoodTruck";
import TruckDashboard from "./components/operatorDashboard/TruckDashboard";
import SignUpForm from "./components/forms/SignUpForm";
import Home from "./components/home/Home";
import AddFoodTruck from "./components/foodTruck/AddFoodTruck";
import "./css/App.css";

function App() {
	const userId = window.localStorage.getItem("user");

	return (
		<div className="App">
			<Navbar />
			<PrivateRoute path="/foodtruck" component={FoodTruck} />;
			<Route
				path={"/trucks/:truckId"}
				render={(props) => {
					return <TruckDashboard {...props} userId={userId} />;
				}}
			></Route>
			<Route
				path="/add-food-truck"
				render={(props) => {
					return <AddFoodTruck {...props} />;
				}}
			></Route>
			<Route path="/login" component={LoginFormRewrite} />
			<Route path="/signup" component={SignUpForm} />
			<Route exact path="/" component={Home} />
			<Footer />
		</div>
	);
}

export default App;
