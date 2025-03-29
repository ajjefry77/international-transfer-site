import React, { useState } from "react";
import "./AdminPanel.css";
import { Offcanvas } from "react-bootstrap";
import UserRequest from "./Admin-Request/Admin-request";
import { useNavigate } from "react-router-dom";
import UserEdit from "./Admin-Edit/Admin-edit";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Cookies from "js-cookie";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};


const AdminPanel = () => {
  const [show, setShow] = useState(false);
  const [route, setRoute] = useState('');
  const navigate = useNavigate()
  const handleClose = () => setShow(false);

  const handleExit = () => {
    Cookies.remove("token");
    document.cookie.split(";").forEach((cookie) => {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      Cookies.remove(name.trim());
    });

    navigate('/')


  }
  return (
    <>
      <div className="d-flex">
        <Offcanvas id='panel-side' show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header>
            <Offcanvas.Title><img src={require("../images/Logo.jpg")} alt="" className="logo" /></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            

            <div className="panel-title">
              <p>منو</p>
              <hr id="panel-hr" />
            </div>

            <div className="panel-list">
              <ul id="panel-ul">
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
                        d="M14 9q-.425 0-.712-.288T13 8V4q0-.425.288-.712T14 3h6q.425 0 .713.288T21 4v4q0 .425-.288.713T20 9zM4 13q-.425 0-.712-.288T3 12V4q0-.425.288-.712T4 3h6q.425 0 .713.288T11 4v8q0 .425-.288.713T10 13zm10 8q-.425 0-.712-.288T13 20v-8q0-.425.288-.712T14 11h6q.425 0 .713.288T21 12v8q0 .425-.288.713T20 21zM4 21q-.425 0-.712-.288T3 20v-4q0-.425.288-.712T4 15h6q.425 0 .713.288T11 16v4q0 .425-.288.713T10 21z"
                      ></path>
                    </svg>{" "}
                    داشبورد
                  </button>
                </li>

                <li className="panel-li">
                  <button className="btn panel-li-btn" onClick={() => {setRoute('request')}}>
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
                    ثبت درخواست جدید
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
                    درخواست های من
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
                        d="m21.7 13.35l-1 1l-2.05-2.05l1-1a.55.55 0 0 1 .77 0l1.28 1.28c.21.21.21.56 0 .77M12 18.94l6.06-6.06l2.05 2.05L14.06 21H12zM12 14c-4.42 0-8 1.79-8 4v2h6v-1.89l4-4c-.66-.08-1.33-.11-2-.11m0-10a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4"
                      ></path>
                    </svg>
                    ویرایش اطلاعات
                  </button>
                </li>

                <li className="panel-li">
                  <button className="btn panel-li-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={30}
                      height={30}
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M0 405.3V448c0 35.3 86 64 192 64s192-28.7 192-64v-42.7C342.7 434.4 267.2 448 192 448S41.3 434.4 0 405.3M320 128c106 0 192-28.7 192-64S426 0 320 0S128 28.7 128 64s86 64 192 64M0 300.4V352c0 35.3 86 64 192 64s192-28.7 192-64v-51.6c-41.3 34-116.9 51.6-192 51.6S41.3 334.4 0 300.4m416 11c57.3-11.1 96-31.7 96-55.4v-42.7c-23.2 16.4-57.3 27.6-96 34.5zM192 160C86 160 0 195.8 0 240s86 80 192 80s192-35.8 192-80s-86-80-192-80m219.3 56.3c60-10.8 100.7-32 100.7-56.3v-42.7c-35.5 25.1-96.5 38.6-160.7 41.8c29.5 14.3 51.2 33.5 60 57.2"
                      ></path>
                    </svg>
                    ویرایش اطلاعات مالی
                  </button>
                </li>
              </ul>
            </div>

            <div className="exit">
              <button className="btn exit-btn" onClick={handleExit()}>
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
                خروج از حساب
              </button>
            </div>
          </Offcanvas.Body>
        </Offcanvas>

        <div className="side-panel ">
          <img src={require("../images/Logo.jpg")} alt="" className="logo" onClick={() => {navigate('/')}}/>

          <div className="panel-title">
            <p>منو</p>
            <hr id="panel-hr" />
          </div>

          <div className="panel-list">
            <ul id="panel-ul">
              <li className="panel-li">
                <button className="btn panel-li-btn" onClick={() => {setRoute('dash')}}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M14 9q-.425 0-.712-.288T13 8V4q0-.425.288-.712T14 3h6q.425 0 .713.288T21 4v4q0 .425-.288.713T20 9zM4 13q-.425 0-.712-.288T3 12V4q0-.425.288-.712T4 3h6q.425 0 .713.288T11 4v8q0 .425-.288.713T10 13zm10 8q-.425 0-.712-.288T13 20v-8q0-.425.288-.712T14 11h6q.425 0 .713.288T21 12v8q0 .425-.288.713T20 21zM4 21q-.425 0-.712-.288T3 20v-4q0-.425.288-.712T4 15h6q.425 0 .713.288T11 16v4q0 .425-.288.713T10 21z"
                    ></path>
                  </svg>{" "}
                  داشبورد
                </button>
              </li>

              <li className="panel-li">
                <button className="btn panel-li-btn" onClick={() => {setRoute('request')}}>
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
                    درخواست های ثبت شده
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
                  درخواست های من
                </button>
              </li>

              <li className="panel-li">
                <button className="btn panel-li-btn" onClick={()=>{setRoute('userEdit')}}>
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
                  ویرایش اطلاعات
                </button>
              </li>

              <li className="panel-li">
                <button className="btn panel-li-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M0 405.3V448c0 35.3 86 64 192 64s192-28.7 192-64v-42.7C342.7 434.4 267.2 448 192 448S41.3 434.4 0 405.3M320 128c106 0 192-28.7 192-64S426 0 320 0S128 28.7 128 64s86 64 192 64M0 300.4V352c0 35.3 86 64 192 64s192-28.7 192-64v-51.6c-41.3 34-116.9 51.6-192 51.6S41.3 334.4 0 300.4m416 11c57.3-11.1 96-31.7 96-55.4v-42.7c-23.2 16.4-57.3 27.6-96 34.5zM192 160C86 160 0 195.8 0 240s86 80 192 80s192-35.8 192-80s-86-80-192-80m219.3 56.3c60-10.8 100.7-32 100.7-56.3v-42.7c-35.5 25.1-96.5 38.6-160.7 41.8c29.5 14.3 51.2 33.5 60 57.2"
                    ></path>
                  </svg>
                  ویرایش اطلاعات مالی
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
              خروج از حساب
            </button>
          </div>
        </div>
        <div className="content">
          <div className="header-panel">
            <button className="btn" onClick={() => {setShow(true)}}>
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
                {route == 'request' ? (
                   <motion.div
                   variants={pageVariants}
                   initial="initial"
                   animate="animate"
                   exit="exit"
                   >
                     <UserRequest/>
                    </motion.div>
                ) : route == 'userEdit' && (
                  <motion.div
                   variants={pageVariants}
                   initial="initial"
                   animate="animate"
                   exit="exit"
                   >
                    <UserEdit/>
                  </motion.div>
                )}
            </AnimatePresence>
            </div>


        </div>
      </div>
    </>
  );
};

export default AdminPanel;
