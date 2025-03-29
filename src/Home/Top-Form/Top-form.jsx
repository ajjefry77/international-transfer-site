import React, { useContext, useEffect, useRef, useState } from "react";
import "./Top-form.css";
import "bootstrap/dist/css/bootstrap.css";
import * as Router from "react-router-dom";
import { Map } from "../../Map/Map";
import axios from "axios";
import PageWrapper from "../../PageWrapper";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import { LangContext } from "../../contexts/langContext";
import scrollEvent from "../../ScrollEvent";

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

const TopForm = () => {
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");
  const { t } = useTranslation();
  const { lang, setLang } = useContext(LangContext);
  const width = useWindowWidth();
  const targetRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      targetRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    scrollEvent.on("scrollToTarget", handleScroll);

    return () => {
      scrollEvent.off("scrollToTarget", handleScroll);
    };
  }, []);



  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   const response = await axios.post("http://localhost:8080/index.php", { tel });
    //   setMessage(response.data.message); // نمایش پیام برگشتی از سرور
    // } catch (error) {
    //   console.error("Error:", error);
    //   setMessage("خطا در ارسال درخواست");
    // }
  };

  return (
    <PageWrapper>
      <div>
        {/* main Form------------- */}
        <div
          id={`${lang == "fa" ? "main-form" : lang == "en" && "main-form-en"}`}
          dir={`${lang == "fa" ? "rtl" : lang == "en" && "ltr"}`}
        >
          <p className="main-title">{t("0 to 100")}</p>
          <p className="description">{t("top-form-des")}</p>
          <form className="d-flex">
            <h2>{message}</h2>
          </form>
        </div>

        {/* main img------------- */}
        <div className="container-fluid img-container">
          {lang == "fa" || lang == "" ? (
            <img
              src={require("../../images/transport.jpg")}
              className="main-img"
            />
          ) : (
            lang == "en" && (
              <img
                src={require("../../images/transportEN.jpg")}
                className="main-img"
              />
            )
          )}
        </div>

        {/* scores------------- */}
        <div className="d-flex">
          <div
            id="scores"
            dir={`${lang == "fa" ? "rtl" : lang == "en" && "ltr"}`}
            className="container-fluid"
          >
            <div className="d-flex justify-content-center w-100">
              <h2 className="s-top-title">{t("s-title")}</h2>
            </div>

            <div className="d-flex justify-content-center">
              <p className="s-top-description">{t("s-description")}</p>
            </div>

            <div>
              <div className="container " id="score-cards">
                <div className="row ">
                  <div className=" col-6 s-col">
                    <div className=" s-card">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={60}
                        height={60}
                        viewBox="0 0 24 24"
                        color="#ab2544"
                        className="s-icon"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeWidth={2}
                        >
                          <path
                            fill="currentColor"
                            fillOpacity={0}
                            strokeDasharray={28}
                            strokeDashoffset={28}
                            d="M12 10l4 7h-8Z"
                          >
                            <animate
                              fill="freeze"
                              attributeName="fill-opacity"
                              begin="0.7s"
                              dur="0.5s"
                              values="0;1"
                            ></animate>
                            <animate
                              fill="freeze"
                              attributeName="stroke-dashoffset"
                              dur="0.4s"
                              values="28;0"
                            ></animate>
                          </path>
                          <path d="M12 10l4 7h-8Z" opacity={0}>
                            <animate
                              attributeName="d"
                              begin="0.4s"
                              dur="0.8s"
                              keyTimes="0;0.25;1"
                              repeatCount="indefinite"
                              values="M12 10l4 7h-8Z;M12 4l9.25 16h-18.5Z;M12 4l9.25 16h-18.5Z"
                            ></animate>
                            <animate
                              attributeName="opacity"
                              begin="0.4s"
                              dur="0.8s"
                              keyTimes="0;0.1;0.75;1"
                              repeatCount="indefinite"
                              values="0;1;1;0"
                            ></animate>
                          </path>
                        </g>
                      </svg>
                      <h2 className={"s-title"}>{t("card-title-secure")}</h2>
                      <p className="s-description">{t("card-des-secure")}</p>
                    </div>

                    <div className=" s-card">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={60}
                        height={60}
                        viewBox="0 0 24 24"
                        color="#ab2544"
                        className="s-icon"
                      >
                        <circle
                          cx={12}
                          cy={9}
                          r={2.5}
                          fill="currentColor"
                          fillOpacity={0}
                        >
                          <animate
                            fill="freeze"
                            attributeName="fill-opacity"
                            begin="0.65s"
                            dur="0.15s"
                            values="0;1"
                          ></animate>
                        </circle>
                        <path
                          fill="currentColor"
                          fillOpacity={0}
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 20.5C12 20.5 11 19 11 18C11 17.5 11.5 17 12 17C12.5 17 13 17.5 13 18C13 19 12 20.5 12 20.5z"
                        >
                          <animate
                            fill="freeze"
                            attributeName="d"
                            dur="0.4s"
                            keyTimes="0;0.7;1"
                            values="M12 20.5C12 20.5 11 19 11 18C11 17.5 11.5 17 12 17C12.5 17 13 17.5 13 18C13 19 12 20.5 12 20.5z;M12 20.5C12 20.5 5 13 5 8C5 4.5 8 1 12 1C16 1 19 4.5 19 8C19 13 12 20.5 12 20.5z;M12 20.5C12 20.5 6 13.5 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9C18 13.5 12 20.5 12 20.5z"
                          ></animate>
                          <animate
                            fill="freeze"
                            attributeName="fill-opacity"
                            begin="0.5s"
                            dur="0.15s"
                            values="0;0.3"
                          ></animate>
                          <animateTransform
                            attributeName="transform"
                            dur="3s"
                            keyTimes="0;0.3;0.4;0.54;0.6;0.68;0.7;1"
                            repeatCount="indefinite"
                            type="rotate"
                            values="0 12 20.5;0 12 20.5;-8 12 20.5;0 12 20.5;5 12 20.5;-2 12 20.5;0 12 20.5;0 12 20.5"
                          ></animateTransform>
                        </path>
                      </svg>
                      <h2 className={"s-title"}>{t("card-title-cheep")}</h2>
                      <p className="s-description">{t("card-des-cheep")}</p>
                    </div>
                  </div>

                  <div className=" col-6 s-col">
                    <div className=" s-card">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={60}
                        height={60}
                        viewBox="0 0 24 24"
                        color="#ab2544"
                        className="s-icon"
                      >
                        <mask id="lineMdCompassLoop0">
                          <g
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                          >
                            <path
                              strokeDasharray={64}
                              strokeDashoffset={64}
                              d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"
                            >
                              <animate
                                fill="freeze"
                                attributeName="stroke-dashoffset"
                                dur="0.6s"
                                values="64;0"
                              ></animate>
                            </path>
                            <path
                              fill="#fff"
                              stroke="none"
                              d="M11 11L12 12L13 13L12 12z"
                              transform="rotate(-180 12 12)"
                            >
                              <animate
                                fill="freeze"
                                attributeName="d"
                                begin="0.6s"
                                dur="0.3s"
                                values="M11 11L12 12L13 13L12 12z;M10.2 10.2L17 7L13.8 13.8L7 17z"
                              ></animate>
                              <animateTransform
                                attributeName="transform"
                                dur="9s"
                                repeatCount="indefinite"
                                type="rotate"
                                values="-180 12 12;0 12 12;0 12 12;0 12 12;0 12 12;270 12 12;-90 12 12;0 12 12;-180 12 12;-35 12 12;-40 12 12;-45 12 12;-45 12 12;-110 12 12;-135 12 12;-180 12 12"
                              ></animateTransform>
                            </path>
                            <circle
                              cx={12}
                              cy={12}
                              r={1}
                              fill="#000"
                              fillOpacity={0}
                              stroke="none"
                            >
                              <animate
                                fill="freeze"
                                attributeName="fill-opacity"
                                begin="0.9s"
                                dur="0.15s"
                                values="0;1"
                              ></animate>
                            </circle>
                          </g>
                        </mask>
                        <rect
                          width={24}
                          height={24}
                          fill="currentColor"
                          mask="url(#lineMdCompassLoop0)"
                        ></rect>
                      </svg>
                      <h2 className={"s-title"}>{t("card-title-trust")}</h2>
                      <p className="s-description">{t("card-des-trust")}</p>
                    </div>

                    <div className=" s-card">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={60}
                        height={60}
                        viewBox="0 0 24 24"
                        color="#ab2544"
                        className="s-icon"
                      >
                        <mask id="lineMdSpeedLoop0">
                          <path
                            fill="none"
                            stroke="#fff"
                            strokeDasharray={56}
                            strokeDashoffset={56}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 19v0c-0.3 0 -0.59 -0.15 -0.74 -0.41c-0.8 -1.34 -1.26 -2.91 -1.26 -4.59c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 1.68 -0.46 3.25 -1.26 4.59c-0.15 0.26 -0.44 0.41 -0.74 0.41Z"
                          >
                            <animate
                              fill="freeze"
                              attributeName="stroke-dashoffset"
                              dur="0.6s"
                              values="56;0"
                            ></animate>
                          </path>
                          <g transform="rotate(-100 12 14)">
                            <path d="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z">
                              <animate
                                fill="freeze"
                                attributeName="d"
                                begin="0.4s"
                                dur="0.2s"
                                values="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z;M16 14C16 16.21 14.21 18 12 18C9.79 18 8 16.21 8 14C8 11.79 12 0 12 0C12 0 16 11.79 16 14Z"
                              ></animate>
                            </path>
                            <path
                              fill="#fff"
                              d="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z"
                            >
                              <animate
                                fill="freeze"
                                attributeName="d"
                                begin="0.4s"
                                dur="0.2s"
                                values="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z;M14 14C14 15.1 13.1 16 12 16C10.9 16 10 15.1 10 14C10 12.9 12 4 12 4C12 4 14 12.9 14 14Z"
                              ></animate>
                            </path>
                            <animateTransform
                              attributeName="transform"
                              begin="0.4s"
                              dur="6s"
                              repeatCount="indefinite"
                              type="rotate"
                              values="-100 12 14;45 12 14;45 12 14;45 12 14;20 12 14;10 12 14;0 12 14;35 12 14;45 12 14;55 12 14;50 12 14;15 12 14;-20 12 14;-100 12 14"
                            ></animateTransform>
                          </g>
                        </mask>
                        <rect
                          width={24}
                          height={24}
                          fill="currentColor"
                          mask="url(#lineMdSpeedLoop0)"
                        ></rect>
                      </svg>
                      <h2 className={"s-title"}>{t("card-title-fast")}</h2>
                      <p className="s-description">{t("card-des-fast")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {width > 1000 && (
            <div
              className="d-flex justify-content-center "
              id="panel-features-1000"
            >
              <div id="panel-features">
                <div className="text-center">
                  <h2 className="p-top-title mt-5">{t("p-title")}</h2>
                </div>

                <div className="text-center d-flex justify-content-center">
                  <p className="p-top-description mt-4">{t("p-description")}</p>
                </div>

                <div className="container">
                  <div className="row mb-5 d-flex justify-content-center">
                    <>
                      <div className="col-6 d-flex justify-content-center features-1000">
                        <div className="text-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="50"
                            height="50"
                            viewBox="0 0 24 24"
                            color="#ab2544"
                          >
                            <path
                              fill="currentColor"
                              fill-opacity="0"
                              d="M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9c0 0 -7.43 -7.79 -8.24 -9c-0.48 -0.71 -0.76 -1.57 -0.76 -2.5c0 -2.49 2.01 -4.5 4.5 -4.5c1.56 0 2.87 0.84 3.74 2c0.76 1 0.76 1 0.76 1Z"
                            >
                              <animate
                                fill="freeze"
                                attributeName="fill-opacity"
                                begin="0.7s"
                                dur="0.5s"
                                values="0;1"
                              />
                            </path>
                            <path
                              fill="none"
                              stroke="currentColor"
                              stroke-dasharray="32"
                              stroke-dashoffset="32"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 8c0 0 0 0 -0.76 -1c-0.88 -1.16 -2.18 -2 -3.74 -2c-2.49 0 -4.5 2.01 -4.5 4.5c0 0.93 0.28 1.79 0.76 2.5c0.81 1.21 8.24 9 8.24 9M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9"
                            >
                              <animate
                                fill="freeze"
                                attributeName="stroke-dashoffset"
                                dur="0.7s"
                                values="32;0"
                              />
                            </path>
                          </svg>
                          <h5 className="mt-2 p-title">{t("p-trust")}</h5>
                          <p className=" p-description">{t("p-des-trust")}</p>
                        </div>
                      </div>

                      <div className="col-6 d-flex justify-content-center features-1000">
                        <div className="text-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="50"
                            height="50"
                            viewBox="0 0 24 24"
                            color="#ab2544"
                          >
                            <mask id="lineMdBeerAltTwotoneLoop0">
                              <g>
                                <g>
                                  <path
                                    fill="none"
                                    stroke="#fff"
                                    stroke-width="2"
                                    d="M18 23c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2"
                                  />
                                  <path
                                    fill="#fff"
                                    fill-opacity="0.3"
                                    d="M18 23c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2v15h25Z"
                                  />
                                  <animateMotion
                                    calcMode="linear"
                                    dur="3s"
                                    path="M0 0h10"
                                    repeatCount="indefinite"
                                  />
                                </g>
                                <animateMotion
                                  fill="freeze"
                                  begin="0.7s"
                                  calcMode="linear"
                                  dur="0.3s"
                                  path="M0 0v-16"
                                />
                              </g>
                            </mask>
                            <path
                              fill="none"
                              stroke="currentColor"
                              stroke-dasharray="64"
                              stroke-dashoffset="64"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M18 3l-2 18h-9l-2 -18Z"
                            >
                              <animate
                                fill="freeze"
                                attributeName="stroke-dashoffset"
                                dur="0.6s"
                                values="64;0"
                              />
                            </path>
                            <path
                              fill="currentColor"
                              d="M18 3l-2 18h-9l-2 -18Z"
                              mask="url(#lineMdBeerAltTwotoneLoop0)"
                            />
                          </svg>
                          <h5 className="mt-2 p-title">{t("p-flex")}</h5>
                          <p className=" p-description">{t("p-des-flex")}</p>
                        </div>
                      </div>

                      <div className="col-6 d-flex justify-content-center features-1000">
                        <div className="text-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="50"
                            height="50"
                            viewBox="0 0 24 24"
                            color="#ab2544"
                          >
                            <g
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                            >
                              <path
                                fill="currentColor"
                                fill-opacity="0"
                                stroke-dasharray="64"
                                stroke-dashoffset="64"
                                d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9"
                              >
                                <animate
                                  fill="freeze"
                                  attributeName="fill-opacity"
                                  begin="0.7s"
                                  dur="0.15s"
                                  values="0;0.3"
                                />
                                <animate
                                  fill="freeze"
                                  attributeName="stroke-dashoffset"
                                  dur="0.6s"
                                  values="64;0"
                                />
                              </path>
                              <path
                                stroke-dasharray="2"
                                stroke-dashoffset="2"
                                d="M9 9v1"
                              >
                                <animate
                                  fill="freeze"
                                  attributeName="stroke-dashoffset"
                                  begin="0.85s"
                                  dur="0.2s"
                                  values="2;0"
                                />
                              </path>
                              <path
                                stroke-dasharray="2"
                                stroke-dashoffset="2"
                                d="M15 9v1"
                              >
                                <animate
                                  fill="freeze"
                                  attributeName="stroke-dashoffset"
                                  begin="1.05s"
                                  dur="0.2s"
                                  values="2;0"
                                />
                              </path>
                              <path
                                stroke-dasharray="12"
                                stroke-dashoffset="12"
                                d="M8 14c0.5 1.5 1.79 3 4 3c2.21 0 3.5 -1.5 4 -3"
                              >
                                <animate
                                  fill="freeze"
                                  attributeName="stroke-dashoffset"
                                  begin="1.25s"
                                  dur="0.2s"
                                  values="12;0"
                                />
                              </path>
                            </g>
                          </svg>
                          <h5 className="mt-2 p-title">{t("p-commitment")}</h5>
                          <p className=" p-description">
                            {t("p-des-commitment")}
                          </p>
                        </div>
                      </div>

                      <div className="col-6 d-flex justify-content-center features-1000">
                        <div className="text-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="50"
                            height="50"
                            viewBox="0 0 24 24"
                            color="#ab2544"
                          >
                            <g
                              fill="none"
                              stroke="currentColor"
                              stroke-dasharray="12"
                              stroke-dashoffset="12"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                            >
                              <path d="M12 2l-7 7M12 2l7 7">
                                <animate
                                  fill="freeze"
                                  attributeName="stroke-dashoffset"
                                  dur="0.3s"
                                  values="12;0"
                                />
                              </path>
                              <path d="M12 8l-7 7M12 8l7 7">
                                <animate
                                  fill="freeze"
                                  attributeName="stroke-dashoffset"
                                  begin="0.3s"
                                  dur="0.3s"
                                  values="12;0"
                                />
                              </path>
                              <path d="M12 14l-7 7M12 14l7 7">
                                <animate
                                  fill="freeze"
                                  attributeName="stroke-dashoffset"
                                  begin="0.6s"
                                  dur="0.3s"
                                  values="12;0"
                                />
                              </path>
                            </g>
                          </svg>
                          <h5 className="mt-2 p-title">{t("p-evolution")}</h5>
                          <p className=" p-description">
                            {" "}
                            {t("p-des-evolution")}
                          </p>
                        </div>
                      </div>
                    </>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* mini map---------- */}
        <div className="d-flex justify-content-center" ref={targetRef}>
          <h2 className="r-top-title">{t("home-req-title")}</h2>
        </div>
        <div id="mini-map">
          <Map />
        </div>

        {/* handling type------ */}
        <div className="d-flex justify-content-center">
          <div id="handling-type">
            <div className="d-flex justify-content-center text-white">
              <h2 className="h-top-title">{t("h-title")}</h2>
            </div>

            <div className="">
              <div className="container-fluid d-flex justify-content-center">
                <div className="row h">
                  <div className="col-6 col-lg-3 handling">
                    <div className="handling-cards">
                      <img
                        src={require("../../images/roadTransport.png")}
                        width={"50%"}
                        style={{ borderRadius: "1000px" }}
                      />
                      <h2 className="mt-4 h-title">{t("h-road")}</h2>
                      <p className="text-center h-link">
                        <Router.Link
                          className="handling-links"
                          to={"/products"}
                        >
                          {t("h-more-info")}
                        </Router.Link>
                      </p>
                    </div>
                  </div>
                  <div className="col-6 col-lg-3 handling">
                    <div className="handling-cards">
                      <img
                        src={require("../../images/railTransport.png")}
                        width={"50%"}
                        style={{ borderRadius: "1000px" }}
                      />
                      <h2 className="mt-4 h-title">{t("h-subway")}</h2>
                      <p className="text-center h-link">
                        <Router.Link
                          className="handling-links"
                          to={"/products"}
                        >
                          {t("h-more-info")}
                        </Router.Link>
                      </p>
                    </div>
                  </div>
                  <div className="col-6 col-lg-3 handling">
                    <div className="handling-cards">
                      <img
                        src={require("../../images/seaTransport.jpg")}
                        width={"50%"}
                        style={{ borderRadius: "1000px" }}
                      />
                      <h2 className="h-title mt-4">{t("h-sea")}</h2>
                      <p className="text-center h-link">
                        <Router.Link
                          className="handling-links"
                          to={"/products"}
                        >
                          {t("h-more-info")}
                        </Router.Link>
                      </p>
                    </div>
                  </div>
                  <div className="col-6 col-lg-3 handling">
                    <div className="handling-cards">
                      <img
                        src={require("../../images/mixedTransport.jpg")}
                        width={"50%"}
                        style={{ borderRadius: "1000px" }}
                      />
                      <h2 className="h-title mt-4">{t("h-mixed")}</h2>
                      <p className="text-center h-link">
                        <Router.Link
                          className="handling-links"
                          to={"/products"}
                        >
                          {t("h-more-info")}
                        </Router.Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* panel features */}
        {width < 1000 && (
          <div className="d-flex justify-content-center mt-4">
            <div id="panel-features">
              <div className="d-flex justify-content-center">
                <h2 className="p-title ">{t("p-title")}</h2>
              </div>

              <div className="container mt-5">
                <div className="row mb-5">
                  <div className="col-3 d-flex justify-content-center mb-5 features-1000">
                    <div className="text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        color="#ab2544"
                        className="p-icon"
                      >
                        <path
                          fill="currentColor"
                          fill-opacity="0"
                          d="M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9c0 0 -7.43 -7.79 -8.24 -9c-0.48 -0.71 -0.76 -1.57 -0.76 -2.5c0 -2.49 2.01 -4.5 4.5 -4.5c1.56 0 2.87 0.84 3.74 2c0.76 1 0.76 1 0.76 1Z"
                        >
                          <animate
                            fill="freeze"
                            attributeName="fill-opacity"
                            begin="0.7s"
                            dur="0.5s"
                            values="0;1"
                          />
                        </path>
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-dasharray="32"
                          stroke-dashoffset="32"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8c0 0 0 0 -0.76 -1c-0.88 -1.16 -2.18 -2 -3.74 -2c-2.49 0 -4.5 2.01 -4.5 4.5c0 0.93 0.28 1.79 0.76 2.5c0.81 1.21 8.24 9 8.24 9M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9"
                        >
                          <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            dur="0.7s"
                            values="32;0"
                          />
                        </path>
                      </svg>
                      <h5 className="mt-2 p-description">{t("p-trust")}</h5>
                    </div>
                  </div>

                  <div className="col-3 d-flex justify-content-center mb-5 features-1000">
                    <div className="text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        color="#ab2544"
                        className="p-icon"
                      >
                        <mask id="lineMdBeerAltTwotoneLoop0">
                          <g>
                            <g>
                              <path
                                fill="none"
                                stroke="#fff"
                                stroke-width="2"
                                d="M18 23c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2"
                              />
                              <path
                                fill="#fff"
                                fill-opacity="0.3"
                                d="M18 23c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2v15h25Z"
                              />
                              <animateMotion
                                calcMode="linear"
                                dur="3s"
                                path="M0 0h10"
                                repeatCount="indefinite"
                              />
                            </g>
                            <animateMotion
                              fill="freeze"
                              begin="0.7s"
                              calcMode="linear"
                              dur="0.3s"
                              path="M0 0v-16"
                            />
                          </g>
                        </mask>
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-dasharray="64"
                          stroke-dashoffset="64"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M18 3l-2 18h-9l-2 -18Z"
                        >
                          <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            dur="0.6s"
                            values="64;0"
                          />
                        </path>
                        <path
                          fill="currentColor"
                          d="M18 3l-2 18h-9l-2 -18Z"
                          mask="url(#lineMdBeerAltTwotoneLoop0)"
                        />
                      </svg>
                      <h5 className="mt-2 p-description">{t("p-flex")}</h5>
                    </div>
                  </div>

                  <div className="col-3 d-flex justify-content-center mb-5 features-1000">
                    <div className="text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        color="#ab2544"
                        className="p-icon"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        >
                          <path
                            fill="currentColor"
                            fill-opacity="0"
                            stroke-dasharray="64"
                            stroke-dashoffset="64"
                            d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9"
                          >
                            <animate
                              fill="freeze"
                              attributeName="fill-opacity"
                              begin="0.7s"
                              dur="0.15s"
                              values="0;0.3"
                            />
                            <animate
                              fill="freeze"
                              attributeName="stroke-dashoffset"
                              dur="0.6s"
                              values="64;0"
                            />
                          </path>
                          <path
                            stroke-dasharray="2"
                            stroke-dashoffset="2"
                            d="M9 9v1"
                          >
                            <animate
                              fill="freeze"
                              attributeName="stroke-dashoffset"
                              begin="0.85s"
                              dur="0.2s"
                              values="2;0"
                            />
                          </path>
                          <path
                            stroke-dasharray="2"
                            stroke-dashoffset="2"
                            d="M15 9v1"
                          >
                            <animate
                              fill="freeze"
                              attributeName="stroke-dashoffset"
                              begin="1.05s"
                              dur="0.2s"
                              values="2;0"
                            />
                          </path>
                          <path
                            stroke-dasharray="12"
                            stroke-dashoffset="12"
                            d="M8 14c0.5 1.5 1.79 3 4 3c2.21 0 3.5 -1.5 4 -3"
                          >
                            <animate
                              fill="freeze"
                              attributeName="stroke-dashoffset"
                              begin="1.25s"
                              dur="0.2s"
                              values="12;0"
                            />
                          </path>
                        </g>
                      </svg>
                      <h5 className="mt-2 p-description">
                        {t("p-commitment")}
                      </h5>
                    </div>
                  </div>

                  <div className="col-3 d-flex justify-content-center mb-5 features-1000">
                    <div className="text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        color="#ab2544"
                        className="p-icon"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          stroke-dasharray="12"
                          stroke-dashoffset="12"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        >
                          <path d="M12 2l-7 7M12 2l7 7">
                            <animate
                              fill="freeze"
                              attributeName="stroke-dashoffset"
                              dur="0.3s"
                              values="12;0"
                            />
                          </path>
                          <path d="M12 8l-7 7M12 8l7 7">
                            <animate
                              fill="freeze"
                              attributeName="stroke-dashoffset"
                              begin="0.3s"
                              dur="0.3s"
                              values="12;0"
                            />
                          </path>
                          <path d="M12 14l-7 7M12 14l7 7">
                            <animate
                              fill="freeze"
                              attributeName="stroke-dashoffset"
                              begin="0.6s"
                              dur="0.3s"
                              values="12;0"
                            />
                          </path>
                        </g>
                      </svg>
                      <h5 className="mt-2 p-description">{t("p-evolution")}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* driver request */}
        <div className="d-flex justify-content-center" dir={lang=='en' ? "ltr" : "rtl"}>
          <div className="container-fluid driver-container">
            <div className="row">
              <div className="col-6 driver-form">
                <div className="mt-5">
                  <h2 className="d-title">{t("d-title")}</h2>
                  <p className="d-description">{t("d-description")}</p>
                  <ul>
                    <li className="d-li">{t("d-li-1")}</li>
                    <li className="d-li">{t("d-li-2")}</li>
                    <li className="d-li">{t("d-li-3")}</li>
                  </ul>

                  <button type="button" className="btn home-buttons d mt-3">
                  {t('req-btn')}
                  </button>
                </div>
              </div>
              <div className="col-6 driver-img">
                <img
                  src={require("../../images/driver.png")}
                  alt=""
                  className="d-img"
                />
              </div>
            </div>
          </div>
        </div>

        {/* countries */}
      </div>
    </PageWrapper>
  );
};

export default TopForm;
