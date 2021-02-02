import React, { useState } from "react";
import { connect } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { fetchTruck } from "../../actions/truckActions";

const initialTruckState = {
	truckName: "",
	truckImgURL: "",
	cuisineId: "",
	lat: null,
	long: null,
	departureTime: "",
};

// menu:
// [
//     {
//         itemName: '',
//         itemDescription: '',
//         itemPhotos: [],
//         itemPrice: null,
//         customerRatings: [],
//         customerRatingAvg: null
//     }
// ]

const AddFoodTruck = () => {
	const userId = "";
	const [newTruck, setNewTruck] = useState(initialTruckState);

	const { push } = useHistory();

	const handleSubmit = (event) => {
		event.preventDefault();
		axiosWithAuth()
			.post(`api/trucks/user/${userId}/`, newTruck)
			.then((res) => {
				console.log("POST NEW TRUCK: ", res);
			})
			.catch((err) => {
				console.log("NEW TRUCK ERROR: ", err);
			});
		setNewTruck({
			truckName: "",
			truckImgURL: "",
			cuisineId: "",
			lat: null,
			long: null,
			departureTime: "",
		});
		push("/foodtruck");
	};

	return (
		<div>
			<h3>Add New Truck</h3>
			<form onSubmit={handleSubmit}>
				<div>
					<h4>Fill out the information below:</h4>
					<label>
						Truck Name
						<input
							type="text"
							name="truckName"
							placeholder="Truck Name..."
							value={newTruck.truckName}
							// onChange={handleChange}
						/>
					</label>
					<label>
						Truck Photo
						<input
							type="text"
							name="truckImgURL"
							placeholder="URL of Truck Photo..."
							value={newTruck.truckImgURL}
							// onChange={handleChange}
						/>
					</label>
					<label>
						Cuisine Type
						<input
							type="text"
							name="cuisineId"
							placeholder="Cuisine Type..."
							value={newTruck.cuisineId}
							// onChange={handleChange}
						/>
					</label>
				</div>

				<div>
					<h4>Current Truck Location</h4>
					<label>
						Latitude
						<input
							type="text"
							name="lat"
							placeholder="Current Truck Latitude..."
							value={newTruck.lat}
							// onChange={handleChange}
						/>
					</label>
					<label>
						Longitude
						<input
							type="text"
							name="long"
							placeholder="Current Truck Longitude..."
							value={newTruck.long}
							// onChange={handleChange}
						/>
					</label>
					<label>
						Departure Time
						<input
							type="text"
							name="departureTime"
							placeholder="Truck Departure Time..."
							value={newTruck.departureTime}
							// onChange={handleChange}
						/>
					</label>
				</div>
				{/* <div>
                    <h4>Menu</h4>

                    <h5>Menu Item</h5>
                    <label>
                        Item Name
                        <input 
                            type='text'
                            name='itemName'
                            placeholder='Menu Item Name...'
                            value={}
                            onChange={}
                        />
                    </label>
                    <label>
                        Item Description
                        <input 
                            type='text'
                            name='itemDescription'
                            placeholder='Menu Item Description...'
                            value={}
                            onChange={}
                        />
                    </label>
                    <label>
                        Item Price
                        <input 
                            type='text'
                            name='itemPrice'
                            placeholder='Menu Item Price...'
                            value={}
                            onChange={}
                        />
                    </label>
                    
                </div> */}
				<button>Add Food Truck</button>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		truckName: state.truckName,
		truckImgURL: state.truckImgURL,
		cuisineId: state.cuisineId,
		lat: state.lat,
		long: state.long,
		departureTime: state.departureTime,
	};
};

export default connect(mapStateToProps, { fetchTruck })(AddFoodTruck);
