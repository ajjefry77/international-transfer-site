import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { t } from "i18next";
import { LangContext } from "../../contexts/langContext";
import axios from "axios";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "./Loading.css";
import PageWrapper from "../../PageWrapper";

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
  const { lang } = useContext(LangContext);
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
    if (video.length > 0) {
      video.forEach((item, index) => {
        const videoId = `video-${index}`;
        const videoElement = document.getElementById(videoId);

        if (videoElement) {
          const player = videojs(videoElement);

          // ساخت واترمارک
          

          player.ready(() => {
            const container = player.el();
            
            const watermark = document.createElement("img");
            watermark.src = "https://silkfleet.com/php/Logo.png"; // عکس دلخواهت
            
            watermark.style.position = "absolute";
            watermark.style.top = "50%";
            watermark.style.left = "50%";
            watermark.style.transform = "translate(-50%, -50%)";
            watermark.style.opacity = "0.8";
            watermark.style.width = "100px";
            watermark.style.pointerEvents = "none";
            watermark.style.zIndex = "999";
          
            container.appendChild(watermark);
          });
        } else {
          console.warn(`Video element with ID ${videoId} not found`);
        }
      });
    }
  }, [video]);

  return (
    <PageWrapper>
      <Helmet>
        <title>بارگیری ها</title>
        <meta name="description" content="کالا ناوگان ابریشم..." />
        <meta name="keywords" content="حمل بار، حمل و نقل..." />
        <meta property="og:title" content="درباره ما" />
        <meta property="og:description" content="بهترین خدمات حمل و نقل با قیمت مناسب" />
        <meta property="og:image" content="logo.ico" />
        <meta property="og:url" content="https://silkfleet.com/" />
      </Helmet>

      <div className="d-flex justify-content-center" dir={lang === "fa" ? "rtl" : "ltr"}>
        <div className="container-fluid mt-2">
          <div className="row d-flex justify-content-center">
            <h1 className="d-flex justify-content-center">{t("ladens")}</h1>
            <hr />
            {video?.map((item, index) => {
              const videoId = `video-${index}`;
              return width > 780 ? (
                <div className="col-3 bar-video p-0 position-relative" key={item.id}>
                  <video
                    id={videoId}
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
                  <div className="d-flex justify-content-center mt-3">
                    <h1 className="video-text">{item.title}</h1>
                  </div>
                </div>
              ) : (
                <div className="col-12 bar-video p-0 position-relative" key={item.id}>
                  <video
                    id={videoId}
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
                  <div className="d-flex justify-content-center mt-3">
                    <h1 className="video-text">{item.title}</h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Loading;
