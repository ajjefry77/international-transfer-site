import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";
import { Button } from "react-bootstrap";
import SignIn from "./Sign-in/Sign-in";
import Login from "./Login/Login";
import TelVerify from "./Tel-Verify/Tel-verify";
import PageWrapper from "../PageWrapper";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};
const Auth = () => {
  const [telCode, setTelCode] = useState(false);
  const [activeComp, setActiveComp] = useState("sign");

  const handleSetSign = () => {
    setActiveComp("sign");
  };
  const handleSetLog = () => {
    setActiveComp("log");
  };
  return (
    <PageWrapper>
      <div>
        <div className="container-fluid">
          <div className="d-flex justify-content-end">
            <h6>بازگشت به سایت</h6>
            <Link to={"/"} className="btn back-button">
              <img src={require("../icons/arrow.png")} alt="" />
            </Link>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div className="form">
            {!telCode ? (
              <>
                <div className="d-flex justify-content-center">
                  <img
                    src={require("../images/Logo.jpg")}
                    alt=""
                    width={"70px"}
                    height={"70px"}
                    className="Logo"
                  />
                </div>
                <div className="d-flex justify-content-center mt-5">
                  <Button className="sign-button" onClick={handleSetSign}>
                    ثبت نام
                  </Button>
                  <Button className="log-button" onClick={handleSetLog}>
                    ورود
                  </Button>
                </div>
                <AnimatePresence mode="wait">
                  {activeComp === "sign" ? (
                    <motion.div
                      variants={pageVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      <div className="d-flex justify-content-center mt-5">
                        <SignIn telCode={telCode} setTelCode={setTelCode} />
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      variants={pageVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      <div className="d-flex justify-content-center mt-5">
                        <Login />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <>
                <AnimatePresence mode="wait">
                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <TelVerify />
                  </motion.div>
                </AnimatePresence>
              </>
            )}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Auth;
