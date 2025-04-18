import React, { useState } from "react";
import {BrowserRouter} from "react-router-dom";
import Content from "./Content";
import { useTranslation } from "react-i18next";
import { LangContext } from "./contexts/langContext";
import useGoogleAnalytics from "./useGoogleAnalystic";
import usePageTracking from "./Hooks/usePageTracking";
// import './Tail.css'

function App() {
  const { t } = useTranslation();
  const [lang, setLang] = useState("fa");

  useGoogleAnalytics('G-QTL051CKGG');
  

  

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
