/*Just an empty file structure to upload*/
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import React, { Component } from "react";
import { fetchUser } from "../../actions/index";
import foodtruck from "../../assets/image/foodtruck.jpeg";
import "../../css/Loginform.css";

class LoginForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			password: "",
			isOperator: false,
			user: {},
			error: "",
		};
	}

	handleChange = (event) => {
		this.setState({ ...this.state, [event.target.name]: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();

		const login_Info = {
			username: this.state.username,
			password: this.state.password,
		};

		axiosWithAuth()
			.post("api/auth/login", login_Info)
			.then((res) => {
				window.localStorage.setItem("token", res.data.token);
				this.setState({
					user: {
						isOperator: res.data.isOperator,
						userID: res.data.loggedInUserId,
					},
				});
				// this.props.fetchUser(this.state.user);
				// window.location = "/foodtruck";
			})
			.catch((err) => {
				this.setState(err);
			});
	};

	render() {
		const { username, password } = this.state;
		return (
			<div className="login_Div">
				<div className="food_Truck_Img_Div">
					<img src={foodtruck} alt="Vendor with Fish & Chips truck" />
				</div>
				<div className="input_Area">
					<form onSubmit={this.handleSubmit}>
						<h1> Already A Member ???</h1>
						<span>Login to Your Account</span>
						<div>
							<label>Username: </label>
							<input
								name="username"
								type="text"
								value={username}
								onChange={this.handleChange}
							/>
						</div>
						<div>
							<label>Password: </label>
							<input
								name="password"
								type="text"
								value={password}
								onChange={this.handleChange}
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
}

export default LoginForm;
