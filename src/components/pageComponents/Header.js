import React from "react";
import { useTranslation } from "react-i18next";
import "./Header.css";
import Button from "./Button";

function Header() {
  const { t } = useTranslation();

  return (
    <header id="header" tabIndex="-1">
      <div id="header-background">
        <div id="header-content">
          <h1>
            <span id="cecilia">Cecilia Egevad</span>
            <span id="webb">{t("header.title")}</span>
          </h1>
          <div className="buttons">
            <Button
              text={t("header.buttons.0.text")}
              anchor="about"
              down={true}
            />
            <Button
              text={t("header.buttons.1.text")}
              anchor="portfolio"
              down={true}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
