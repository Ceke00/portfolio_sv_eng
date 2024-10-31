import React from "react";
import { MdOutlineLanguage } from "react-icons/md";
import "./LanguageSwitcher.css";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng).then(() => {
      console.log(`Language changed to ${lng}`);
    });

  };

  return (
    <div>
      {i18n.language === "en" ? (
        <button className="languageButton" onClick={() => changeLanguage("sv")}>
          <MdOutlineLanguage className="icon" /> Svenska
        </button>
      ) : (
        <button className="languageButton" onClick={() => changeLanguage("en")}>
          {" "}
          <MdOutlineLanguage className="icon" /> English
        </button>
      )}
    </div>
  );
}

export default LanguageSwitcher;
