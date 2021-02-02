/*Just an empty file structure to upload*/
import axios from "axios";
import React, { Component } from "react";
import "../../css/Loginform.css";
import foodtruck from "../../assets/image/foodtruck.jpeg";
class LoginForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			password: "",
		};
	}
	handleUsernameChange = (event) => {
		this.setState({
			username: event.target.value,
		});
	};
	handlePasswordChange = (event) => {
		this.setState({
			password: event.target.value,
		});
	};
	handleSubmit = (event) => {
		alert(`${this.state.username} ${this.state.password}`);

		event.preventDefault();
	};
	render() {
		const { username, password } = this.state;
		return (
			<div className="login_Div">
				<div className="food_Truck_Img_Div">
					<img src={foodtruck} />
				</div>
				<div className="input_Area">
					<form onSubmit={this.handleSubmit}>
						<h1> Already A Member ???</h1>
						<span>Login to Your Account</span>
						<div>
							<label>Username: </label>
							<input
								type="text"
								value={username}
								onChange={this.handleUsernameChange}
							/>
						</div>
						<div>
							<label>Password: </label>
							<input
								type="text"
								value={password}
								onChange={this.handlePasswordChange}
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
