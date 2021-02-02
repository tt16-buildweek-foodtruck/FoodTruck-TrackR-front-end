import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { dummyData } from "../../constants/dummyMenuData";
import Menu from "../menu/Menu";
import "../../css/Foodtruck.css";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import OperatorDashboard from "./OperatorDashboard";

const FoodTruck = () => {

	const {push} = useHistory()

	const getFoodTruck = () => {
		axiosWithAuth()
		.get(`api/trucks/user${userId}`)
		.then(res => {
			console.log('GET FOOD TRUCK RES: ', res)
		})
		.catch(err => {
			console.log('GET FOOD TRUCK ERROR: ', err)
		})
	}

	const editTruck = () => {
		axiosWithAuth()
		.post(`api/trucks/user${userId}/`)
		.then(res => {
			console.log('POST FOOD TRUCK RES: ', res)
			push('/update-truck/${}')
		})
		.catch(err => {
			console.log('POST FOOD TRUCK ERROR: ', err)
	})

	const deleteTruck = (event) => {
		event.preventDefault()
		axiosWithAuth()
		.delete(`api/trucks/user${userId}/${truckId}`)
		.then(res => {
			console.log('DELETE FOOD TRUCK RES: ', res)
			push('/operator-dashboard')
		})
		.catch(err => {
			console.log('DELETE FOOD TRUCK ERROR: ', err)
		})
	}


	return (
		<div className="foodTruck__container">
			<div>
				{operator === true ? <OperatorDashboard/> : ''}
			</div>
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

					<div className='buttons'>
						<button className='dashbord-button'>Operator Dashboard</button>
						<button className="edit-button">Edit</button>
						<button className="delete-button">Delete</button>
					</div>

					</div>

				);
			})}
		</div>
	);
}

export default FoodTruck
