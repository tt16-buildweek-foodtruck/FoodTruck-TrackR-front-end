import React, {useState, useEffect} from "react";
import { useParams, useHistory } from "react-router-dom";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

export default function OperatorFoodtruck({userId}) {
	const {truckId}= useParams();
	const { push } = useHistory();
	const [truck, setTruck] = useState({});

	useEffect(() => {
		axiosWithAuth()
		.get(`api/trucks/${truckId}`)
		.then(res => {
			console.log('GET TRUCK RES: ', res.data)
			setTruck(res.data.data)
		})
		.catch(err => {
			console.log('GET TRUCK ERROR: ', err)
		})
	}, [])

	const editTruck = () => {
		axiosWithAuth()
			.post(`https://tt16-food-truck-api.herokuapp.com/api/trucks/user${userId}/`)
			.then((res) => {
				console.log("POST FOOD TRUCK RES: ", res);
				push("/update-truck/${}");
			})
			.catch((err) => {
				console.log("POST FOOD TRUCK ERROR: ", err);
			});
		const deleteTruck = (event) => {
			event.preventDefault();
			axiosWithAuth()
				.delete(`https://tt16-food-truck-api.herokuapp.com/api/trucks/user${userId}/${truckId}`)
				.then((res) => {
					console.log("DELETE FOOD TRUCK RES: ", res);
					push("/operator-dashboard");
				})
				.catch((err) => {
					console.log("DELETE FOOD TRUCK ERROR: ", err);
				});
		};
	};

	return (
		<div className="operator__dashboard__menu ">
			<h3 className="operator__dashboard__menu__title">
				{truck.truckName}
			</h3>
			<img src={truck.truckImgURL} />
			<div className="buttons">
				<button className="operator__dashboard__menu__btn">Edit</button>
				<button className="operator__dashboard__menu__btn">Delete</button>
			</div>
		</div>
	);
}
