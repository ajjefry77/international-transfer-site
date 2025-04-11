import React, { useState } from "react";
import "./UserPanel.css";
import { Offcanvas } from "react-bootstrap";
import UserRequest from "./User-Request/User-request";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import UserEdit from "./User-Edit/User-edit";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { t } from "i18next";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

const UserPanel = () => {
  const [show, setShow] = useState(false);
  const [route, setRoute] = useState("request");
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const { id } = useParams();
  const location = useLocation();
  const { name, country } = location.state || {};
  return (
    <>
      <div className="d-flex panel">
        <Offcanvas
          id="panel-side"
          show={show}
          onHide={handleClose}
          placement="end"
        >
          <Offcanvas.Header>
            <Offcanvas.Title>
              <img
                src={require("../images/Logo.jpg")}
                alt=""
                className="logo"
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="panel-title">
              <p>{t('user-panel-menu')}</p>
              <hr id="panel-hr" />
            </div>

            <div className="panel-list">
              <ul id="panel-ul">
                <li className="panel-li">
                  <button
                    className="btn panel-li-btn"
                    onClick={() => {
                      setRoute("request");
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={30}
                      height={30}
                      viewBox="0 0 48 48"
                    >
                      <defs>
                        <mask id="ipSAddOne0">
                          <g fill="none" strokeLinejoin="round" strokeWidth={4}>
                            <path
                              fill="#fff"
                              stroke="#fff"
                              d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"
                            ></path>
                            <path
                              stroke="#000"
                              strokeLinecap="round"
                              d="M24 16v16m-8-8h16"
                            ></path>
                          </g>
                        </mask>
                      </defs>
                      <path
                        fill="currentColor"
                        d="M0 0h48v48H0z"
                        mask="url(#ipSAddOne0)"
                      ></path>
                    </svg>
                    {t('user-panel-submit')}
                  </button>
                </li>

                <li className="panel-li">
                  <button className="btn panel-li-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={30}
                      height={30}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M5 21V5q0-.825.588-1.412T7 3h10q.825 0 1.413.588T19 5v16l-7-3z"
                      ></path>
                    </svg>
                    {t('user-panel-reqs')}
                  </button>
                </li>

                <li className="panel-li">
                  <button
                    className="btn panel-li-btn"
                    onClick={() => {
                      setRoute("user-edit");
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={30}
                      height={30}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M5 21V5q0-.825.588-1.412T7 3h10q.825 0 1.413.588T19 5v16l-7-3z"
                      ></path>
                    </svg>
                    {t('user-panel-edit')}
                  </button>
                </li>
              </ul>
            </div>

            <div className="exit">
              <button className="btn exit-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                    <path
                      fill="currentColor"
                      d="M12 2.5a1.5 1.5 0 0 1 0 3H7a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h4.5a1.5 1.5 0 0 1 0 3H7A3.5 3.5 0 0 1 3.5 18V6A3.5 3.5 0 0 1 7 2.5Zm6.06 5.61l2.829 2.83a1.5 1.5 0 0 1 0 2.12l-2.828 2.83a1.5 1.5 0 1 1-2.122-2.122l.268-.268H12a1.5 1.5 0 0 1 0-3h4.207l-.268-.268a1.5 1.5 0 1 1 2.122-2.121Z"
                    ></path>
                  </g>
                </svg>
                {t('user-panel-exit')}
              </button>
            </div>
          </Offcanvas.Body>
        </Offcanvas>

        <div className="side-panel ">
          <img
            src={require("../images/Logo.jpg")}
            alt=""
            className="logo"
            onClick={() => {
              navigate("/");
            }}
          />

          <div className="panel-title">
            <p>{t('user-panel-menu')}</p>
            <hr id="panel-hr" />
          </div>

          <div className="panel-list">
            <ul id="panel-ul">
              <li className="panel-li">
                <button
                  className="btn panel-li-btn"
                  onClick={() => {
                    setRoute("request");
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    viewBox="0 0 48 48"
                  >
                    <defs>
                      <mask id="ipSAddOne0">
                        <g fill="none" strokeLinejoin="round" strokeWidth={4}>
                          <path
                            fill="#fff"
                            stroke="#fff"
                            d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"
                          ></path>
                          <path
                            stroke="#000"
                            strokeLinecap="round"
                            d="M24 16v16m-8-8h16"
                          ></path>
                        </g>
                      </mask>
                    </defs>
                    <path
                      fill="currentColor"
                      d="M0 0h48v48H0z"
                      mask="url(#ipSAddOne0)"
                    ></path>
                  </svg>
                  {t('user-panel-submit')}
                </button>
              </li>

              <li className="panel-li">
                <button className="btn panel-li-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M5 21V5q0-.825.588-1.412T7 3h10q.825 0 1.413.588T19 5v16l-7-3z"
                    ></path>
                  </svg>
                  {t('user-panel-reqs')}
                </button>
              </li>

              <li className="panel-li">
                <button
                  className="btn panel-li-btn"
                  onClick={() => {
                    setRoute("user-edit");
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m21.7 13.35l-1 1l-2.05-2.05l1-1a.55.55 0 0 1 .77 0l1.28 1.28c.21.21.21.56 0 .77M12 18.94l6.06-6.06l2.05 2.05L14.06 21H12zM12 14c-4.42 0-8 1.79-8 4v2h6v-1.89l4-4c-.66-.08-1.33-.11-2-.11m0-10a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4"
                    ></path>
                  </svg>
                  {t('user-panel-edit')}
                </button>
              </li>
            </ul>
          </div>

          <div className="exit">
            <button className="btn exit-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                  <path
                    fill="currentColor"
                    d="M12 2.5a1.5 1.5 0 0 1 0 3H7a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h4.5a1.5 1.5 0 0 1 0 3H7A3.5 3.5 0 0 1 3.5 18V6A3.5 3.5 0 0 1 7 2.5Zm6.06 5.61l2.829 2.83a1.5 1.5 0 0 1 0 2.12l-2.828 2.83a1.5 1.5 0 1 1-2.122-2.122l.268-.268H12a1.5 1.5 0 0 1 0-3h4.207l-.268-.268a1.5 1.5 0 1 1 2.122-2.121Z"
                  ></path>
                </g>
              </svg>
              {t('user-panel-exit')}
            </button>
          </div>
        </div>

        <div className="content">
          <div className="header-panel">
            <button
              className="btn"
              onClick={() => {
                setShow(true);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={35}
                height={35}
                className="menu-icon"
                display={"none"}
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 17h14M5 12h14M5 7h14"
                ></path>
              </svg>
            </button>

            <input
              type="text"
              className="form-control"
              id="search-inp"
              name="tel"
              placeholder="جستجو کنید..."
            />
          </div>

          <div className="panel-routes">
            <AnimatePresence mode="wait">
              {route == "request" ? (
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <UserRequest name={name} country={country} />
                </motion.div>
              ) : (
                route == "user-edit" && (
                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <UserEdit />
                  </motion.div>
                )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPanel;
