import React, { Component } from "react";
import "../../css/Home.css";

class Home extends Component {
	render() {
		return (
			<div>
				<div className="underNav_Banner">
					<h1 className="first_H1">Hungry Yet?</h1>
					<p className="home_P">
						Come Get <span className="home_Span">Fat</span>
					</p>
					<p className="home_P">
						<span className="home_Span">And</span> Possibly Food Poisoning
					</p>
				</div>
			</div>
		);
	}
}
export default Home;
