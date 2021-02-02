import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/Navbar.css";

const Nav = () => {
	const logOut = () => {
		window.localStorage.removeItem("token");
		window.location = "/login";
	};

	return (
		<div className="Navbar__container">
			<header>
				<nav id="hnavbuttons">
					<NavLink
						className="Navbar__container__links "
						activeClassName="active"
						to="/"
					>
						Home
					</NavLink>
					<NavLink
						className="Navbar__container__links "
						activeClassName="active"
						to="/signup"
					>
						Sign Up
					</NavLink>
					<NavLink
						className="Navbar__container__links "
						activeClassName="active"
						to="/login"
					>
						Log In
					</NavLink>
					<NavLink
						className="Navbar__container__links "
						activeClassName="active"
						to="/foodtruck"
					>
						Food Trucks
					</NavLink>
					<div className="Navbar__container__button_container">
						<button className="Navbar__container__button" onClick={logOut}>
							Sign Out
						</button>
					</div>
					{/* I'd suggest putting the login form here */}
				</nav>
			</header>
		</div>
	);
};

export default Nav;
