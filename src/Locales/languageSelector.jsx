import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import './languageSelector.css'
import { LangContext } from "../contexts/langContext";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const {lang, setLang} = useContext(LangContext)

  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    setLang(event.target.value)
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem("selectedLanguage", selectedLanguage); // ذخیره زبان
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, []);

  return (
    <>
    <select onChange={changeLanguage} value={i18n.language} className="selector">
      <option value="en" className="language"> English</option>
      <option value="fa" className="language"> فارسی</option>
    </select>
    
    </>
    
  );
};

export default LanguageSelector;
