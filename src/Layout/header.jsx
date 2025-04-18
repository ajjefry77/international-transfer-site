import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Layout.css";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import * as Router from "react-router-dom";
import Cookies from "js-cookie";
import LanguageSelector from "../Locales/languageSelector";
import { LangContext, ScrollContext } from "../contexts/langContext";
import { useContext, useEffect, useState } from "react";
import { NavDropdown, Offcanvas } from "react-bootstrap";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import scrollEvent from "../ScrollEvent";
import Breadcrumbs from "../BreadCrumb";

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

function Header() {
  const navigate = useNavigate();
  const location = Router.useLocation();
  const cookie = Cookies.get("token");
  const { t } = useTranslation();
  const { lang, setLang } = useContext(LangContext);
  const width = useWindowWidth();
  const [showHandlingDrop, setShowHandlingDrop] = useState(false);
  const [showProductDrop, setShowProductDrop] = useState(false);

  const handleClick = () => {
    scrollEvent.emit("scrollToTarget");
  };

  const hideHeaderFooter = location.pathname === "/auth";

  const handleSendReq = () => {
    if (cookie) {
      navigate("/userPanel");
    } else {
      navigate("/auth");
    }
  };

  return (
    <div dir={`${lang === "fa" ? "rtl" : lang === "en" && "ltr"}`}>
      {!hideHeaderFooter && (
        <div className="container-fluid">
         

          <div className=" d-flex justify-content-center">
            <div id="nav-list">
              {width < 780 ? (
                <Navbar expand="xl">
                  <Container fluid>
                    <Navbar.Toggle
                      aria-controls={`offcanvasNavbar-expand-xl`}
                      id="toggle-btn"
                    />
                    <Navbar.Offcanvas
                      id={`offcanvasNavbar-expand-xl`}
                      aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
                      placement="end"
                    >
                      <Offcanvas.Header>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`}>
                          خدمات شرکت
                        </Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body className="drawer">
                        <Nav className="justify-content-start pe-3">
                          <Link to={""} className="head-Links nav-links">
                            {t("home-page")}
                          </Link>
                          <button
                            className="btn nav-links h"
                            onMouseEnter={() => setShowHandlingDrop(true)}
                            onMouseLeave={() => setShowHandlingDrop(false)}
                          >
                            {t("handling-drop")}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              style={{ margin: "0px" }}
                            >
                              <path
                                fill="currentColor"
                                d="M11.475 14.475L7.85 10.85q-.075-.075-.112-.162T7.7 10.5q0-.2.138-.35T8.2 10h7.6q.225 0 .363.15t.137.35q0 .05-.15.35l-3.625 3.625q-.125.125-.25.175T12 14.7t-.275-.05t-.25-.175"
                              ></path>
                            </svg>
                          </button>

                          <button
                            className="btn nav-links p tex"
                            onMouseEnter={() => setShowProductDrop(true)}
                            onMouseLeave={() => setShowProductDrop(false)}
                          >
                            {t("pro-drop")}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              style={{ margin: "0px" }}
                            >
                              <path
                                fill="currentColor"
                                d="M11.475 14.475L7.85 10.85q-.075-.075-.112-.162T7.7 10.5q0-.2.138-.35T8.2 10h7.6q.225 0 .363.15t.137.35q0 .05-.15.35l-3.625 3.625q-.125.125-.25.175T12 14.7t-.275-.05t-.25-.175"
                              ></path>
                            </svg>
                          </button>

                          <div className=" d-flex justify-content-center">
                            <AnimatePresence>
                              {showHandlingDrop && (
                                <motion.div
                                  className={`${
                                    lang === "fa"
                                      ? "handling-drop-phone"
                                      : lang === "en" &&
                                        "handling-drop-en-phone"
                                  }`}
                                  onMouseEnter={() => setShowHandlingDrop(true)}
                                  onMouseLeave={() =>
                                    setShowHandlingDrop(false)
                                  }
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  transition={{
                                    duration: 0.3,
                                    ease: "easeOut",
                                  }}
                                >
                                  <ul>
                                    <Link
                                      to={""}
                                      className="text-decoration-none text-white"
                                    >
                                      <li
                                        className={`${
                                          lang === "fa"
                                            ? "drop-li"
                                            : lang === "en" && "drop-li-en"
                                        }`}
                                      >
                                        {t("handling-road")}
                                      </li>
                                    </Link>
                                    <Link
                                      to={""}
                                      className="text-decoration-none text-white"
                                    >
                                      <li
                                        className={`${
                                          lang === "fa"
                                            ? "drop-li"
                                            : lang === "en" && "drop-li-en"
                                        }`}
                                      >
                                        {t("handling-subway")}
                                      </li>
                                    </Link>
                                    <Link
                                      to={""}
                                      className="text-decoration-none text-white"
                                    >
                                      <li
                                        className={`${
                                          lang === "fa"
                                            ? "drop-li"
                                            : lang === "en" && "drop-li-en"
                                        }`}
                                      >
                                        {t("handling-sea")}
                                      </li>
                                    </Link>
                                    <Link
                                      to={""}
                                      className="text-decoration-none text-white"
                                    >
                                      <li
                                        className={`${
                                          lang === "fa"
                                            ? "drop-li"
                                            : lang === "en" && "drop-li-en"
                                        }`}
                                      >
                                        {t("handling-mix")}
                                      </li>
                                    </Link>
                                  </ul>
                                </motion.div>
                              )}
                            </AnimatePresence>

                            <AnimatePresence>
                              {showProductDrop && (
                                <motion.div
                                  className={`${
                                    lang === "fa"
                                      ? "product-drop-phone"
                                      : lang === "en" && "product-drop-en-phone"
                                  }`}
                                  onMouseEnter={() => setShowProductDrop(true)}
                                  onMouseLeave={() => setShowProductDrop(false)}
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  transition={{
                                    duration: 0.3,
                                    ease: "easeOut",
                                  }}
                                >
                                  <ul>
                                    <Link
                                      to={"/petroProducts"}
                                      className="text-decoration-none text-white"
                                    >
                                      <li
                                        className={`${
                                          lang === "fa"
                                            ? "drop-li"
                                            : lang === "en" && "drop-li-en"
                                        }`}
                                      >
                                        {t("pro-petro")}
                                      </li>
                                    </Link>
                                    <Link
                                      to={"/foodProducts"}
                                      className="text-decoration-none text-white"
                                    >
                                      <li
                                        className={`${
                                          lang === "fa"
                                            ? "drop-li"
                                            : lang === "en" && "drop-li-en"
                                        }`}
                                      >
                                        {t("pro-eating")}
                                      </li>
                                    </Link>
                                    <Link
                                      to={"/buildProducts"}
                                      className="text-decoration-none text-white"
                                    >
                                      <li
                                        className={`${
                                          lang === "fa"
                                            ? "drop-li"
                                            : lang === "en" && "drop-li-en"
                                        }`}
                                      >
                                        {t("pro-build")}
                                      </li>
                                    </Link>
                                    <Link
                                      to={"/machineProducts"}
                                      className="text-decoration-none text-white"
                                    >
                                      <li
                                        className={`${
                                          lang === "fa"
                                            ? "drop-li"
                                            : lang === "en" && "drop-li-en"
                                        }`}
                                      >
                                        {t("pro-machine")}
                                      </li>
                                    </Link>
                                    <Link
                                      to={"/farmProducts"}
                                      className="text-decoration-none text-white"
                                    >
                                      <li
                                        className={`${
                                          lang === "fa"
                                            ? "drop-li"
                                            : lang === "en" && "drop-li-en"
                                        }`}
                                      >
                                        {t("pro-farm")}
                                      </li>
                                    </Link>
                                    <hr />
                                    <Link
                                      to={"/AllProducts"}
                                      className="text-decoration-none text-white"
                                    >
                                      <li
                                        className={`${
                                          lang === "fa"
                                            ? "drop-li"
                                            : lang === "en" && "drop-li-en"
                                        }`}
                                      >
                                        {t("pro-all")}
                                      </li>
                                    </Link>
                                  </ul>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>

                          <Link to={""} className="head-Links nav-links">
                            {t("0to100")}
                          </Link>

                          <Link
                            to={"/loading"}
                            className="head-Links nav-links"
                          >
                            {t("ladens")}
                          </Link>

                          <Link
                            to={"/aboutUs"}
                            className="head-Links nav-links "
                          >
                            {t("aboutUs")}
                          </Link>

                          <Link
                            to={"/contactUs"}
                            className="head-Links nav-links"
                          >
                            {t("contactUs")}
                          </Link>

                          <Link
                            to={"/requestConditions"}
                            className="head-Links nav-links"
                          >
                            {t("req-conditions")}
                          </Link>

                          <Link to={""} className="head-Links nav-links">
                            {t("common-q")}
                          </Link>
                        </Nav>

                        <Button className="nav-buttons" onClick={handleSendReq}>
                          ثبت درخواست
                        </Button>
                      </Offcanvas.Body>
                    </Navbar.Offcanvas>
                  </Container>
                </Navbar>
              ) : (
                <Navbar expand="xl">
                  <Container fluid>
                    <Nav className="justify-content-start pe-3">
                      <Link to={"/"} className="head-Links nav-links">
                        {t("home-page")}
                      </Link>
                      <button
                        className="btn nav-links h"
                        onMouseEnter={() => setShowHandlingDrop(true)}
                        onMouseLeave={() => setShowHandlingDrop(false)}
                      >
                        {t("handling-drop")}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          style={{ margin: "0px" }}
                        >
                          <path
                            fill="currentColor"
                            d="M11.475 14.475L7.85 10.85q-.075-.075-.112-.162T7.7 10.5q0-.2.138-.35T8.2 10h7.6q.225 0 .363.15t.137.35q0 .05-.15.35l-3.625 3.625q-.125.125-.25.175T12 14.7t-.275-.05t-.25-.175"
                          ></path>
                        </svg>
                      </button>

                      <button
                        className="btn nav-links p"
                        onMouseEnter={() => setShowProductDrop(true)}
                        onMouseLeave={() => setShowProductDrop(false)}
                      >
                        {t("pro-drop")}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          style={{ margin: "0px" }}
                        >
                          <path
                            fill="currentColor"
                            d="M11.475 14.475L7.85 10.85q-.075-.075-.112-.162T7.7 10.5q0-.2.138-.35T8.2 10h7.6q.225 0 .363.15t.137.35q0 .05-.15.35l-3.625 3.625q-.125.125-.25.175T12 14.7t-.275-.05t-.25-.175"
                          ></path>
                        </svg>
                      </button>

                      <Link to={"/0to100"} className="head-Links nav-links">
                        {t("0to100")}
                      </Link>

                      <Link to={"/loading"} className="head-Links nav-links">
                        {t("ladens")}
                      </Link>

                      <Link to={"/aboutUs"} className="head-Links nav-links">
                        {t("aboutUs")}
                      </Link>

                      <Link to={"/contactUs"} className="head-Links nav-links">
                        {t("contactUs")}
                      </Link>

                      <Link
                        to={"/requestConditions"}
                        className="head-Links nav-links"
                      >
                        {t("req-conditions")}
                      </Link>

                      <Link to={""} className="head-Links nav-links">
                        {t("common-q")}
                      </Link>
                    </Nav>
                    <Button className="nav-buttons" onClick={handleClick}>
                      {t("req-btn")}
                    </Button>
                  </Container>
                </Navbar>
              )}
            </div>
          </div>

          <div className=" d-flex justify-content-center">
            <AnimatePresence>
              {showHandlingDrop && (
                <motion.div
                  className={`${
                    lang === "fa"
                      ? "handling-drop"
                      : lang === "en" && "handling-drop-en"
                  }`}
                  onMouseEnter={() => setShowHandlingDrop(true)}
                  onMouseLeave={() => setShowHandlingDrop(false)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <ul>
                    <Link to={""} className="text-decoration-none text-white">
                      <li
                        className={`${
                          lang === "fa"
                            ? "drop-li"
                            : lang === "en" && "drop-li-en"
                        }`}
                      >
                        {t("handling-road")}
                      </li>
                    </Link>
                    <Link to={""} className="text-decoration-none text-white">
                      <li
                        className={`${
                          lang === "fa"
                            ? "drop-li"
                            : lang === "en" && "drop-li-en"
                        }`}
                      >
                        {t("handling-subway")}
                      </li>
                    </Link>
                    <Link to={""} className="text-decoration-none text-white">
                      <li
                        className={`${
                          lang === "fa"
                            ? "drop-li"
                            : lang === "en" && "drop-li-en"
                        }`}
                      >
                        {t("handling-sea")}
                      </li>
                    </Link>
                    <Link to={""} className="text-decoration-none text-white">
                      <li
                        className={`${
                          lang === "fa"
                            ? "drop-li"
                            : lang === "en" && "drop-li-en"
                        }`}
                      >
                        {t("handling-mix")}
                      </li>
                    </Link>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showProductDrop && (
                <motion.div
                  className={`${
                    lang === "fa"
                      ? "product-drop"
                      : lang === "en" && "product-drop-en"
                  }`}
                  onMouseEnter={() => setShowProductDrop(true)}
                  onMouseLeave={() => setShowProductDrop(false)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <ul>
                    <Link
                      to={"/petroProducts"}
                      className="text-decoration-none text-white"
                    >
                      <li
                        className={`${
                          lang === "fa"
                            ? "drop-li"
                            : lang === "en" && "drop-li-en"
                        }`}
                      >
                        {t("pro-petro")}
                      </li>
                    </Link>
                    <Link
                      to={"/foodProducts"}
                      className="text-decoration-none text-white"
                    >
                      <li
                        className={`${
                          lang === "fa"
                            ? "drop-li"
                            : lang === "en" && "drop-li-en"
                        }`}
                      >
                        {t("pro-eating")}
                      </li>
                    </Link>
                    <Link
                      to={"/buildProducts"}
                      className="text-decoration-none text-white"
                    >
                      <li
                        className={`${
                          lang === "fa"
                            ? "drop-li"
                            : lang === "en" && "drop-li-en"
                        }`}
                      >
                        {t("pro-build")}
                      </li>
                    </Link>
                    <Link
                      to={"/machineProducts"}
                      className="text-decoration-none text-white"
                    >
                      <li
                        className={`${
                          lang === "fa"
                            ? "drop-li"
                            : lang === "en" && "drop-li-en"
                        }`}
                      >
                        {t("pro-machine")}
                      </li>
                    </Link>
                    <Link
                      to={"/farmProducts"}
                      className="text-decoration-none text-white"
                    >
                      <li
                        className={`${
                          lang === "fa"
                            ? "drop-li"
                            : lang === "en" && "drop-li-en"
                        }`}
                      >
                        {t("pro-farm")}
                      </li>
                    </Link>
                    <hr />
                    <Link
                      to={"/AllProducts"}
                      className="text-decoration-none text-white"
                    >
                      <li
                        className={`${
                          lang === "fa"
                            ? "drop-li"
                            : lang === "en" && "drop-li-en"
                        }`}
                      >
                        {t("pro-all")}
                      </li>
                    </Link>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        
      )}
    </div>
  );
}

export default Header;
