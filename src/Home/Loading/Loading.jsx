import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import PageWrapper from "../../PageWrapper";
import { Helmet } from "react-helmet-async";
import { t } from "i18next";
import { LangContext } from "../../contexts/langContext";
import Swal from "sweetalert2";
import axios from "axios";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "./Loading.css";

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};
const Loading = () => {
  const { lang, setLang } = useContext(LangContext);
  const [video, setVideo] = useState([]);
  const width = useWindowWidth();

  useEffect(() => {
    axios
      .get("https://silkfleet.com/php/showbargiri.php")
      .then((response) => {
        console.log("API Response:", response.data);
        setVideo(response.data[0]);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const videoElement = document.getElementById("my-video");
      if (videoElement) {
        const player = videojs(videoElement);
      } else {
        console.log("Video element not found!");
      }
    }, 500); // تأخیر برای اطمینان از بارگذاری ویدیو
  }, []);

  return (
    <PageWrapper>
      <Helmet>
        <title>بارگیری ها</title>
        <meta
          name="description"
          content="کالا ناوگان ابریشم،تماس با ما ، آمار حمل و نقل ، پشتیبانی ، سوالات "
        />
        <meta
          name="keywords"
          content="حمل بار، حمل و نقل، باربری، سفارش کالا ، بازرگانی ، کالا ناوگان ابریشم ، تماس با ما ، پشتیبانی"
        />
        <meta property="og:title" content="درباره ما" />
        <meta
          property="og:description"
          content="بهترین خدمات حمل و نقل با قیمت مناسب"
        />
        <meta property="og:image" content="logo.ico" />
        <meta property="og:url" content="https://silkfleet.com/" />
      </Helmet>
      <div
        className="d-flex justify-content-center "
        dir={`${lang === "fa" ? "rtl" : lang === "en" && "ltr"}`}
      >
        <div className="container-fluid mt-2">
          <div className="row d-flex justify-content-center">
            <h1 className="d-flex justify-content-center">
              {t("ladens")}{" "}
             
            </h1>
            <hr />
            {video?.map((item) =>
              width > 780 ? (
                <div className=" col-3 bar-video p-0" key={item.id}>
                  <video
                    id="my-video"
                    className="video-js vjs-default-skin"
                    controls
                    preload="auto"
                    width="300"
                    height="500"
                  >
                    <source
                      src={`https://silkfleet.com/php/bargirivideos/${item.video}`}
                      type="video/mp4"
                    />
                  </video>

                  <div className=" d-flex justify-content-center mt-3">
                    <h1 className="video-text">{item.title}</h1>
                  </div>
                </div>
              ) : (
                <div className=" col-12 bar-video p-0" key={item.id}>
                  <video
                    id="my-video"
                    className="video-js vjs-default-skin"
                    controls
                    preload="auto"
                    width="300"
                    height="500"
                  >
                    <source
                      src={`https://silkfleet.com/php/bargirivideos/${item.video}`}
                      type="video/mp4"
                    />
                  </video>

                  <div className="d-flex justify-content-center">
                    <h1 className="card-title">{item.title}</h1>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Loading;
