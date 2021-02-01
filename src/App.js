import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import FoodTruck from "./components/foodTruck/FoodTruck";
import "./css/App.css";

function App() {
	return (
		<div className="App">
			<Navbar />
			{/* This will be a private route once the endpoint is available. */}
			<Route path="/foodtruck" component={FoodTruck} />
			<Footer />
		</div>
	);
}

export default App;
