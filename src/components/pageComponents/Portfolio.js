import React from "react";
import "./Portfolio.css";
import { useTranslation, Trans } from "react-i18next";
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
  const { t } = useTranslation();

  return (
    <section id="portfolio" tabIndex="-1">
      <h2>{t("portfolio.title")}</h2>
      <div className="intro row">
        <p className="intro-text">{t("portfolio.intro")}</p>
      </div>
      {/* World Facts */}
      <div className="row">
        <div className="text">
          <h3>{t("portfolio.projects.0.title")}</h3>
          <div className="tags">
            <p className="tag year">{t("portfolio.projects.0.year")}</p>
            {t("portfolio.projects.0.tags", { returnObjects: true }).map(
              (tag, index) => (
                <p key={index} className="tag">
                  {tag}
                </p>
              )
            )}
          </div>
          {t("portfolio.projects.0.description", { returnObjects: true }).map(
            (paragraph, index) => (
              <p key={index}>
                <Trans i18nKey={`portfolio.projects.0.description.${index}`}>
                  {paragraph}
                </Trans>
              </p>
            )
          )}
        </div>
        <div className="img col" data-aos="zoom-in" data-aos-delay="100">
          <picture>
            <source media="(min-width:900px)" srcSet={wfacts} />
            <source media="(min-width:711px)" srcSet={wfacts_s} />
            <source media="(min-width:500px)" srcSet={wfacts} />
            <source media="(min-width:340px)" srcSet={wfacts_s} />
            <img src={wfacts_xs} alt={t("portfolio.projects.0.image_alt")} />
          </picture>
          <div className="space-up">
            <h4>{t("common.link_to_project")}</h4>
            <p>
              <a
                href={t("portfolio.projects.0.project_link")}
                target="_blank"
                rel="noreferrer"
                tabIndex="0"
              >
                {t("portfolio.projects.0.project_link_text")}{" "}
                <RxOpenInNewWindow aria-label={t("common.opens_new_window")} />
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="line"></div>

      {/* JQuery */}
      <div className="row rev">
        <div className="text">
          <h3>{t("portfolio.projects.1.title")}</h3>
          <div className="tags">
            <p className="tag year">{t("portfolio.projects.1.year")}</p>
            {t("portfolio.projects.1.tags", { returnObjects: true }).map(
              (tag, index) => (
                <p key={index} className="tag">
                  {tag}
                </p>
              )
            )}
          </div>
          {t("portfolio.projects.1.description", { returnObjects: true }).map(
            (paragraph, index) => (
              <p key={index}>
                <Trans i18nKey={`portfolio.projects.1.description.${index}`}>
                  {paragraph}
                </Trans>
              </p>
            )
          )}
        </div>
        <div className="img col last" data-aos="zoom-in" data-aos-delay="100">
          <picture>
            <source media="(min-width:900px)" srcSet={jquery} />
            <source media="(min-width:711px)" srcSet={jquery_s} />
            <source media="(min-width:500px)" srcSet={jquery} />
            <source media="(min-width:340px)" srcSet={jquery_s} />
            <img src={jquery_xs} alt={t("portfolio.projects.1.image_alt")} />
          </picture>
          <div className="space-up">
            <h4>{t("common.link_to_project")}</h4>
            <p>
              <a
                href={t("portfolio.projects.1.project_link")}
                target="_blank"
                rel="noreferrer"
                tabIndex="0"
              >
                {t("portfolio.projects.1.project_link_text")}
                <RxOpenInNewWindow aria-label={t("common.opens_new_window")} />
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="line"></div>
      {/* php page */}
      <div className="row">
        <div className="text">
          <h3>{t("portfolio.projects.2.title")}</h3>
          <div className="tags">
            <p className="tag year">{t("portfolio.projects.2.year")}</p>
            {t("portfolio.projects.2.tags", { returnObjects: true }).map(
              (tag, index) => (
                <p key={index} className="tag">
                  {tag}
                </p>
              )
            )}
          </div>
          {t("portfolio.projects.2.description", { returnObjects: true }).map(
            (paragraph, index) => (
              <p key={index}>
                <Trans i18nKey={`portfolio.projects.2.description.${index}`}>
                  {paragraph}
                </Trans>
              </p>
            )
          )}
          <ul>
            {t("portfolio.projects.2.list", { returnObjects: true }).map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}
          </ul>
        </div>
        <div className="img col last" data-aos="zoom-in" data-aos-delay="100">
          <picture>
            <source media="(min-width:900px)" srcSet={php} />
            <source media="(min-width:711px)" srcSet={php_s} />
            <source media="(min-width:500px)" srcSet={php} />
            <source media="(min-width:340px)" srcSet={php_s} />
            <img src={php_xs} alt={t("portfolio.projects.2.image_alt")} />
          </picture>
          <div className="space-up">
            <h4>{t("common.link_to_project")}</h4>
            <p>
              <a
                href={t("portfolio.projects.2.project_link")}
                target="_blank"
                rel="noreferrer"
                tabIndex="0"
              >
                {t("portfolio.projects.2.project_link_text")}
                <RxOpenInNewWindow aria-label={t("common.opens_new_window")} />
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="line"></div>

      {/* seo page */}
      <div className="row rev">
        <div className="text">
          <h3>{t("portfolio.projects.3.title")}</h3>
          <div className="tags">
            <p className="tag year">{t("portfolio.projects.3.year")}</p>
            {t("portfolio.projects.3.tags", { returnObjects: true }).map(
              (tag, index) => (
                <p key={index} className="tag">
                  {tag}
                </p>
              )
            )}
          </div>
          {t("portfolio.projects.3.description", { returnObjects: true }).map(
            (paragraph, index) => (
              <p key={index}>
                <Trans i18nKey={`portfolio.projects.3.description.${index}`}>
                  {paragraph}
                </Trans>
              </p>
            )
          )}
          <ul>
            {t("portfolio.projects.3.list", { returnObjects: true }).map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}
          </ul>
        </div>
        <div className="img col last" data-aos="zoom-in" data-="500">
          <picture>
            <source media="(min-width:900px)" srcSet={birgitta} />
            <source media="(min-width:711px)" srcSet={birgitta_s} />
            <source media="(min-width:500px)" srcSet={birgitta} />
            <source media="(min-width:340px)" srcSet={birgitta_s} />
            <img src={birgitta_xs} alt={t("portfolio.projects.3.image_alt")} />
          </picture>
          <div className="space-up">
            <h4>{t("common.link_to_project")}</h4>
            <p>
              <a
                href={t("portfolio.projects.3.project_link")}
                target="_blank"
                rel="noreferrer"
                tabIndex="0"
              >
                {t("portfolio.projects.3.project_link_text")}
                <RxOpenInNewWindow aria-label={t("common.opens_new_window")} />
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="line"></div>

      {/* tailwind page */}
      <div className="row">
        <div className="text">
          <h3>{t("portfolio.projects.4.title")}</h3>
          <div className="tags">
            <p className="tag year">{t("portfolio.projects.4.year")}</p>
            {t("portfolio.projects.4.tags", { returnObjects: true }).map(
              (tag, index) => (
                <p key={index} className="tag">
                  {tag}
                </p>
              )
            )}
          </div>
          {t("portfolio.projects.4.description", { returnObjects: true }).map(
            (paragraph, index) => (
              <p key={index}>
                <Trans i18nKey={`portfolio.projects.4.description.${index}`}>
                  {paragraph}
                </Trans>
              </p>
            )
          )}
        </div>
        <div className="img col" data-aos="zoom-in" data-aos-delay="100">
          <picture>
            <source media="(min-width:900px)" srcSet={portfolio} />
            <source media="(min-width:711px)" srcSet={portfolio_s} />
            <source media="(min-width:500px)" srcSet={portfolio} />
            <source media="(min-width:340px)" srcSet={portfolio_s} />
            <img src={portfolio_xs} alt={t("portfolio.projects.4.image_alt")} />
          </picture>
          <div className="space-up">
            <h4>{t("common.link_to_project")}</h4>
            <p>
              <a
                href={t("portfolio.projects.4.project_link")}
                target="_blank"
                rel="noreferrer"
                tabIndex="0"
              >
                {t("portfolio.projects.4.project_link_text")}
                <RxOpenInNewWindow aria-label={t("common.opens_new_window")} />
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="line"></div>
      {/* portfolio page */}
      <div className="row rev">
        <div className="text">
          <h3>{t("portfolio.projects.5.title")}</h3>
          <div className="tags">
            <p className="tag year">{t("portfolio.projects.5.year")}</p>
            {t("portfolio.projects.5.tags", { returnObjects: true }).map(
              (tag, index) => (
                <p key={index} className="tag">
                  {tag}
                </p>
              )
            )}
          </div>
          {t("portfolio.projects.5.description", { returnObjects: true }).map(
            (paragraph, index) => (
              <p key={index}>
                <Trans i18nKey={`portfolio.projects.5.description.${index}`}>
                  {paragraph}
                </Trans>
              </p>
            )
          )}
        </div>
        <div className="img col" data-aos="zoom-in" data-aos-delay="100">
          <picture>
            <source media="(min-width:900px)" srcSet={portfolio} />
            <source media="(min-width:711px)" srcSet={portfolio_s} />
            <source media="(min-width:500px)" srcSet={portfolio} />
            <source media="(min-width:340px)" srcSet={portfolio_s} />
            <img src={portfolio_xs} alt={t("portfolio.projects.5.image_alt")} />
          </picture>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
