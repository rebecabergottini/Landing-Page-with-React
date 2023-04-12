import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

// create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div class="container" style={{ width: "850px" }}>
				<Jumbotron />
				<div className="row">
					<div className="col-sm-3">
						<Card />
					</div>
					<div className="col-sm-3">
						<Card />
					</div>
					<div className="col-sm-3">
						<Card />
					</div>
					<div className="col-sm-3">
						<Card />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;

