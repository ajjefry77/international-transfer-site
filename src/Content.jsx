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
import AllProducts from "./Products/AllProducts";
import FarmProducts from "./Products/FarmProducts";
import EmailVerify from "./Auth/Tel-Verify/Email-verify";
import Loading from "./Home/Loading/Loading";
import ReqConditions from "./Home/Request-Conditions/Request-Conditions";
import ZeroToHundred from "./Home/0to100/0to100";
import usePageTracking from "./Hooks/usePageTracking";

const AnimatedRoutes = () => {
  const location = useLocation();
  const cookie = Cookies.get('token')

  usePageTracking()
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
            <Route path='*' element={<Undefined/>} />
            <Route path="/" element={<TopForm/>}/>
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/petroProducts" element={<PetroProducts/>} />
            <Route path="/foodProducts" element={<FoodProducts/>} />
            <Route path="/machineProducts" element={<MachineProducts/>} />
            <Route path="/buildProducts" element={<BuildProducts/>} />
            <Route path="/allProducts" element={<AllProducts/>} />
            <Route path="/farmProducts" element={<FarmProducts/>} />
            <Route path="/loading" element={<Loading/>} />
            <Route path="/auth" element={<Auth/>}/>
            <Route path="/emailVerify" element={<EmailVerify/>}/>
            <Route path="/requestConditions" element={<ReqConditions/>}/>
            <Route path="/0to100" element={<ZeroToHundred/>}/>
            <Route path="/userPanel" element={<UserPanel/>}>
              <Route path=":id"/>
            </Route>
            <Route path="/adminPanel" element={cookie ? <AdminPanel/> : <Auth/>}/>
            <Route path="/php" element={<TopForm/>}/>
          </Routes>
    </AnimatePresence>
  );
};

const Content = () => {
  const location = useLocation()
 
  const hideHeaderFooter = location.pathname.startsWith("/userPanel" ) || location.pathname.startsWith("/adminPanel" ) || location.pathname.startsWith("/emailVerify" )
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
