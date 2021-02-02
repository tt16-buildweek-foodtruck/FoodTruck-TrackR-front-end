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

	handleChange = (event) => {
		this.setState({ ...this.state, [event.target.name]: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const login_Info = {
			username: this.state.username,
			password: this.state.password,
		};
		console.log("logininfo", login_Info);

		axios
			.post(
				"https://tt16-food-truck-api.herokuapp.com/api/auth/login",
				login_Info
			)
			.then((res) => {
				console.log(res);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
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
