import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const initialState = {
	itemName: "",
	itemDescription: "",
	itemImgURL: "",
	price: "",
};

export default function OperatorMenu({ userId, truckId }) {
	const [edit, setEdit] = useState(false);
	const [dish, setDish] = useState(false);
	const [newDish, setNewDish] = useState(initialState);
	const [newMenu, setNewMenu] = useState([initialState]);
	const [formValues, setFormValues] = useState(initialState);

	useEffect(() => {
		const fetchMenu = () => {
			axiosWithAuth()
				.get(`api/menus/truck${truckId}`)
				.then((res) => {
					setNewMenu(res.data.data);
				});
		};
		fetchMenu();
	}, []);

	const onChange = (e) => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		axiosWithAuth()
			.post(`api/menus/truck${truckId}/`, formValues)
			.then((res) => {
				setNewDish(res.data);
				updateMenu();
			});
	};

	const updateMenu = () => {
		axiosWithAuth()
			.get(`api/menus/truck${truckId}`)
			.then((res) => {
				setNewMenu(res.data.data);
			});
	};

	//Styling garbage

	const menuEdits = () => {
		return setEdit(!edit);
	};

	const addDish = () => {
		return setDish(!dish);
	};

	return (
		<div className="operator__dashboard__menu">
			<h3 className="operator__dashboard__menu__title">Menu Options:</h3>
			<div className="operator__dashboard__menu__btn-row">
				<button onClick={addDish} className="operator__dashboard__menu__btn">
					Add a New Dish
				</button>
				<button onClick={menuEdits} className="operator__dashboard__menu__btn">
					Edit the Menu
				</button>
				<button className="operator__dashboard__menu__btn">Save Changes</button>
			</div>
			{/* if dish flag is true, render add new dish form and create functionality */}
			{dish === true ? (
				<div>
					<form onSubmit={onSubmit} className="operator__dashboard__form">
						<label className="operator__dashboard__form__label">Name:</label>
						<input
							name="itemName"
							type="text"
							id="itemName"
							placeholder="Enter dish's name"
							className="operator__dashboard__form__input"
							onChange={onChange}
							value={formValues.itemName}
						/>
						<label className="operator__dashboard__form__label">
							Description:
						</label>
						<input
							name="itemDescription"
							type="text"
							id="itemDescription"
							placeholder="Enter dish's description"
							className="operator__dashboard__form__input"
							onChange={onChange}
							value={formValues.itemDescription}
						/>
						<label className="operator__dashboard__form__label">
							Item Image
						</label>
						<input
							name="itemImgURL"
							type="text"
							id="itemImgURL"
							placeholder="Enter an image URL"
							className="operator__dashboard__form__input"
							onChange={onChange}
							value={formValues.itemImgURL}
						/>
						<label className="operator__dashboard__form__label">Price:</label>
						<input
							name="price"
							type="number"
							id="price"
							placeholder="Enter dish's sell price"
							className="operator__dashboard__form__input"
							onChange={onChange}
							value={formValues.price}
						/>
						<button className="operator__dashboard__menu__btn">
							Add to Menu
						</button>
					</form>
				</div>
			) : (
				// If dish != true, render the form for spacing but make it invisible.
				<div>
					<form onSubmit={onSubmit} className="operator__dashboard__form">
						<label className="operator__dashboard__form__label invisible">
							Name:
						</label>

						<label className="operator__dashboard__form__label invisible">
							Description:
						</label>

						<label className="operator__dashboard__form__label invisible">
							Price:
						</label>
						<button className="operator__dashboard__menu__btn invisible">
							Add to Menu
						</button>
					</form>
				</div>
			)}
			{/* if edit flag it true, render the menu and allow edit/delete functionality */}
			{edit === true ? (
				newMenu.map((item) => {
					return (
						<div key={uuid()} className="operator__dashboard__menu__container">
							<p className="operator__dashboard__menu__container__itemName">
								{item.itemName}
							</p>
							<p className="operator__dashboard__menu__container__paragraph">
								{item.itemDescription}
							</p>
							<div className="operator__dashboard__menu__container__price--wrapper">
								<p className="operator__dashboard__menu__container__price">
									{item.price}
								</p>
								<button className="operator__dashboard__menu__btn--delete">
									Delete
								</button>
							</div>
						</div>
					);
				})
			) : (
				<div className="closed">{""}</div>
			)}
		</div>
	);
}
