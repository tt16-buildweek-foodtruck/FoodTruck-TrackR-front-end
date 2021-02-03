import axios from "axios";
import React, { Component } from "react";
import "../../css/SignUpForm.css";
import foodtruck2 from "../../assets/image/foodtruck2.jpeg";
class SignUpForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			password: "",
			email: "",
			isOperator: false,
		};
	}

	handleCheckboxChange = (event) => {
		this.setState({
			isOperator: event.target.checked,
		});
	};
	handleChange = (event) => {
		this.setState({ ...this.state, [event.target.name]: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const register_Info = {
			username: this.state.username,
			password: this.state.password,
			email: this.state.email,
		};

		if (this.state.isOperator === false) {
			axios
				.post(
					"https://tt16-food-truck-api.herokuapp.com/api/auth/register-user",
					register_Info
				)
				.then((res) => {
					window.location = "/login";
				})
				.catch((err) => {
					// console.log(err.error.message || err.error.recived, err);
				});
		} else {
			axios
				.post(
					"https://tt16-food-truck-api.herokuapp.com/api/auth/register-operator",
					register_Info
				)
				.then((res) => {
					window.location = "/login";
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};
	render() {
		const { email, username, password } = this.state;
		return (
			<div className="signUp_Div">
				<div className="food_Truck_2_Img_Div">
					<img
						src={foodtruck2}
						alt="Chef preparing food for a small crowd in a stall"
					/>
				</div>
				<div className="input_Area">
					<form onSubmit={this.handleSubmit}>
						<h1> Become a Member Today</h1>
						<span>Sign Up for An Account</span>
						<div>
							<input
								type="checkbox"
								className="user_Selector_Button"
								name="isOperator"
								checked={this.state.isOperator}
								onChange={this.handleCheckboxChange}
							/>
							Operator
							<br />
						</div>
						<div>
							<label>Email: </label>
							<input
								name="email"
								type="text"
								value={email}
								onChange={this.handleChange}
							/>
						</div>
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
						<div className="sign_Up-Button_Div">
							<button>Sign Up</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default SignUpForm;
