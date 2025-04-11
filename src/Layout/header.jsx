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
          <div className="navBar row">
            <div className="col-2 d-flex justify-content-center">
              <LanguageSelector />
            </div>

            <div className="col-7 d-flex justify-content-center align-items-center">
              <img
                src={require("../icons/Logo.ico")}
                width={"45px"}
                alt=""
                className="m-2 head-logo"
              />
              <h1 className="head-title">{width > 780 ? t("head-name") : t("head-name-phone")}</h1>
            </div>

            <div className="col-3 d-flex justify-content-center align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                color="white"
                viewBox="0 0 24 24"
                className="nav-icons"
              >
                <path
                  fill="currentColor"
                  d="M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.9 2.9 0 0 0-1.08.703a2.9 2.9 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.9 2.9 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.9 2.9 0 0 0-.703-1.08a2.9 2.9 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4m0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122s-.218 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06s-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.9 4.9 0 0 1-1.772-1.153a4.9 4.9 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.012 15.056 2 14.717 2 12s.01-3.056.06-4.122s.217-1.79.465-2.428a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 5.45 2.525c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2"
                ></path>
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                color="white"
                viewBox="0 0 24 24"
                className="nav-icons"
              >
                <path
                  fill="currentColor"
                  d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                ></path>
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                color="white"
                viewBox="0 0 24 24"
                className="nav-icons"
              >
                <path
                  fill="currentColor"
                  d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"
                ></path>
              </svg>

              <Button
                className="nav-buttons"
                onClick={() => {
                  cookie ? navigate("/adminPanel") : navigate("/auth");
                }}
              >
                {t("login-btn")}
              </Button>
            </div>
          </div>

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
                                  className={`${lang === "fa"
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
                                        className={`${lang === "fa"
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
                                        className={`${lang === "fa"
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
                                        className={`${lang === "fa"
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
                                        className={`${lang === "fa"
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
                                  className={`${lang === "fa"
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
                                        className={`${lang === "fa"
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
                                        className={`${lang === "fa"
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
                                        className={`${lang === "fa"
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
                                        className={`${lang === "fa"
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
                                        className={`${lang === "fa"
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
                                        className={`${lang === "fa"
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

                          <Link to={"/loading"} className="head-Links nav-links">
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

                          <Link to={"/requestConditions"} className="head-Links nav-links">
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

                      <Link to={"/requestConditions"} className="head-Links nav-links">
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
                  className={`${lang === "fa"
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
                        className={`${lang === "fa"
                          ? "drop-li"
                          : lang === "en" && "drop-li-en"
                          }`}
                      >
                        {t("handling-road")}
                      </li>
                    </Link>
                    <Link to={""} className="text-decoration-none text-white">
                      <li
                        className={`${lang === "fa"
                          ? "drop-li"
                          : lang === "en" && "drop-li-en"
                          }`}
                      >
                        {t("handling-subway")}
                      </li>
                    </Link>
                    <Link to={""} className="text-decoration-none text-white">
                      <li
                        className={`${lang === "fa"
                          ? "drop-li"
                          : lang === "en" && "drop-li-en"
                          }`}
                      >
                        {t("handling-sea")}
                      </li>
                    </Link>
                    <Link to={""} className="text-decoration-none text-white">
                      <li
                        className={`${lang === "fa"
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
                  className={`${lang === "fa"
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
                        className={`${lang === "fa"
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
                        className={`${lang === "fa"
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
                        className={`${lang === "fa"
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
                        className={`${lang === "fa"
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
                        className={`${lang === "fa"
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
                        className={`${lang === "fa"
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
