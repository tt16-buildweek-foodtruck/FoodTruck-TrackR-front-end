/*Just an empty file structure to upload*/
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import foodtruck from "../../assets/image/foodtruck.jpeg";
import "../../css/Loginform.css";

const initialState = {
	username: "",
	password: "",
	isOperator: false,
	error: "",
};

function LoginFormRewrite() {
	const [login, setLogin] = useState(initialState);
	// const [details, setDetails] = useState({});
	const { push } = useHistory();

	const handleChange = (e) => {
		setLogin({ ...login, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		axiosWithAuth()
			.post("api/auth/login", login)
			.then((res) => {
				window.localStorage.setItem("token", res.data.token);
				window.localStorage.setItem("isOperator", res.data.isOperator);
				window.localStorage.setItem("user", res.data.loggedInUserId);
				push("/foodtruck");
				// setDetails({
				// 	isOperator: res.data.isOperator,
				// 	userID: res.data.loggedInUserId,
				// });
			})
			.catch((err) => {
				setLogin(err);
			});
		// props.fetchUser(login, details);
	};

	return (
		<div className="login_Div">
			<div className="food_Truck_Img_Div">
				<img src={foodtruck} alt="Vendor with Fish & Chips truck" />
			</div>
			<div className="input_Area">
				<form onSubmit={handleSubmit}>
					<h1> Already A Member ???</h1>
					<span>Login to Your Account</span>
					<div>
						<label>Username: </label>
						<input
							name="username"
							type="text"
							value={login.username}
							onChange={handleChange}
						/>
					</div>
					<div>
						<label>Password: </label>
						<input
							name="password"
							type="text"
							value={login.password}
							onChange={handleChange}
						/>
					</div>

					<div className="button_Div">
						<button>Login</button>
						<h2>Get Signed Up Today</h2>
						<button>Sign Up</button>
					</div>
				</form>
			</div>
		</div>
	);
}
const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};

export default connect(mapStateToProps)(LoginFormRewrite);

//{ fetchUser }  -- breaking mapStateToProps so this renders.
