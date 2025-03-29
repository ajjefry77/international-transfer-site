import React, { createContext, useEffect, useState } from "react";
import TopForm from "./Home/Top-Form/Top-form";
import  * as Router from "react-router-dom";
import AboutUs from "./Home/About-Us/About-us";
import ContactUs from "./Home/Contact-US/Contact-us";
import Products from "./Products/Products";
import Header from "./Layout/header";
import Footer from "./Layout/footer";
import Auth from "./Auth/Auth";
import {Undefined} from "./Undefined/undefined";
import { Map } from "./Map/Map";
import { AnimatePresence } from "framer-motion";
import UserPanel from "./UserPanel/UserPanel";
import AdminPanel from "./AdminPanel/AdminPanel";

const AnimatedRoutes = () => {
  const location = Router.useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Router.Routes location={location} key={location.pathname}>
            <Router.Route path='*' element={<Undefined/>} />
            <Router.Route path="/" element={<TopForm/>}/>
            <Router.Route path="/aboutUs" element={<AboutUs />} />
            <Router.Route path="/contactUs" element={<ContactUs />} />
            <Router.Route path="/Products" element={<Products/>} />
            <Router.Route path="/auth" element={<Auth/>}/>
            <Router.Route path="/userPanel" element={<UserPanel/>}/>
            <Router.Route path="/adminPanel" element={<AdminPanel/>}/>
          </Router.Routes>
    </AnimatePresence>
  );
};

const Content = () => {
  const location = Router.useLocation()
 
  const hideHeaderFooter = location.pathname == "/userPanel" || location.pathname == "/adminPanel"
  return (
    <div>
      
        {!hideHeaderFooter&&<Header/>}
          <AnimatedRoutes/> 
        {!hideHeaderFooter&&<Footer/>}
      

      
              
      
      
    </div>
  );
};

export const MainContext = createContext({
  signIn:true,
  setSignedIn:()=>{}
})

export default Content;
