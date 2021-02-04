import React, {useState, useEffect} from "react";
import { useParams, useHistory } from "react-router-dom";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import UpdateFoodTruck from '../operator/trucks/UpdateFoodTruck';

const initialState = {
	truckName: "",
	truckImgURL: "",
	cuisineId: 0,
	lat: null,
	long: null,
	departureTime: "",
}

export default function OperatorFoodtruck({userId, truckId}) {
	// const {truckId}= useParams();
	const { push } = useHistory();
	const [truck, setTruck] = useState({});
	const {editing, setEditing} = useState(false)

	useEffect(() => {
		axiosWithAuth()
		.get(`api/trucks/${truckId}`)
		.then(res => {
			console.log('GET TRUCK RES: ', res.data)
			const truckValues = res.data.data;
			setTruck(truckValues)
			
		})
		.catch(err => {
			console.log('GET TRUCK ERROR: ', err)
		})
	}, [])

	const editTruck = () => {
		setEditing(true)
	}

		const deleteTruck = (event) => {
			event.preventDefault();
			axiosWithAuth()
				.delete(`api/trucks/user${userId}/${truckId}`)
				.then((res) => {
					console.log("DELETE FOOD TRUCK RES: ", res);
					push("/operator-dashboard");
				})
				.catch((err) => {
					console.log("DELETE FOOD TRUCK ERROR: ", err);
				});
		};
	

	return (
		<div className="operator__dashboard__menu ">
			<h3 className="operator__dashboard__menu__title">
				{truck.truckName}
			</h3>
			<img src={truck.truckImgURL} /><br></br>

			<h3>Departure Time: {truck.departureTime}</h3>

			{editing === false ?
			(<div></div>) :
			<UpdateFoodTruck 
			userId={userId}
			truckId={truckId}
			setEditing={setEditing}
			truck={truck}
			setTruck={setTruck}
			/>}

			<div className="buttons">
				<button 
				onClick={editTruck}
				className="operator__dashboard__menu__btn">Edit</button>
				<button 
				onClick={deleteTruck}className="operator__dashboard__menu__btn">Delete</button>
			</div>
		</div>
	);
}
