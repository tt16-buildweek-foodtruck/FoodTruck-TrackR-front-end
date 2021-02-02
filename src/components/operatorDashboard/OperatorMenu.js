import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const initialState = {
	itemName: "",
	itemDescription: "",
	itemPrice: "",
};

export default function OperatorMenu({ menu }) {
	const [edit, setEdit] = useState(false);

	const menuEdits = () => {
		return setEdit(!edit);
	};

	return (
		<div className="operator__dashboard__menu">
			<button onClick={menuEdits} className="operator__dashboard__menu__btn">
				Edit the Menu
			</button>
			{edit === true ? (
				menu.map((item) => {
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
