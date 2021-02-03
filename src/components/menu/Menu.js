import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchMenu } from "../../actions/menuActions";
import { dummyData } from "../../constants/dummyMenuData";
import { v4 as uuid } from "uuid";
import MenuItem from "./MenuItems";
import "../../css/Menu.css";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const Menu = ({ error, isFetching, menuItems }) => {
	const truckId = window.localStorage.getItem("user");
	const [menu, setMenu] = useState([]);

	const fetchMenu = () => {
		axiosWithAuth()
			.get(`api/menus/truck${truckId}`)
			.then((res) => {
				setMenu(res.data);
			});
	};
	fetchMenu();

	console.log(menu);
	return (
		<div>
			{isFetching === true ? (
				<div className="menu__block">
					<h3 className="menu__block__title">Grabbing menu items...</h3>
				</div>
			) : menu !== "" ? (
				<div className="menu__block">
					<h2 className="menu__block__title">Menu Options:</h2>
					{menu.menuItems.map((truckMenu) => {
						return (
							<div key={uuid()} className="menu__block__wrapper">
								<MenuItem menuItem={truckMenu} />
							</div>
						);
					})}
				</div>
			) : (
				<div className="menu__block">
					<h3 className="menu__block__title">
						There was an error: {error}. Please try again.
					</h3>
				</div>
			)}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		isFetching: state.isFetching,
		menuItems: state.menuItems,
		error: state.error,
	};
};

export default connect(mapStateToProps, { fetchMenu })(Menu);
