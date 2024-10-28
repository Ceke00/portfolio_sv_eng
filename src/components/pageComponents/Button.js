import React from 'react';
import { Link } from "react-scroll";
import "./Button.css"
import { IconContext } from 'react-icons/lib';
import { PiCaretDown, PiCaretUp } from "react-icons/pi";


function Button(props) {
	/*deciding what icon to show*/
	const isDown=props.down;
	
    const handleKeyDown = (event) => {
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
				event.target.click();
			}
		}; 
  return (
		<IconContext.Provider value={{ className: "react-icons" }}>
			<Link
				role="button"
				to={props.anchor}
				spy={true}
				smooth={true}
				duration={500}
				offset={-120}
				className="button"
				tabIndex="0"
				onKeyDown={handleKeyDown}>
				{props.text}
				{isDown ? <PiCaretDown aria-hidden={true} /> : <PiCaretUp aria-hidden={true} />}
			</Link>
		</IconContext.Provider>
  );
}

export default Button