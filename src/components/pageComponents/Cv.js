import React from "react";
import "./Cv.css";
import ButtonShow from "./ButtonShow";
import { IoLanguage } from "react-icons/io5";
import { MdLanguage } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";
import { MdOutlineWorkOutline } from "react-icons/md";
import { IconContext } from "react-icons/lib";
import { useTranslation } from "react-i18next";

function Cv({ toggleVisibility }) {
  const { t } = useTranslation();

  return (
    <div id="accordion-content">
      <div id="cv">
        <IconContext.Provider value={{ className: "react-icons-cv" }}>
          <h2>{t("cv.title")}</h2>

          <div className="cv-part studies">
            <h3>
              <FaUniversity aria-hidden="true" /> {t("cv.studies.title")}
            </h3>
            <div className="row">
              <div>
                <div className="vocational sub-part">
                  <h4>{t("cv.studies.vocational_training.title")}</h4>
                  {t("cv.studies.vocational_training.content", {
                    returnObjects: true,
                  }).map((vocational_training, index) => (
                    <div className="item" key={index}>
                      <h5>{vocational_training.title}</h5>
                      <p className="date">{vocational_training.date}</p>
                      <p>{vocational_training.institution}</p>
                    </div>
                  ))}
                </div>
                <div className="programs sub-part">
                  <h4>{t("cv.studies.programs.title")}</h4>
                  {t("cv.studies.programs.content", {
                    returnObjects: true,
                  }).map((program, index) => (
                    <div className="item" key={index}>
                      <h5>{program.title}</h5>
                      <p className="date">{program.date}</p>
                      <p>{program.institution}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="courses sub-part">
                <h4>{t("cv.studies.courses.title")}</h4>
                {t("cv.studies.courses.content", { returnObjects: true }).map(
                  (course, index) => (
                    <div className="item" key={index}>
                      <h5>{course.title}</h5>
                      <p className="date">{course.date}</p>
                      <p>{course.institution}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="work cv-part">
            <h3>
              <MdOutlineWorkOutline aria-hidden="true" />{" "}
              {t("cv.work_experience.title")}
            </h3>
            <div className="row">
              <div className="work">
                {t("cv.work_experience.positions", { returnObjects: true }).map(
                  (position, index) => (
                    <div key={index}>
                      <h4>{position.institution}</h4>
                      <div className="item">
                        <h5>{position.title}</h5>
                        <p className="date">{position.date}</p>
                        <p>{position.description}</p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="abroad cv-part">
            <h3>
              <MdLanguage aria-hidden="true" />{" "}
              {t("cv.abroad_experience.title")}
            </h3>
            <div className="row">
              {t("cv.abroad_experience.countries", { returnObjects: true }).map(
                (countryExp, index) => (
                  <div
                    key={index}
                    className={`${countryExp.country.toLowerCase()} sub-part`}
                  >
                    <h4>{countryExp.country}</h4>
                    {countryExp.experiences.map((exp, expIndex) => (
                      <div className="item" key={expIndex}>
                        <h5
                          lang={exp.title.includes("Universidad") ? "es" : "en"}
                        >
                          {exp.title}
                        </h5>
                        <p className="date">{exp.date}</p>
                        <p>{exp.description}</p>
                      </div>
                    ))}
                  </div>
                )
              )}
            </div>
          </div>

          <div className="language cv-part">
            <h3>
              <IoLanguage aria-hidden="true" /> {t("cv.language_skills.title")}
            </h3>
            <div className="row">
              {t("cv.language_skills.languages", { returnObjects: true }).map(
                (level, index) => (
                  <div
                    key={index}
                    className={`${level.level
                      .toLowerCase()
                      .replace(" ", "-")} sub-part`}
                  >
                    <h4>{level.level}</h4>
                    {level.languages.map((lang, langIndex) => (
                      <div className="item" key={langIndex}>
                        <h5>{lang.name}</h5>
                        <p>{lang.description}</p>
                      </div>
                    ))}
                  </div>
                )
              )}
            </div>
          </div>
        </IconContext.Provider>
        <div className="close-button">
          <ButtonShow
            text={t("cv.button_show_cv.text_opened")}
            down={false}
            onClick={toggleVisibility}
          />
        </div>
      </div>
    </div>
  );
}

export default Cv;
