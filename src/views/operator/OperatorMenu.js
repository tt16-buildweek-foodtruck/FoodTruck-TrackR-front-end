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
	const [item, setItem] = useState("");
	const [message, setMessage] = useState("");
	const [newMenu, setNewMenu] = useState([initialState]);
	const [formValues, setFormValues] = useState(initialState);
	const [editFormValues, setEditFormValues] = useState(initialState);

	useEffect(() => {
		const fetchMenu = () => {
			axiosWithAuth()
				.get(`api/menus/truck${truckId}`)
				.then((res) => {
					setNewMenu(res.data.data);
				});
		};
		fetchMenu();
	}, [truckId]);

	//Add Dish Form
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

	//Edit Dish Form
	const handleChange = (e) => {
		setEditFormValues({ ...editFormValues, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		axiosWithAuth()
			.put(`api/menus/truck${truckId}/${item}`, editFormValues)
			.then((res) => {
				updateMenu();
			});
	};

	const handleDelete = () => {
		axiosWithAuth()
			.delete(`api/menus/truck${truckId}/${item}`)
			.then((res) => {
				setMessage(res.data.message);
				updateMenu();
				setItem("");
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
			<h2 className="operator__dashboard__menu__title">Menu Options:</h2>
			<div className="operator__dashboard__menu__btn-row">
				<h2 className="operator__dashboard__menu__title">Create a New Dish:</h2>
			</div>
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
				<h2 className="operator__dashboard__menu__title">Edit Menu</h2>
				{edit === true
					? dishEdit.map((item) => {
							return (
								<div
									key={item.itemId}
									className="operator__dashboard__menu__container"
								>
									<form
										className="operator__dashboard__form"
										onSubmit={handleSubmit}
									>
										<label className="operator__dashboard__form__label">
											Name:
										</label>
										<input
											name="itemName"
											id="itemName"
											type="text"
											placeholder={item.itemName}
											value={editFormValues.itemName}
											onChange={handleChange}
											className="operator__dashboard__form__input"
										/>
										<label className="operator__dashboard__form__label">
											Description:
										</label>
										<input
											name="itemDescription"
											id="itemDescription"
											type="text"
											placeholder={item.itemDescription}
											value={editFormValues.itemDescription}
											onChange={handleChange}
											className="operator__dashboard__form__input"
										/>
										<label className="operator__dashboard__form__label">
											Image URL:
										</label>
										<input
											name="itemImgURL"
											id="itemImgURL"
											type="text"
											placeholder={item.itemImgURL}
											value={editFormValues.itemImgURL}
											onChange={handleChange}
											className="operator__dashboard__form__input"
										/>
										<label className="operator__dashboard__form__label">
											Price:
										</label>
										<input
											name="price"
											id="price"
											type="text"
											placeholder={item.price}
											value={editFormValues.price}
											onChange={handleChange}
											className="operator__dashboard__form__input"
										/>
										<button
											className="operator__dashboard__menu__btn"
											onClick={() => {
												setItem(item.itemId);
											}}
										>
											Save Edits
										</button>
									</form>
									<button
										className="operator__dashboard__menu__btn"
										onClick={() => {
											setItem(item.itemId);
											handleDelete();
										}}
									>
										Delete
									</button>
									<div>{message !== "" ? <p>{message}</p> : ""}</div>
								</div>

								// <EditMenu

								// />
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
