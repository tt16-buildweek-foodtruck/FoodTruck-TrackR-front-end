import React from "react";
import { v4 as uuid } from "uuid";

export default function OperatorMenu({ menu }) {
	return (
		<div>
			<h2>Edit Your Menu</h2>
			{menu.map((item) => {
				return (
					<div key={uuid()}>
						<p>{item.itemName}</p>
						<p>{item.itemDescription}</p>
						<p>{item.itemPrice}</p>
					</div>
				);
			})}
		</div>
	);
}
