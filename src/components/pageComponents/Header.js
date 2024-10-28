import React from "react";
import "./Header.css";
import Button from "./Button";

function Header() {
	return (
		<header id="header" tabIndex="-1">
			<div id="header-background">
				<div id="header-content">
					<h1>
						<span id="cecilia">Cecilia Egevad</span>
						<span id="webb"> Webbutvecklare med bred högskoleexamen</span>
					</h1>
					<div className="buttons">
						<Button text="Om mig" anchor="about" down={true} />
						<Button text="Portfolio" anchor="portfolio" down={true} />
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
