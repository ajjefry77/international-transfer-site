import React, { createContext, useContext, useEffect, useState } from "react";
import TopForm from "./Home/Top-Form/Top-form";
import * as Router from "react-router-dom";
import Header from "./Layout/header";
import Footer from "./Layout/footer";
import Content from "./Content";
import { useTranslation } from "react-i18next";
import { LangContext } from "./contexts/langContext"

function App() {
  const { t } = useTranslation();
  const [lang, setLang] = useState("fa");

  useEffect(() => {
    document.title = t("page_title");
  }, [t]);

  return (
    <>
      <Router.BrowserRouter>
        <LangContext.Provider value={{lang, setLang}}>
          <Content />
        </LangContext.Provider>
      </Router.BrowserRouter>
    </>
  );
}

export default App;
