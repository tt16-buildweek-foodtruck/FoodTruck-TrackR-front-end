import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LoginForm from "./components/forms/LoginForm";
import Footer from "./components/footer/Footer";
import {FoodTruck} from "./components/foodTruck/FoodTruck";
import "./css/App.css";
import SignUpForm from "./components/forms/SignUpForm";
import Home from "./components/home/Home";
function App() {
	return (
		<div className="App">
			<Navbar />
			{/* This will be a private route once the endpoint is available. */}

			<Route path="/foodtruck" component={FoodTruck} />
			<Route path="/login" component={LoginForm} />
			<Route path="/signup" component={SignUpForm} />
			<Route path="/home" component={Home} />
			<Footer />
		</div>
	);
}

export default App;
