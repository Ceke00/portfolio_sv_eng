import React from "react";
import "./Cv.css";
import ButtonShow from "./ButtonShow";
import { IoLanguage } from "react-icons/io5";
import { MdLanguage } from "react-icons/md";

import { FaUniversity } from "react-icons/fa";
import { MdOutlineWorkOutline } from "react-icons/md";
import { IconContext } from "react-icons/lib";

function Cv({ toggleVisibility }) {
	return (
		<div id="accordion-content">
			<div id="cv">
				<IconContext.Provider value={{ className: "react-icons-cv" }}>
					<h2>Aktuellt CV</h2>

					<div className="cv-part studies">
						{" "}
						<h3>
							<FaUniversity aria-hidden="true" /> Studiemeriter i urval
						</h3>
						<div className="row">
							<div className="programs sub-part">
								<h4>Program</h4>
								<div className="item">
									<h5>Webmaster &#40;120hp&#41;</h5>
									<p className="date">september 2022 &ndash; juni 2024</p>
									<p>Högskolan Väst </p>
								</div>
								<div className="item">
									<h5>Logopedprogrammet &#40;240hp&#41;</h5>
									<p className="date">september 2004 &ndash; januari 2010</p>
									<p>Lunds universitet</p>
								</div>
							</div>
							<div className="courses sub-part">
								<h4>Fristående kurser</h4>
								<div className="item">
									<h5>Introduktion till programmering i Python</h5>
									<p className="date">juni 2022 &ndash; augusti 2022</p>
									<p>Högskolan i Gävle</p>
								</div>
								<div className="item">
									<h5>Webbteknik 1, 2 & 3</h5>
									<p className="date">januari 2022 &ndash; oktober 2022</p>
									<p>Linnéuniversitetet</p>
								</div>
								<div className="item">
									<h5>Grafisk design: Universell utformning av digital tillgänglighet</h5>
									<p className="date">augusti 2021 &ndash; januari 2022</p>
									<p>Mittuniversitetet</p>
								</div>
								<div className="item">
									<h5>Inledande programmering med Java</h5>
									<p className="date">juni 2021 &ndash; augusti 2021</p>
									<p>Uppsala universitet</p>
								</div>
								<div className="item">
									<h5>Digital bildbehandling &#40;Photoshop&#41;</h5>
									<p className="date">januari 2021 &ndash; juni 2021</p>
									<p>Linnéuniversitetet</p>
								</div>
								<div className="item">
									<h5>Grafisk design & grafisk design för webben</h5>
									<p className="date">augusti 2020 &ndash; januari 2021</p>
									<p>Högskolan Kristianstad</p>
								</div>
								<div className="item">
									<h5>Spanska, allmän kurs</h5>
									<p className="date">januari 2003 &ndash; juni 2003</p>
									<p>Lunds universitet</p>
								</div>
							</div>
						</div>
					</div>

					<div className="work cv-part">
						<h3>
							<MdOutlineWorkOutline aria-hidden="true" /> Arbetslivserfarenhet i urval
						</h3>
						<div className="row">
							<div className="work">
								<h4>Studentkåren vid Högskolan Väst</h4>
								<div className="item">
									<h5>Studentrepresentant</h5>
									<p className="date">augusti 2023 &ndash; juni 2024</p>
									<p>
										Representerade studenterna för min institution vid programrådets utvecklingsarbete av
										högskoleprogrammen.
									</p>
								</div>
								<h4>Region Skåne</h4>
								<div className="item">
									<h5>Studentmedarbetare</h5>
									<p className="date">februari 2022 &ndash; februari 2023</p>
									<p>
										Utveckling, bearbetning och administrering av text, grafik och film för digital
										intervention inom 1177:s Stöd och behandling. Tillgänglighetsanpassning av allt material.
									</p>
								</div>
								<h4>Spoken Oy &#40;distans&#41;</h4>
								<div className="item">
									<h5>Undertextare</h5>
									<p className="date">januari 2021 &ndash; september 2022</p>
									<p>Undertextning av filmmaterial &#40;svenska &ndash; svenska&#41;.</p>
								</div>
								<h4> Region Örebro</h4>
								<div className="item">
									<h5>Logoped</h5>
									<p className="date">september 2011 &ndash; maj 2016</p>
									<p>
										{" "}
										Teamarbete vid Barn- och ungdomshabiliteringen i Karlskoga. Bedömning och behandling av
										barn 0&ndash;18 år med tal-, språk- och kommunikationssvårigheter.
									</p>
								</div>
								<h4>Region Gotland</h4>
								<div className="item">
									<h5>Logoped</h5>
									<p className="date">augusti 2010 &ndash; september 2011</p>
									<p>
										{" "}
										Teamarbete vid Habiliteringen i Visby. Bedömning och behandling av barn 0&ndash;12 år med
										tal-, språk- och kommunikationssvårigheter. Behandlingsgrupper.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="abroad cv-part">
						<h3>
							<MdLanguage aria-hidden="true" /> Utlandserfarenhet
						</h3>

						<div className="row">
							<div className="espana sub-part">
								<h4>Spanien</h4>
								<div className="item">
									<h5 lang="es">Universidad de Alcalá</h5>
									<p className="date">september 2003 &ndash; juni 2004</p>
									<p>Läste spanska på aavancerad nivå.</p>
								</div>
								<div className="item">
									<h5 lang="es">Academia Mester &#40;Granada&#41;</h5>
									<p className="date">september 2002 &ndash; december 2002</p>
									<p>Läste spanska på medelnivå.</p>
								</div>
							</div>
							<div className="japan sub-part">
								<h4>Japan</h4>
								<div className="item">
									<h5 lang="en">Ryukoku University</h5>
									<p className="date">mars 2007 &ndash; januari 2008</p>
									<p>Läste bland annat japanska och japansk kultur.</p>
								</div>
								<div className="item">
									<h5 lang="en">International Exchange Center Osaka </h5>
									<p className="date">januari 2007 &ndash; mars 2007</p>
									<p>Läste japanska på nybörjarnivå.</p>
								</div>
							</div>
						</div>
					</div>

					<div className="language cv-part">
						<h3>
							<IoLanguage aria-hidden="true" /> Språkkunskaper
						</h3>
						<div className="row">
							<div className="mother-tongue sub-part">
								<h4>Modersmål</h4>
								<div className="item">
									<h5>Svenska</h5>
									<p>Mycket goda kunskaper i tal och skrift.</p>
								</div>
							</div>

							<div className="high-level sub-part">
								<h4>Hög nivå</h4>
								<div className="item">
									<h5>Spanska</h5>
									<p>Goda kunskaper i tal och skrift.</p>
									<p> Pratar spanska i hemmet.</p>
								</div>
								<div className="item">
									<h5>Engelska</h5>
									<p>Goda kunskaper i tal och skrift.</p>
								</div>
							</div>
						</div>
					</div>
				</IconContext.Provider>
				<div className="close-button">
					<ButtonShow text="Dölj CV" down={false} onClick={toggleVisibility} />
				</div>
			</div>
		</div>
	);
}

export default Cv;
