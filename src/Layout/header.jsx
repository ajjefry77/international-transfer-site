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
import { useContext, useEffect, useRef, useState } from "react";
import { NavDropdown, Offcanvas } from "react-bootstrap";
import { AnimatePresence, useInView } from "framer-motion";
import { motion } from "framer-motion";
import scrollEvent from "../ScrollEvent";
import { Carousel } from "react-bootstrap";
import PageWrapper from "../PageWrapper";

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

const FadeInUpHeader = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 500 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
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
  const [showPageDrop, setShowPageDrop] = useState(false);
  const activeRoute = location.pathname;
  const [activePage, setActivePage] = useState();

  useEffect(() => {
    if (
      activeRoute == "/" ||
      activeRoute == "/aboutUs" ||
      activeRoute == "/contactUs" ||
      activeRoute == "/0to100" ||
      activeRoute == "/loading"
    ) {
      setActivePage(true);
    } else {
      setActivePage(false);
    }
  });

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
    <PageWrapper>
      <div dir={`${lang === "fa" ? "rtl" : lang === "en" && "ltr"}`}>
        {!hideHeaderFooter && (
          <FadeInUpHeader delay={0.3}>
            <div className="container-fluid mt-4 ">
              <div className="d-flex justify-content-center">
                <div className="container-fluid navBar">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex">
                      <div className="tw-w-24 tw-mt-5">
                        <img
                          src={require("../icons/Logo.ico")}
                          alt=""
                          className="tw-w-16"
                        />
                      </div>
                      <div className="tw-w-40 tw-mt-5">
                        <LanguageSelector />
                      </div>
                    </div>

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
                                <Offcanvas.Title
                                  id={`offcanvasNavbarLabel-expand-xl`}
                                >
                                  خدمات شرکت
                                </Offcanvas.Title>
                              </Offcanvas.Header>
                              <Offcanvas.Body className="drawer">
                                <Nav className="justify-content-start pe-3">
                                  <Link
                                    to={""}
                                    className="head-Links nav-links"
                                  >
                                    {t("home-page")}
                                  </Link>
                                  <button
                                    className="btn nav-links h"
                                    onMouseEnter={() =>
                                      setShowHandlingDrop(true)
                                    }
                                    onMouseLeave={() =>
                                      setShowHandlingDrop(false)
                                    }
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
                                    onMouseEnter={() =>
                                      setShowProductDrop(true)
                                    }
                                    onMouseLeave={() =>
                                      setShowProductDrop(false)
                                    }
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
                                          onMouseEnter={() =>
                                            setShowHandlingDrop(true)
                                          }
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
                                                    : lang === "en" &&
                                                      "drop-li-en"
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
                                                    : lang === "en" &&
                                                      "drop-li-en"
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
                                                    : lang === "en" &&
                                                      "drop-li-en"
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
                                                    : lang === "en" &&
                                                      "drop-li-en"
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
                                              : lang === "en" &&
                                                "product-drop-en-phone"
                                          }`}
                                          onMouseEnter={() =>
                                            setShowProductDrop(true)
                                          }
                                          onMouseLeave={() =>
                                            setShowProductDrop(false)
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
                                              to={"/petroProducts"}
                                              className="text-decoration-none text-white"
                                            >
                                              <li
                                                className={`${
                                                  lang === "fa"
                                                    ? "drop-li"
                                                    : lang === "en" &&
                                                      "drop-li-en"
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
                                                    : lang === "en" &&
                                                      "drop-li-en"
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
                                                    : lang === "en" &&
                                                      "drop-li-en"
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
                                                    : lang === "en" &&
                                                      "drop-li-en"
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
                                                    : lang === "en" &&
                                                      "drop-li-en"
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
                                                    : lang === "en" &&
                                                      "drop-li-en"
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

                                  <Link
                                    to={""}
                                    className="head-Links nav-links"
                                  >
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

                                  <Link
                                    to={""}
                                    className="head-Links nav-links"
                                  >
                                    {t("common-q")}
                                  </Link>
                                </Nav>

                                <Button
                                  className="nav-buttons"
                                  onClick={handleSendReq}
                                >
                                  ثبت درخواست
                                </Button>
                              </Offcanvas.Body>
                            </Navbar.Offcanvas>
                          </Container>
                        </Navbar>
                      ) : (
                        <Navbar expand="xl">
                          <Container
                            fluid
                            className="d-flex justify-content-center"
                          >
                            <Nav className=" p-2">
                              <button
                                className={`btn nav-links h ${
                                  activePage && "tw-text-[#a30a24]"
                                }`}
                                onMouseEnter={() => setShowPageDrop(true)}
                                onMouseLeave={() => setShowPageDrop(false)}
                              >
                                {t("pages")}
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

                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                color="#a30a24"
                                className="tw-mt-3"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
                                />
                              </svg>

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

                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                color="#a30a24"
                               className="tw-mt-3"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
                                />
                              </svg>

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

                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                color="#a30a24"
                                className="tw-mt-3"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
                                />
                              </svg>

                              <Link
                                to={"/requestConditions"}
                                className={`head-Links nav-links  ${
                                  activeRoute == "/requestConditions" &&
                                  "tw-text-[#a30a24]"
                                }`}
                              >
                                {t("req-conditions")}
                              </Link>

                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                color="#a30a24"
                                className="tw-mt-3"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
                                />
                              </svg>

                              <Link
                                to={""}
                                className={`head-Links nav-links  ${
                                  activeRoute == "/commonQuestions" &&
                                  "tw-text-[#a30a24]"
                                }`}
                              >
                                {t("common-q")}
                              </Link>
                            </Nav>
                          </Container>
                        </Navbar>
                      )}
                    </div>

                    <div className="d-flex">
                      <div className="tw-w-24 tw-mt-5"></div>
                      <div>
                        <div className="tw-w-40 tw-mt-5">
                          <Button className="nav-buttons" onClick={handleClick}>
                            {t("req-btn")}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
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
                      initial={{ opacity: 0, height: "0px" }}
                      animate={{ opacity: 1, height: "250px" }}
                      exit={{ opacity: 0, height: "0px" }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <ul className="drop-ul">
                        <Link
                          to={""}
                          className="text-decoration-none text-black"
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
                          className="text-decoration-none text-black"
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
                          className="text-decoration-none text-black"
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
                          className="text-decoration-none text-black"
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
                          ? "product-drop"
                          : lang === "en" && "product-drop-en"
                      }`}
                      onMouseEnter={() => setShowProductDrop(true)}
                      onMouseLeave={() => setShowProductDrop(false)}
                      initial={{ opacity: 0, height: "0px" }}
                      animate={{ opacity: 1, height: "290px" }}
                      exit={{ opacity: 0, height: "0px" }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <ul className="drop-ul">
                        <Link
                          to={"/petroProducts"}
                          className="text-decoration-none text-black"
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
                          className="text-decoration-none text-black"
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
                          className="text-decoration-none text-black"
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
                          className="text-decoration-none text-black"
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
                          className="text-decoration-none text-black"
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
                          className="text-decoration-none text-black"
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

                <AnimatePresence>
                  {showPageDrop && (
                    <motion.div
                      className={`${
                        lang === "fa"
                          ? "pages-drop"
                          : lang === "en" && "pages-drop-en"
                      }`}
                      onMouseEnter={() => setShowPageDrop(true)}
                      onMouseLeave={() => setShowPageDrop(false)}
                      initial={{ opacity: 0, height: "0px" }}
                      animate={{ opacity: 1, height: "250px" }}
                      exit={{ opacity: 0, height: "0px" }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <ul className="drop-ul">
                        <li className=" drop-li ">
                          <Link to="/" className="">
                            {t("home-page")}
                          </Link>
                        </li>

                        <Link
                          to={"/aboutUs"}
                          className="text-decoration-none text-black"
                        >
                          <li
                            className={`${
                              lang === "fa"
                                ? "drop-li"
                                : lang === "en" && "drop-li-en"
                            }`}
                          >
                            {t("aboutUs")}
                          </li>
                        </Link>
                        <Link
                          to={"/contactUs"}
                          className="text-decoration-none text-black"
                        >
                          <li
                            className={`${
                              lang === "fa"
                                ? "drop-li"
                                : lang === "en" && "drop-li-en"
                            }`}
                          >
                            {t("contactUs")}
                          </li>
                        </Link>
                        <Link
                          to={"/0to100"}
                          className="text-decoration-none text-black"
                        >
                          <li
                            className={`${
                              lang === "fa"
                                ? "drop-li"
                                : lang === "en" && "drop-li-en"
                            }`}
                          >
                            {t("0to100")}
                          </li>
                        </Link>
                        <Link
                          to={"/loading"}
                          className="text-decoration-none text-black"
                        >
                          <li
                            className={`${
                              lang === "fa"
                                ? "drop-li"
                                : lang === "en" && "drop-li-en"
                            }`}
                          >
                            {t("ladens")}
                          </li>
                        </Link>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="">
                <Carousel fade className="home-carousel">
                  <Carousel.Item>
                    <FadeInUpHeader delay={0.5}>
                      <div
                        id={`${
                          lang == "fa"
                            ? "main-form"
                            : lang == "en" && "main-form-en"
                        }`}
                        dir={`${lang == "fa" ? "rtl" : lang == "en" && "ltr"}`}
                      >
                        <h1 className="main-title">{t("0 to 100")}</h1>
                        <p className="description">{t("top-form-des")}</p>
                      </div>
                    </FadeInUpHeader>

                    <AnimatePresence>
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                      >
                        <div className=" img-container">
                          {lang == "fa" || lang == "" ? (
                            <img
                              src={require("../images/transport.jpg")}
                              className="main-img"
                            />
                          ) : (
                            lang == "en" && (
                              <img
                                src={require("../images/transportEN.jpg")}
                                className="main-img"
                              />
                            )
                          )}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </Carousel.Item>

                  {/* <Carousel.Item>
                    <div
                      id={`${
                        lang == "fa"
                          ? "main-form"
                          : lang == "en" && "main-form-en"
                      }`}
                      dir={`${lang == "fa" ? "rtl" : lang == "en" && "ltr"}`}
                    >
                      <h1 className="main-title">{t("0 to 100")}</h1>
                      <p className="description">{t("top-form-des")}</p>
                      <form className="d-flex"></form>
                    </div>
                    <div className=" img-container">
                      {lang == "fa" || lang == "" ? (
                        <img
                          src={require("../images/slider2.jpg")}
                          className="main-img"
                        />
                      ) : (
                        lang == "en" && (
                          <img
                            src={require("../images/transportEN.jpg")}
                            className="main-img"
                          />
                        )
                      )}
                    </div>
                  </Carousel.Item>

                  <Carousel.Item>
                    <div
                      id={`${
                        lang == "fa"
                          ? "main-form"
                          : lang == "en" && "main-form-en"
                      }`}
                      dir={`${lang == "fa" ? "rtl" : lang == "en" && "ltr"}`}
                    >
                      <h1 className="main-title">{t("0 to 100")}</h1>
                      <p className="description">{t("top-form-des")}</p>
                      <form className="d-flex"></form>
                    </div>
                    <div className="img-container">
                      {lang == "fa" || lang == "" ? (
                        <img
                          src={require("../images/transport.jpg")}
                          className="main-img"
                        />
                      ) : (
                        lang == "en" && (
                          <img
                            src={require("../images/transportEN.jpg")}
                            className="main-img"
                          />
                        )
                      )}
                    </div>
                  </Carousel.Item> */}
                </Carousel>
              </div>
            </div>
          </FadeInUpHeader>
        )}
      </div>
    </PageWrapper>
  );
}

export default Header;
