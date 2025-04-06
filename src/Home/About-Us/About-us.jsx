import React, { useContext } from "react";
import "./About-us.css";
import PageWrapper from "../../PageWrapper";
import { Breadcrumb } from "react-bootstrap";
import { t } from "i18next";
import { Helmet } from "react-helmet-async";
import { LangContext } from "../../contexts/langContext";

const AboutUs = () => {
   const { lang, setLang } = useContext(LangContext);
  return (
    <PageWrapper>
      <Helmet>
        <title>درباره ما</title>
        <meta
          name="description"
          content="کالا ناوگان ابریشم، درباره ما، آمار حمل و نقل ، "
        />
        <meta
          name="keywords"
          content="حمل بار، حمل و نقل، باربری، سفارش کالا ، بازرگانی ، کالا ناوگان ابریشم ، درباره ما ،"
        />
        <meta property="og:title" content="درباره ما" />
        <meta
          property="og:description"
          content="بهترین خدمات حمل و نقل با قیمت مناسب"
        />
        <meta property="og:image" content="logo.ico" />
        <meta property="og:url" content="https://silkfleet.com/" />
      </Helmet>
      <div className="d-flex justify-content-center" dir={`${lang === "fa" ? "rtl" : lang === "en" && "ltr"}`}>
        <div className="aboutUs">
          <div className="container-fluid">
            <div className="row">
              <div className="col-5 mt-5 text-center">
                <div className="">
                  <img
                    src={require("../../images/meeting.png")}
                    alt=""
                    className="about-pic"
                  />
                </div>
                <div className="figure">
                  <div className="container">
                    <div className="row  d-flex justify-content-center">
                      <div className="col-6 features">
                        <div className="text-center mt-3">
                          <h1 className="f-title">{t('aboutUs-figure-title1')}</h1>
                          <p className="f-text">{t('aboutUs-figure-text1')}</p>
                        </div>
                      </div>
                      <div className="col-6 features">
                        <div className="text-center mt-3">
                          <h1 className="f-title">{t('aboutUs-figure-title2')}</h1>
                          <p className="f-text">{t('aboutUs-figure-text2')}</p>
                        </div>
                      </div>
                      <div className="col-6 features">
                        <div className="text-center mt-3">
                          <h1 className="f-title">{t('aboutUs-figure-title3')}</h1>
                          <p className="f-text">{t('aboutUs-figure-text3')}</p>
                        </div>
                      </div>
                      <div className="col-6 features">
                        <div className="text-center mt-3">
                          <h1 className="f-title">{t('aboutUs-figure-title4')}</h1>
                          <p className="f-text">{t('aboutUs-figure-text4')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-7 mt-5 text-center about-text">
                <h1 className="about-h1">{t('aboutUs-title')}</h1>
                <p className="about-p">
                  {t('aboutUs-text')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default AboutUs;
