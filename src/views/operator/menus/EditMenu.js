import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../../utils/axiosWithAuth";
import { v4 as uuid } from "uuid";

const initialState = {
	itemName: "",
	itemDescription: "",
	itemImgURL: "",
	price: "",
};

export default function EditMenu({ itemId, truckId, item }) {
	const [formValues, setFormValues] = useState(initialState);
	// const userId = window.localStorage.getItem("user");

	useEffect(() => {
		const fetchDishes = () => {
			axiosWithAuth()
				.get(`api/menus/${itemId}`)
				.then((res) => {});
		};
		fetchDishes();
	}, []);

	const onChange = (e) => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		axiosWithAuth()
			.put(`api/menus/truck${truckId}/${itemId}`, formValues)
			.then((res) => {
				updateDish();
			});
	};

	const handleDelete = () => {
		axiosWithAuth()
			.delete(`api/menus/truck${truckId}/${itemId}`)
			.then((res) => {
				console.log(res.data);
			});
	};

	const updateDish = () => {
		axiosWithAuth()
			.get(`api/menus/${itemId}`)
			.then((res) => {});
	};

	console.log(formValues);
	return (
		<div className="operator__dashboard__menu__container">
			<form className="operator__dashboard__form" onSubmit={onSubmit}>
				<label className="operator__dashboard__form__label">Name:</label>
				<input
					name="itemName"
					id="itemName"
					type="text"
					placeholder={item.itemName}
					value={formValues.itemName}
					onChange={onChange}
					className="operator__dashboard__form__input"
				/>
				<label className="operator__dashboard__form__label">Description:</label>
				<input
					name="itemDescription"
					id="itemDescription"
					type="text"
					placeholder={item.itemDescription}
					value={formValues.itemDescription}
					onChange={onChange}
					className="operator__dashboard__form__input"
				/>
				<label className="operator__dashboard__form__label">Image URL:</label>
				<input
					name="itemImgURL"
					id="itemImgURL"
					type="text"
					placeholder={item.itemImgURL}
					value={formValues.itemImgURL}
					onChange={onChange}
					className="operator__dashboard__form__input"
				/>
				<label className="operator__dashboard__form__label">Price:</label>
				<input
					name="price"
					id="price"
					type="text"
					placeholder={item.price}
					value={formValues.price}
					onChange={onChange}
					className="operator__dashboard__form__input"
				/>
				<button className="operator__dashboard__menu__btn">Save Edits</button>
			</form>
			<button className="operator__dashboard__menu__btn" onClick={handleDelete}>
				Delete
			</button>
		</div>
	);
}
