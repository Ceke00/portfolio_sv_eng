import React from "react";
import { useTranslation, Trans } from "react-i18next";
import { RxOpenInNewWindow } from "react-icons/rx";
import atlogo from "./../../images/at_only_new_300.svg";
import atlogo_s from "./../../images/at_only_new_270.svg";
import "./Contact.css";

function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <section id="contact" tabIndex="-1">
        <div>
          <h2>{t("contact.title")}</h2>
          <div className="intro row">
            <div>
              {t("contact.intro.paragraphs", { returnObjects: true }).map(
                (paragraph, index) => (
                  <p className="intro-text" key={index}>
                    {paragraph.paragraph}
                    <a
                      href={paragraph.link}
                      target="_blank"
                      rel="noreferrer"
                      tabIndex="0"
                    >
                      {paragraph.link_text}{" "}
                      <RxOpenInNewWindow
                        aria-label={t("common.opens_new_window")}
                      />
                    </a>
                  </p>
                )
              )}
            </div>
            <div className="img" data-aos="zoom-in" data-aos-delay="500">
              <picture>
                <source media="(min-width:340px)" srcSet={atlogo} />
                <img src={atlogo_s} alt={t("contact.picture_at.alt")} />
              </picture>
            </div>
          </div>
        </div>
        <div className="copy">
          <p>&copy; Cecilia Egevad, 2024</p>
        </div>
      </section>
    </>
  );
}

export default Contact;
