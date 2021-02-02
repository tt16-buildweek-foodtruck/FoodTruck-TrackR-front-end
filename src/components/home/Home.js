import React, { Component } from "react";
import "../../css/Home.css";

class Home extends Component {
	render() {
		return (
			<div>
				<div class="underNav_Banner">
					<h1>Hungry Yet?</h1>
					<p>
						Come Get <span>Fat</span>
					</p>
					<p>
						<span>And</span> Possibly Food Poisening
					</p>
					<div class="anchor_Tag_DIV">
						<a href="/signup">Sign Up</a>
						<a href="/login">Log In Here</a>
					</div>
				</div>
				<div>
					<div>
						<h1></h1>
						<p></p>
					</div>
					<div></div>
				</div>
			</div>
		);
	}
}
export default Home;
