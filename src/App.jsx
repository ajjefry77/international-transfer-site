import React, { createContext, useContext, useEffect, useState } from "react";
import TopForm from "./Home/Top-Form/Top-form";
import {BrowserRouter} from "react-router-dom";
import Header from "./Layout/header";
import Footer from "./Layout/footer";
import Content from "./Content";
import { useTranslation } from "react-i18next";
import { LangContext } from "./contexts/langContext";
import { HelmetProvider } from "react-helmet-async";

function App() {
  const { t } = useTranslation();
  const [lang, setLang] = useState("fa");

  return (
    <>
     
        <BrowserRouter>
          <LangContext.Provider value={{ lang, setLang }}>
            <Content />
          </LangContext.Provider>
        </BrowserRouter>
      
    </>
  );
}

export default App;
