import React, { useState } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import { v4 as uuid } from "uuid";

const initialState = {
	itemName: "",
	itemDescription: "",
	itemImgURL: "",
	price: "",
};

export default function EditMenu({ itemId, item, toggleEdit }) {
	const userId = window.localStorage.getItem("user");

	console.log("edit item", item);
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
				<button
					onClick={toggleEdit}
					className="operator__dashboard__menu__btn--delete"
				>
					Edit
				</button>
				<button className="operator__dashboard__menu__btn--delete">
					Delete
				</button>
			</div>
		</div>
	);
}
