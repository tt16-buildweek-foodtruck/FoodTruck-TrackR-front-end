import React from "react";

const MenuItem = (menuItem) => {
	return (
		<div className="menu__block__container">
			<h3 className="menu__block__title">{menuItem.menuItem.itemName}</h3>
			<p className="menu__block__paragraph">
				{menuItem.menuItem.itemDescription}
			</p>
			<p className="menu__block__price">$ {menuItem.menuItem.itemPrice}</p>
		</div>
	);
};

export default MenuItem;
