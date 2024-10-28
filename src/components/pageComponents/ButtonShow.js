import React from "react";
import "./Button.css";
import { IconContext } from "react-icons/lib";
import { PiCaretDown, PiCaretUp } from "react-icons/pi";

function ButtonShow(props) {
	const isDown = props.down;
	const handleKeyDown = (event) => {
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			event.target.click();
		}
	};
	return (
		<IconContext.Provider value={{ className: "react-icons" }}>
			<button
				className="button"
				tabIndex="0"
				onClick={props.onClick}
				onKeyDown={handleKeyDown}
				aria-controls="accordion-content"
				aria-expanded={!isDown} >
				{props.text}
				{isDown ? (
					<PiCaretDown aria-hidden={true} />
				) : (
					<PiCaretUp aria-hidden={true} />
				)}
			</button>
		</IconContext.Provider>
	);
}

export default ButtonShow;
