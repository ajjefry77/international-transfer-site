import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './Layout/header';
import {ThemeProvider} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.css';
import "./i18n"
import Footer from './Layout/footer';
import { BrowserRouter, Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode> 
     <HelmetProvider>
        <App/>
     </HelmetProvider>
  </React.StrictMode>
);



