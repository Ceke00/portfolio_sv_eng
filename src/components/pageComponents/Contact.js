import React from 'react'
import { RxOpenInNewWindow } from "react-icons/rx";
import atlogo from "./../../images/at_only_new_300.svg";
import atlogo_s from "./../../images/at_only_new_270.svg";
import "./Contact.css"

function Contact() {
  return (
		<>
			<section id="contact" tabIndex="-1">
				<div>
					<h2>Kontakt</h2>
					<div className="intro row">
						<p className="intro-text">
							Kontakta mig via{" "}
							<a
								href="https://www.linkedin.com/in/cecilia-egevad/"
								target="_blank"
								rel="noreferrer"
								tabIndex="0">
								min LinkedIn-sida <RxOpenInNewWindow aria-label="Öppnas i nytt fönster" />
							</a>
						</p>
						<div className="img" data-aos="zoom-in" data-aos-delay="500">
							 <picture>
								<source media="(min-width:340px)" srcSet={atlogo} />
								<img src={atlogo_s} alt="Cecilia Egevads logotyp är ett snabel-a som ser handritat ut." />
							</picture>
							
						</div>
					</div>
				</div>
				<div className="copy"> &copy; Cecilia Egevad, 2024</div>
			</section>
		</>
  );
}

export default Contact;