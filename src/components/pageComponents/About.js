import React, { useState } from "react";
import { useTranslation, Trans } from "react-i18next";
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
import {
  FaFigma,
  FaUniversalAccess,
  FaDatabase,
  FaSearch,
  FaElementor,
  FaStar,
  FaLaptopMedical,
} from "react-icons/fa";
import { GrUserExpert } from "react-icons/gr";
import { SiAdobeindesign, SiCsharp } from "react-icons/si";
import { TbSql, TbBrandReactNative } from "react-icons/tb";

function About() {
  const { t } = useTranslation();
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
            <source
              className="round-image"
              media="(min-width:340px)"
              srcSet={photo}
            />
            <img className="round-image" src={photo_s} alt="" />
          </picture>
        </div>
        <div className="intro-text first">
          {t("about.intro.paragraphs", { returnObjects: true }).map(
            (paragraph, index) => (
              <p key={index}>{paragraph}</p>
            )
          )}
        </div>
      </div>
      <div className="row">
        <div>
          <h3>{t("about.career_change.title")}</h3>
          {t("about.career_change.paragraphs", { returnObjects: true }).map(
            (paragraph, index) => (
              <p key={index}>
                <Trans>{paragraph}</Trans>
              </p>
            )
          )}
          <ul>
            {t("about.career_change.list", { returnObjects: true }).map(
              (item, index) => (
                <li key={index}>
                  <Trans>{item}</Trans>
                </li>
              )
            )}
          </ul>
          <h3 className="space-up">{t("about.accessibility_course.title")}</h3>
          {t("about.accessibility_course.paragraphs", {
            returnObjects: true,
          }).map((paragraph, index) => (
            <p key={index}>
              <Trans>{paragraph}</Trans>
            </p>
          ))}
          <ul>
            {t("about.accessibility_course.list", { returnObjects: true }).map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}
          </ul>
        </div>

        <div className="img col">
          <figure data-aos="zoom-in" data-aos-delay="100">
            <picture>
              <source
                className="round-image"
                media="(min-width:340px)"
                srcSet={illu}
              />
              <img
                className="round-image"
                alt={t("about.picture_self_portrait.alt")}
                src={illu_s}
              />
            </picture>

            <figcaption className="image-text">
              {t("about.picture_self_portrait.figure_caption")}
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

          <p className="space-y">{t("about.sep_paragraph")}</p>
          <Button text="Portfolio" down={true} anchor="portfolio" />
        </div>
        <div className="first">
          <h3>{t("about.university_exam.title")}</h3>
          {t("about.university_exam.paragraphs", { returnObjects: true }).map(
            (paragraph, index) => (
              <p key={index}>
                <Trans>{paragraph}</Trans>
              </p>
            )
          )}
        </div>
      </div>
      <div className="space-up">
        <h3>{t("about.skills.title")}</h3>
        <p>{t("about.skills.intro")}</p>

        <div className=" big-comp-container">
          <IconContext.Provider value={{ className: "react-icons" }}>
            <div
              className="comp-container"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <h4>
                {t("about.skills.categories.0.level")}{" "}
                <span className="stars">
                  <FaStar
                    role="img"
                    aria-label={t("about.skills.categories.0.aria-label")}
                  />
                  <FaStar aria-hidden={true} />
                  <FaStar aria-hidden={true} />
                </span>
              </h4>
              <p>{t("about.skills.categories.0.description")}</p>
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
                  <FaUniversalAccess aria-hidden={true} />{" "}
                  <p>{t("about.skills.categories.0.skills.3")}</p>
                </div>
                <div className="comp">
                  <FaFigma aria-hidden={true} /> <p>Figma</p>
                </div>
              </div>
            </div>
            <div
              className="comp-container"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <h4>
                {t("about.skills.categories.1.level")}{" "}
                <span className="stars">
                  <FaStar
                    aria-label={t("about.skills.categories.1.aria-label")}
                    role="img"
                  />
                  <FaStar aria-hidden={true} />
                  <IconContext.Provider
                    value={{ className: "react-icons-grey" }}
                  >
                    <FaStar aria-hidden={true} />
                  </IconContext.Provider>
                </span>
              </h4>
              <p>{t("about.skills.categories.1.description")} </p>
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
                  <FaDatabase aria-hidden={true} />{" "}
                  <p>{t("about.skills.categories.1.skills.3")}</p>
                </div>
                <div className="comp">
                  <TbSql aria-hidden={true} /> <p>SQL</p>
                </div>
                <div className="comp">
                  <GrUserExpert aria-hidden={true} />{" "}
                  <p>{t("about.skills.categories.1.skills.5")}</p>
                </div>
                <div className="comp">
                  <DiWordpress aria-hidden={true} /> <p lang="en">WordPress</p>
                </div>
                <div className="comp">
                  <FaElementor aria-hidden={true} /> <p lang="en">Elementor</p>
                </div>
                <div className="comp">
                  <DiIllustrator aria-hidden={true} />{" "}
                  <p lang="en">Illustrator</p>
                </div>
                <div className="comp">
                  <DiPhotoshop aria-hidden={true} /> <p lang="en">Photoshop</p>
                </div>
                <div className="comp">
                  <DiGithubBadge aria-hidden={true} />{" "}
                  <p lang="en">Git / Github</p>
                </div>
              </div>
            </div>
            <div
              className="comp-container"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <h4>
                {t("about.skills.categories.2.level")}{" "}
                <span className="stars">
                  <FaStar
                    role="img"
                    aria-label={t("about.skills.categories.2.aria-label")}
                  />
                  <IconContext.Provider
                    value={{ className: "react-icons-grey" }}
                  >
                    <FaStar aria-hidden={true} />
                    <FaStar aria-hidden={true} />
                  </IconContext.Provider>
                </span>
              </h4>
              <p>{t("about.skills.categories.2.description")}</p>
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
                  <TbBrandReactNative aria-hidden={true} />{" "}
                  <p lang="en">React Native</p>
                </div>
                <div className="comp">
                  <DiMongodb aria-hidden={true} />
                  <p>MongoDB</p>
                </div>
                <div className="comp">
                  <DiBootstrap aria-hidden={true} /> <p lang="en">Vue</p>
                </div>
                <div className="comp">
                  <DiAngularSimple aria-hidden={true} />{" "}
                  <p lang="en">Angular</p>
                </div>
                <div className="comp">
                  <DiJqueryLogo aria-hidden={true} /> <p lang="en">jQuery</p>
                </div>
                <div className="comp">
                  <DiSass aria-hidden={true} /> <p>SCSS</p>
                </div>

                <div className="comp">
                  <SiAdobeindesign aria-hidden={true} role="presentation" />{" "}
                  <p lang="en">Indesign</p>
                </div>
                <div className="comp">
                  <SiCsharp aria-hidden={true} role="presentation" />{" "}
                  <p lang="en">C#</p>
                </div>
              </div>
            </div>
          </IconContext.Provider>
        </div>
      </div>
      <div className="row ">
        <div className="last">
          <h3>{t("about.work_during_studies.title")}</h3>
          <div className="col">
            {t("about.work_during_studies.paragraphs", {
              returnObjects: true,
            }).map((paragraph, index) => (
              <p key={index}>
                <Trans>{paragraph}</Trans>
              </p>
            ))}
          </div>
        </div>
        <div className="img first laptop">
          <FaLaptopMedical aria-hidden={true} />
        </div>
      </div>
      {/* Button changes upon toggle */}
      <div className="space-down">
        {isOpen ? (
          <ButtonShow
            text={t("about.button_show_cv.text_opened")}
            down={false}
            onClick={toggleVisibility}
          />
        ) : (
          <ButtonShow
            text={t("about.button_show_cv.text_closed")}
            down={true}
            onClick={toggleVisibility}
          />
        )}
      </div>
      {/* Showing or hiding CV */}
      <div>{isOpen ? <Cv toggleVisibility={toggleVisibility} /> : ""}</div>
    </section>
  );
}

export default About;
