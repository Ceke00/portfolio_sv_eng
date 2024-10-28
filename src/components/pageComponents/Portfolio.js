import React from "react";
import "./Portfolio.css";
import wfacts from "./../../images/wfacts_new_400_250.png";
import wfacts_s from "./../../images/wfacts_new_300_188.png";
import wfacts_xs from "./../../images/wfacts_new_270_169.png";
import { RxOpenInNewWindow } from "react-icons/rx";
import birgitta from "./../../images/Birgitta_400_250.png";
import birgitta_s from "./../../images/Birgitta_300_188.png";
import birgitta_xs from "./../../images/Birgitta_270_169.png";
import php from "./../../images/php_400_250.png";
import php_s from "./../../images/php_300_188.png";
import php_xs from "./../../images/php_270_169.png";
import jquery from "./../../images/jquery_400_250.png";
import jquery_s from "./../../images/jquery_300_188.png";
import jquery_xs from "./../../images/jquery_270_169.png";
import portfolio from "./../../images/portfolio_new_400_250.png";
import portfolio_s from "./../../images/portfolio_new_300_188.png";
import portfolio_xs from "./../../images/portfolio_new_270_169.png";

function Portfolio() {
	return (
		<section id="portfolio" tabIndex="-1">
			<h2>Portfolio</h2>
			<div className="intro row">
				<p className="intro-text">
					Här är ett urval av de projekt som jag skapat de senaste åren. Klicka gärna vidare på länkarna och titta
					på sidorna.{" "}
				</p>
			</div>
			<div className="row">
				<div className="text">
					<h3>
						<span lang="en">World Facts</span> &ndash; en flaggapp
					</h3>
					<div className="tags">
						<p className="tag year">2024</p>

						<p className="tag" lang="en">
							React
						</p>
						<p className="tag">API</p>
						<p className="tag">Användartestning</p>
						<p className="tag" lang="en">
							React Bootstrap
						</p>
					</div>
					<p>
						Flaggappen är min första React-app. Syftet var att skapa en app för en specifik målgrupp med ett
						JavaScript-ramverk och ett REST API.{" "}
					</p>
					<p>
						Flaggappen inhämtar data via{" "}
						<strong>
							{" "}
							API:et <span lang="en">REST Countries</span>
						</strong>
						. Appen designades utifrån målgruppen "vetgiriga skolbarn som vill lära sig mer om flaggor".{" "}
					</p>
					<p> Användaren kan träna på flaggor både genom att vända på flaggkort samt genom en flagg-quiz.</p>
					<p>
						{" "}
						Under utvecklingens gång utförde jag <strong>användartester på målgruppen</strong>. Utifrån detta
						förtydligade jag till exempel feedbacken från quizen genom att kombinera bild och text.{" "}
					</p>
				</div>
				<div className="img col" data-aos="zoom-in" data-aos-delay="100">
					<picture>
						<source media="(min-width:900px)" srcSet={wfacts} />
						<source media="(min-width:711px)" srcSet={wfacts_s} />
						<source media="(min-width:500px)" srcSet={wfacts} />
						<source media="(min-width:340px)" srcSet={wfacts_s} />
						<img src={wfacts_xs} alt="Flaggappen visas på en tablet, en laptop och en mobil." />
					</picture>
					<div className="space-up">
						<h4>Länk till projektet:</h4>
						<p>
							<a
								href="https://webbkurs.ei.hv.se/~ceeg0001/JSR-proj/build/"
								target="_blank"
								rel="noreferrer"
								tabIndex="0">
								Till flaggappen <span lang="en">World Facts</span>{" "}
								<RxOpenInNewWindow aria-label="Öppnas i nytt fönster" />
							</a>
						</p>
					</div>
				</div>
			</div>
			<div className="line"></div>

			<div className="row rev">
				<div className="text">
					<h3>
						Cecis Design &ndash; animering med <span lang="en">jQuery</span>
					</h3>
					<div className="tags">
						<p className="tag year">2023</p>
						<p className="tag">HTML</p>
						<p className="tag">CSS</p>
						<p className="tag">jQuery</p>
					</div>
					<p>
						Syftet med detta projekt var att skapa animationer med hjälp av <span lang="en">jQuery</span>. Jag
						lade till jQuery-kod till en enkel dummysida från en tidigare uppgift.
					</p>
					<p>
						Min tanke var att lägga till <strong>diskret animering </strong>som inte distraherar användaren i
						onödan.
					</p>
				</div>
				<div className="img col last" data-aos="zoom-in" data-aos-delay="100">
					<picture>
						<source media="(min-width:900px)" srcSet={jquery} />
						<source media="(min-width:711px)" srcSet={jquery_s} />
						<source media="(min-width:500px)" srcSet={jquery} />
						<source media="(min-width:340px)" srcSet={jquery_s} />

						<img src={jquery_xs} alt="Webbplatsen visas på en tablet, en laptop och en mobil." />
					</picture>
					<div className="space-up">
						<h4>Länk till projektet:</h4>
						<p>
							<a
								href="https://webbkurs.ei.hv.se/~ceeg0001/WUH_original_JQ/index.html"
								target="_blank"
								rel="noreferrer"
								tabIndex="0">
								Till Cecis Design
								<RxOpenInNewWindow aria-label="Öppnas i nytt fönster" />
							</a>
						</p>
					</div>
				</div>
			</div>
			<div className="line"></div>
			<div className="row">
				<div className="text">
					<h3>Föreningssida med full CRUD</h3>
					<div className="tags">
						<p className="tag year">2023</p>
						<p className="tag">PHP</p>
						<p className="tag">Bootstrap</p>
						<p className="tag">Databaser</p>
					</div>
					<p>
						Syftet med det här projektet var att skapa en del av en förenings webbplats med hjälp av PHP.
						Stilsättning gjorde jag med Bootstrap.{" "}
					</p>
					<p>Kraven för uppgiften var följande:</p>
					<ul>
						<li>
							Startsidan ska lista föreningens fem nästkommande aktiviteter. Enbart akuella aktiviteter ska
							hämtas från databasen.{" "}
						</li>
						<li>
							Webbplatsen ska ha en lösenordsskyddad admin-sida med två olika behörighetsnivåer. Administratören
							med högst behörighet ska kunna lägga till, visa, uppdatera och ta bort aktiviteter &#40;CRUD&#41;.
						</li>
						<li>Sidan ska skyddas mot SQL-injektioner och ha hashade lösenord.</li>
					</ul>
				</div>
				<div className="img col last" data-aos="zoom-in" data-aos-delay="100">
					<picture>
						<source media="(min-width:900px)" srcSet={php} />
						<source media="(min-width:711px)" srcSet={php_s} />
						<source media="(min-width:500px)" srcSet={php} />
						<source media="(min-width:340px)" srcSet={php_s} />
						<img src={php_xs} alt="Webbplatsens administrationssida och startsida visas på två laptopar." />
					</picture>
					<div className="space-up">
						<h4>Länk till projektet:</h4>
						<p>
							<a
								href="https://webbkurs.ei.hv.se/~ceeg0001/HGF_Rabylund_VG/index.php"
								target="_blank"
								rel="noreferrer"
								tabIndex="0">
								Till Hyresgästföreningen Råbylund <RxOpenInNewWindow aria-label="Öppnas i nytt fönster" />
							</a>
						</p>
					</div>
				</div>
			</div>
			<div className="line"></div>
			<div className="row rev">
				<div className="text">
					<h3>Birgittas Klensmide &ndash; ett SEO-projekt</h3>
					<div className="tags">
						<p className="tag year">2024</p>
						<p className="tag">HTML</p>
						<p className="tag">CSS</p>
						<p className="tag">SEO</p>
						<p className="tag">AI</p>
					</div>
					<p>
						I det här projektet var syftet att skapa en webbplats till den påhittade klensmeden Birgitta med fokus
						på sökmotoroptimering &#40;SEO&#41;.
					</p>
					<p>
						Mitt mål var framförallt att skapa ett relevant innehåll utifrån den tilltänkta målgruppen och
						företagets värderingar.{" "}
					</p>
					<p>
						Majoriteten av bilderna på sidan tog jag fram med hjälp av Bings AI-verktyg{" "}
						<span lang="en">Image Creator</span>. Texten formulerade jag dock själv. Jag arbetatde även med
						exempelvis:{" "}
					</p>
					<ul>
						<li>analys av relevanta nyckelord</li>
						<li>bildoptimering och alt-texter</li>
						<li lang="en">Google Search Console</li>
						<li>SEO-testverktyg.</li>
					</ul>
				</div>
				<div className="img col last" data-aos="zoom-in" data-="500">
					<picture>
						<source media="(min-width:900px)" srcSet={birgitta} />
						<source media="(min-width:711px)" srcSet={birgitta_s} />
						<source media="(min-width:500px)" srcSet={birgitta} />
						<source media="(min-width:340px)" srcSet={birgitta_s} />
						<img
							src={birgitta_xs}
							alt="Webbplatsens Birgittas Klensmide visas på en tablet, en laptop och en mobil."
						/>
					</picture>
					<div className="space-up">
						<h4>Länk till projektet:</h4>
						<p>
							<a
								href="https://webbkurs.ei.hv.se/~ceeg0001/birgittas_klensmide/"
								target="_blank"
								rel="noreferrer"
								tabIndex="0">
								Till Birgittas Klensmide <RxOpenInNewWindow aria-label="Öppnas i nytt fönster" />
							</a>
						</p>
					</div>
				</div>
			</div>
			<div className="line"></div>
			<div className="row">
				<div className="text">
					<h3>Portfoliosida</h3>
					<div className="tags">
						<p className="tag year">2024</p>
						<p className="tag" lang="en">
							React
						</p>
						<p className="tag">CSS</p>
						<p className="tag">Figma</p>
					</div>
					<p>
						Den här portfoliosidan har som syfte att presentera mig själv och vad jag lärt mig under de senaste
						åren.
					</p>
					<p>
						I ett första steg i designprocessen skapade jag en prototyp i Figma. De tecknade bilderna på sidan
						hade jag sedan tidigare skapat när jag läste en kurs i grafisk design.
					</p>
					<p>
						Utifrån prototypen i Figma byggde jag sedan sidan i <span lang="en">React</span>.
					</p>
				</div>
				<div className="img col" data-aos="zoom-in" data-aos-delay="100">
					<picture>
						<source media="(min-width:900px)" srcSet={portfolio} />
						<source media="(min-width:711px)" srcSet={portfolio_s} />
						<source media="(min-width:500px)" srcSet={portfolio} />
						<source media="(min-width:340px)" srcSet={portfolio_s} />
						<img src={portfolio_xs} alt="Portfoliosidan visas på en tablet, en laptop och en mobil" />
					</picture>
				</div>
			</div>
		</section>
	);
}

export default Portfolio;
