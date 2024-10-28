import React, { useState } from "react";
import "./About.css";
import Button from "./Button";
import ButtonShow from "./ButtonShow";
import Cv from "./Cv";
import { IconContext } from "react-icons/lib";
import photo from "./../../images/cecilia_egevad_300.webp";
import photo_s from "./../../images/cecilia_egevad_270.webp";
import illu from "./../../images/Cecilia_cirkel_300.webp";
import illu_s from "./../../images/Cecilia_cirkel_270.webp";
import book from "./../../images/bokuppslag_300.webp";
import book_s from "./../../images/bokuppslag_270.webp";
import {
	DiBootstrap,
	DiAngularSimple,
	DiCss3,
	DiGithubBadge,
	DiHtml5,
	DiIllustrator,
	DiJava,
	DiJqueryLogo,
	DiMongodb,
	DiPhotoshop,
	DiReact,
	DiPython,
	DiPhp,
	DiSass,
	DiWordpress,
	DiJavascript1,
	DiDotnet,
} from "react-icons/di";
import { FaFigma, FaUniversalAccess, FaDatabase, FaSearch, FaElementor, FaStar, FaLaptopMedical } from "react-icons/fa";
import { GrUserExpert } from "react-icons/gr";
import { SiAdobeindesign } from "react-icons/si";
import { TbSql, TbBrandReactNative } from "react-icons/tb";

function About() {
	const [isOpen, setIsOpen] = useState(false);
	/* console.log("isOpen: " + isOpen); */

	/*Opening and closing CV*/
	function toggleVisibility() {
		setIsOpen((isOpen) => !isOpen);
	}

	return (
		<section id="about" tabIndex="-1" aria-labelledby="sv-about">
			<h2 id="sv-about">Om mig</h2>
			<div className="intro row">
				<div className="img last col" data-aos="zoom-in" data-aos-delay="100">
					<picture>
						<source className="round-image" media="(min-width:340px)" srcSet={photo} />
						<img className="round-image" src={photo_s} alt="" />
					</picture>
				</div>
				<div className="intro-text first">
					<p>
						Jag heter Cecilia Egevad och har en bred utbildning inom webbutveckling. Sedan tidigare är jag även
						legitimerad logoped och jag brinner lite extra för att göra webben tillgänglig för alla.
					</p>
					<p>
						Nu söker jag nya utmaningar där jag kan få fortsätta växa som utvecklare. Jag är vetgirig och trivs
						med ett lösningsfokuserat arbetssätt, gärna i team.{" "}
					</p>
				</div>
			</div>
			<div className="row">
				<div>
					<h3>Karriärväxling från logoped till webbutvecklare</h3>
					<p>
						Under flera år arbetade jag som logoped inom barn- och ungdomshabiliteringen. År 2020 bestämde jag mig
						för att prova något nytt och började läsa fristående kurser inom{" "}
						<strong>grafisk design och programmering</strong>. Jag läste till exempel följande:
					</p>
					<ul>
						<li lang="en">Python</li>
						<li>JAVA</li>
						<li>Digital bildbehandling &#40;Photoshop&#41;.</li>
					</ul>
					<h3 className="space-up">Spännande kurs om digital tillgänglighet</h3>
					<p>
						År 2021 läste jag en extra givande kurs om <strong>digital tillgänglighet</strong> &ndash; Universell
						utformning av digital tillgänglighet. Kursen omfattade både praktiska och teoretiska moment inom
						områden såsom:{" "}
					</p>
					<ul>
						<li>att skriva klarspråk</li>
						<li>användarcentrerad design</li>
						<li>användartestning</li>
						<li>aktuell lagstiftning inom området.</li>
					</ul>
				</div>

				<div className="img col">
					<figure data-aos="zoom-in" data-aos-delay="100">
						<picture>
							<source className="round-image" media="(min-width:340px)" srcSet={illu} />
							<img className="round-image" alt="Leende kvinna i vatten" src={illu_s} />
						</picture>

						<figcaption className="image-text">
							Självporträtt i Illustrator från kurs i grafisk design.
						</figcaption>
					</figure>
				</div>
			</div>
			<div className="row">
				<div className="img last col center">
					<picture>
						<source media="(min-width:340px)" srcSet={book} />
						<img src={book_s} alt="" />
					</picture>

					<p className="space-y">Du kan se exempel på projekt jag skapat i min portfolio:</p>
					<Button text="Portfolio" down={true} anchor="portfolio" />
				</div>
				<div className="first">
					<h3>Högskoleexamen inom webbutveckling</h3>
					<p>
						Efter att ha läst flera fristående kurser ville jag knyta ihop säcken. Hösten 2022 började jag därför
						på programmet Webmaster &#40;120hp&#41; vid Högskolan Väst.{" "}
					</p>
					<p>
						Utbildningen är bred och innehåller alltifrån <strong> front-end och back-end till UX-design</strong>.
						Under utbildningen har jag till exempel skapat sidor med hjälp av{" "}
						<span lang="en">React, Angular</span> och <span lang="en">Vue</span>, men även designat databaser och
						skapat egna API:er.
					</p>
					<p>
						Mitt examensarbete hade titeln “Digital tillgänglighet vid svenska högskolor och universitet”. Jag och
						min samarbetspartner utförde både <strong>manuell och automatisk tillgänglighetstestning </strong>på
						alla statliga högre lärosäten i Sverige.{" "}
					</p>
				</div>
			</div>
			<div className="space-up">
				<h3>Kunskapsnivå inom olika områden</h3>
				<p>Här är en översikt över vad jag kan, uppdelat efter kunskapsnivå.</p>

				<div className=" big-comp-container">
					<IconContext.Provider value={{ className: "react-icons" }}>
						<div className="comp-container" data-aos="zoom-in" data-aos-delay="100">
							<h4>
								Goda kunskaper{" "}
								<span className="stars">
									<FaStar role="img" aria-label="Tre av tre stjärnor" />
									<FaStar aria-hidden={true} />
									<FaStar aria-hidden={true} />
								</span>
							</h4>
							<p>Inom följande områden har jag fördjupad kunskap genom arbete i flera projekt: </p>
							<div className="row-comp">
								<div className="comp">
									<DiHtml5 aria-hidden={true} /> <p>HTML 5</p>
								</div>
								<div className="comp">
									<DiCss3 aria-hidden={true} /> <p>CSS 3</p>
								</div>
								<div className="comp">
									<DiJavascript1 aria-hidden={true} /> <p>Javascript</p>
								</div>
								<div className="comp">
									<FaUniversalAccess aria-hidden={true} /> <p>Digital tillgänglighet</p>
								</div>
								<div className="comp">
									<FaFigma aria-hidden={true} /> <p>Figma</p>
								</div>
							</div>
						</div>
						<div className="comp-container" data-aos="zoom-in" data-aos-delay="100">
							<h4>
								Medel kunskaper{" "}
								<span className="stars">
									<FaStar aria-label="Två av tre stjärnor" role="img" />
									<FaStar aria-hidden={true} />
									<IconContext.Provider value={{ className: "react-icons-grey" }}>
										<FaStar aria-hidden={true} />
									</IconContext.Provider>
								</span>
							</h4>
							<p>Jag har skapat några projekt inom följande områden: </p>
							<div className="row-comp">
								<div className="comp">
									<DiReact aria-hidden={true} /> <p lang="en">React</p>
								</div>
								<div className="comp">
									<DiBootstrap aria-hidden={true} /> <p lang="en">Bootstrap</p>
								</div>
								<div className="comp">
									<FaSearch aria-hidden={true} /> <p>SEO</p>
								</div>
								<div className="comp">
									<FaDatabase aria-hidden={true} /> <p>Databaser</p>
								</div>
								<div className="comp">
									<TbSql aria-hidden={true} /> <p>SQL</p>
								</div>
								<div className="comp">
									<GrUserExpert aria-hidden={true} /> <p>Användartestning</p>
								</div>
								<div className="comp">
									<DiWordpress aria-hidden={true} /> <p lang="en">WordPress</p>
								</div>
								<div className="comp">
									<FaElementor aria-hidden={true} /> <p lang="en">Elementor</p>
								</div>
								<div className="comp">
									<DiIllustrator aria-hidden={true} /> <p lang="en">Illustrator</p>
								</div>
								<div className="comp">
									<DiPhotoshop aria-hidden={true} /> <p lang="en">Photoshop</p>
								</div>
							</div>
						</div>
						<div className="comp-container" data-aos="zoom-in" data-aos-delay="100">
							<h4>
								Grundläggande kunskaper{" "}
								<span className="stars">
									<FaStar role="img" aria-label="En av tre stjärnor" />
									<IconContext.Provider value={{ className: "react-icons-grey" }}>
										<FaStar aria-hidden={true} />
										<FaStar aria-hidden={true} />
									</IconContext.Provider>
								</span>
							</h4>
							<p>Jag har lärt mig grunderna och skapat enklare projekt inom följande områden: </p>
							<div className="row-comp">
								<div className="comp">
									<DiJava aria-hidden={true} /> <p>JAVA</p>
								</div>
								<div className="comp">
									<DiPython aria-hidden={true} /> <p>Python</p>
								</div>
								<div className="comp">
									<DiPhp aria-hidden={true} /> <p>PHP</p>
								</div>
								<div className="comp">
									<DiDotnet aria-hidden={true} /> <p>ASP.NET C#</p>
								</div>
								<div className="comp">
									<TbBrandReactNative aria-hidden={true} /> <p lang="en">React Native</p>
								</div>
								<div className="comp">
									<DiMongodb aria-hidden={true} />
									<p>MongoDB</p>
								</div>
								<div className="comp">
									<DiBootstrap aria-hidden={true} /> <p lang="en">Vue</p>
								</div>
								<div className="comp">
									<DiAngularSimple aria-hidden={true} /> <p lang="en">Angular</p>
								</div>
								<div className="comp">
									<DiJqueryLogo aria-hidden={true} /> <p lang="en">jQuery</p>
								</div>
								<div className="comp">
									<DiSass aria-hidden={true} /> <p>SCSS</p>
								</div>
								<div className="comp">
									<DiGithubBadge aria-hidden={true} /> <p lang="en">Git / Github</p>
								</div>
								<div className="comp">
									<SiAdobeindesign aria-hidden={true} role="presentation" /> <p lang="en">Indesign</p>
								</div>
							</div>
						</div>
					</IconContext.Provider>
				</div>
			</div>
			<div className="row ">
				<div className="last">
					<h3>Arbete under studietiden</h3>
					<div className="col">
						<p>
							Parallellt med studierna har jag även lärt mig mycket genom de arbeten jag haft vid sidan av. Jag
							har till exempel arbetat med undertextning och <strong>tillgänglighetsanpassning</strong> av bild-
							och textmaterial.
						</p>
						<p className="space-down">
							{" "}
							Sista året på utbildningen satt jag även med vid institutionens programråd som studentrepresentant
							vilket gav en intressant inblick i högskolans utvecklingsarbete.
						</p>
					</div>
				</div>
				<div className="img first laptop">
					<FaLaptopMedical aria-hidden={true} />
				</div>
			</div>
			{/* Button changes upon toggle */}
			<div className="space-down">
				{isOpen ? (
					<ButtonShow text="Dölj CV" down={false} onClick={toggleVisibility} />
				) : (
					<ButtonShow text="Visa CV" down={true} onClick={toggleVisibility} />
				)}
			</div>
			{/* Showing or hiding CV */}
			<div>{isOpen ? <Cv toggleVisibility={toggleVisibility} /> : ""}</div>
		</section>
	);
}

export default About;
