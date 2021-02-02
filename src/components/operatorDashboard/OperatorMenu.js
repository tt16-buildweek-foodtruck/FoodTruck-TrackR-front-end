import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const initialState = {
	itemName: "",
	itemDescription: "",
	itemPrice: "",
};

export default function OperatorMenu(props) {
	console.log(props);
	const [edit, setEdit] = useState(false);
	const [dish, setDish] = useState(false);
	const [newMenu, setNewMenu] = useState([initialState]);

	const menuEdits = () => {
		return setEdit(!edit);
	};

	const addDish = () => {
		return setDish(!dish);
	};

	const updateMenu = (menu) => {
		setNewMenu(props.menu);
	};

	return (
		<div className="operator__dashboard__menu">
			<div className="operator__dashboard__menu__btn-row">
				<button onClick={menuEdits} className="operator__dashboard__menu__btn">
					Edit the Menu
				</button>
				<button onClick={addDish} className="operator__dashboard__menu__btn">
					Add a New Dish
				</button>
			</div>
			{dish === true ? (
				<div>
					<form className="operator__dashboard__form">
						<label className="operator__dashboard__form__label">Name:</label>
						<input
							name="name"
							type="text"
							id="name"
							placeholder="Enter dish name"
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
								<button className="operator__dashboard__menu__btn">
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
