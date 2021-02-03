import React, { useState } from "react";

const initialState = {
	itemName: "",
	itemDescription: "",
	itemImgURL: "",
	price: "",
};

export default function CreateMenu() {
	const [newDish, setNewDish] = useState(initialState);

	return <div></div>;
}
