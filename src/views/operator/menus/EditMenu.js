import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../../utils/axiosWithAuth";

const initialState = {
	itemName: "",
	itemDescription: "",
	itemImgURL: "",
	price: "",
};

export default function EditMenu({ itemId, truckId, item, setNewMenu }) {
	const [formValues, setFormValues] = useState(initialState);
	const [message, setMessage] = useState("");

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
			.then((res) => {});
	};

	const handleDelete = () => {
		axiosWithAuth()
			.delete(`api/menus/truck${truckId}/${itemId}`)
			.then((res) => {
				setMessage(res.data.message);
			});
	};

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
			<div>{message !== "" ? <p>{message}</p> : ""}</div>
		</div>
	);
}
