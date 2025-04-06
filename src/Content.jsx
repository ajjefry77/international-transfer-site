import React, { createContext, useEffect, useState } from "react";
import TopForm from "./Home/Top-Form/Top-form";
import AboutUs from "./Home/About-Us/About-us";
import ContactUs from "./Home/Contact-US/Contact-us";
import PetroProducts from "./Products/PetroProducts";
import Header from "./Layout/header";
import Footer from "./Layout/footer";
import Auth from "./Auth/Auth";
import {Undefined} from "./Undefined/undefined";
import { Map } from "./Map/Map";
import { AnimatePresence } from "framer-motion";
import UserPanel from "./UserPanel/UserPanel";
import AdminPanel from "./AdminPanel/AdminPanel";
import { Route, Routes, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import FoodProducts from "./Products/FoodProducts";
import MachineProducts from "./Products/MachineProducts";
import BuildProducts from "./Products/BuildProducts";

const AnimatedRoutes = () => {
  const location = useLocation();
  const cookie = Cookies.get('token')
  console.log(cookie)
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
            <Route path='*' element={<Undefined/>} />
            <Route path="/" element={<TopForm/>}/>
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/PetroProducts" element={<PetroProducts/>} />
            <Route path="/FoodProducts" element={<FoodProducts/>} />
            <Route path="/MachineProducts" element={<MachineProducts/>} />
            <Route path="/BuildProducts" element={<BuildProducts/>} />
            <Route path="/auth" element={<Auth/>}/>
            <Route path="/userPanel" element={cookie ? <UserPanel/> : <Auth/>}>
              <Route path=":id"/>
            </Route>
            <Route path="/adminPanel" element={cookie ? <AdminPanel/> : <Auth/>}/>
          </Routes>
    </AnimatePresence>
  );
};

const Content = () => {
  const location = useLocation()
 
  const hideHeaderFooter = location.pathname.startsWith("/userPanel" ) || location.pathname.startsWith("/adminPanel" )
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
