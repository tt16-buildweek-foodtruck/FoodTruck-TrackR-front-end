// import axios from "axios";
import React, { Component } from "react";
import "../../css/SignUpForm.css";
import foodtruck2 from "../../assets/image/foodtruck2.jpeg";
class SignUpForm extends Component {
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
			<div class="signUp_Div">
				<div class="food_Truck_2_Img_Div">
					<img src={foodtruck2} />
				</div>
				<div class="input_Area">
					<form onSubmit={this.handleSubmit}>
						<h1> Become a Member Today</h1>
						<span>Sign Up for An Account</span>
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
						<div>
							<label>SOMETHING ELSE: </label>
							<input
								type="text"
								value={username}
								onChange={this.handleUsernameChange}
							/>
						</div>
						<div class="sign_Up-Button_Div">
							<button>Sign Up</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default SignUpForm;
