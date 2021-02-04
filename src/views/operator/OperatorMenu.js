import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import EditMenu from "../operator/menus/EditMenu";

const initialState = {
	itemName: "",
	itemDescription: "",
	itemImgURL: "",
	price: "",
};

export default function OperatorMenu({ truckId }) {
	const [edit, setEdit] = useState(false);
	const [dishEdit, setDishEdit] = useState([initialState]);
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

	//Styling

	return (
		<div className="operator__dashboard__menu">
			<h3 className="operator__dashboard__menu__title">Menu Options:</h3>
			<div className="operator__dashboard__menu__btn-row"></div>
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
					<label className="operator__dashboard__form__label">Item Image</label>
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
					<button className="operator__dashboard__menu__btn" type="submit">
						Add to Menu
					</button>
				</form>

				{edit === true
					? dishEdit.map((item) => {
							return (
								<EditMenu
									key={uuid()}
									itemId={item.itemId}
									truckId={item.truckId}
									item={item}
									className="operator__dashboard__menu__container"
								/>
							);
					  })
					: ""}

				{newMenu.map((item) => {
					return (
						<div
							key={uuid()}
							id={item.itemId}
							className="operator__dashboard__menu__container"
						>
							<p className="operator__dashboard__menu__container__itemName">
								{item.itemName}
							</p>
							<p className="operator__dashboard__menu__container__paragraph">
								{item.itemDescription}
							</p>
							<div className="operator__dashboard__menu__container__price--wrapper">
								<p className="operator__dashboard__menu__container__price">
									${item.price}
								</p>
							</div>
							<button
								onClick={() => {
									setDishEdit([item]);
									setEdit(true);
								}}
								className="operator__dashboard__menu__btn"
							>
								Edit
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
}
