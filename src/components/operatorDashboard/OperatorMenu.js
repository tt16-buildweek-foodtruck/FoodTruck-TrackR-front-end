import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { dummyData } from "../../constants/dummyMenuData";

const initialState = {
	itemName: "",
	itemDescription: "",
	itemPrice: "",
};

export default function OperatorMenu(props) {
	const [edit, setEdit] = useState(false);
	const [dish, setDish] = useState(false);
	const [newMenu, setNewMenu] = useState([initialState]);

	useEffect(() => {
		// setNewMenu(props.menu);
		updateMenu();
	}, []);

	const menuEdits = () => {
		return setEdit(!edit);
	};

	const addDish = () => {
		return setDish(!dish);
	};

	const updateMenu = (menu) => {
		// setNewMenu(props.menu);
		setNewMenu(dummyData[1].menuItems);
	};

	console.log(dummyData[0]);
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
			{dish === true ? (
				<div>
					<form className="operator__dashboard__form">
						<label className="operator__dashboard__form__label">Name:</label>
						<input
							name="name"
							type="text"
							id="name"
							placeholder="Enter dish's name"
							className="operator__dashboard__form__input"
						/>
						<label className="operator__dashboard__form__label">
							Description:
						</label>
						<input
							name="description"
							type="text"
							id="description"
							placeholder="Enter dish's description"
							className="operator__dashboard__form__input"
						/>
						<label className="operator__dashboard__form__label">Price:</label>
						<input
							name="price"
							type="number"
							id="price"
							placeholder="Enter dish's sell price"
							className="operator__dashboard__form__input"
						/>
						<button className="operator__dashboard__menu__btn">
							Add to Menu
						</button>
					</form>
				</div>
			) : (
				""
			)}

			{edit === true ? (
				newMenu.map((item) => {
					return (
						<div
							key={uuid()}
							className="operator__dashboard__menu__container animate__animated animate__fadeInUp"
						>
							<p className="operator__dashboard__menu__container__itemName">
								{item.itemName}
							</p>
							<p className="operator__dashboard__menu__container__paragraph">
								{item.itemDescription}
							</p>
							<div className="operator__dashboard__menu__container__price--wrapper">
								<p className="operator__dashboard__menu__container__price">
									{item.itemPrice}
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
