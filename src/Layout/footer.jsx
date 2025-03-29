import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Layout.css";
import * as Router from "react-router-dom";
import { t } from "i18next";
import { LangContext } from "../contexts/langContext";

const Footer = () => {
  const location = Router.useLocation();
  const hideHeaderFooter = location.pathname == "/auth";
  const { lang, setLang } = useContext(LangContext);
  return (
    <>
      {!hideHeaderFooter && (
        <>

          <div className="container-fluid" id="footer" dir={lang=='en' ? "ltr" : "rtl"}>
            <div className="row">
              <div className="f-col col-6 col-md-3 ">
                <div className="footer-col">
                  <img
                    src={require("../icons/Logo.ico")}
                    alt=""
                    width={"50px"}
                    style={{ borderRadius: "150px" }}
                  />
                  <p className="col1-p">
                    {t('f-col1-title')}
                  </p>
                  <div className="row">
                    <img
                      src={require("../icons/insta.png")}
                      alt=""
                      className="social"
                    />
                    <img
                      src={require("../icons/tweet.png")}
                      alt=""
                      className="social"
                    />
                    <img
                      src={require("../icons/faceBook.png")}
                      alt=""
                      className="social"
                    />
                  </div>
                </div>
              </div>

              <div className="f-col col-6 col-md-3">
                <div className="footer-col">
                  <p className="col1-p" style={{ color: "white" }}>پیوند های مهم</p>
                  <ul className={"footer-ul"}>
                    <li className='footer-li'>
                      <Link to={"#"} className="Link">
                        پکیج های حمل و نقل
                      </Link>
                    </li>
                    <li className='footer-li'>
                      <Link to={"#"} className="Link">
                        محصولات پتروشیمی
                      </Link>
                    </li>
                    <li className='footer-li'>
                      <Link to={"#"} className="Link">
                        محصولات غذایی
                      </Link>
                    </li>
                    <li className='footer-li'>
                      <Link to={"#"} className="Link">
                        حمل وسایل نقلیه
                      </Link>
                    </li>
                    <li className='footer-li'>
                      <Link to={"#"} className="Link">
                        عضویت به عنوان راننده
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="f-col col-6 col-md-3">
                <div className="footer-col">
                <p className="address">{t('f-col4-address')}</p>
                  <p className="address">{t('f-col4-phone1')}</p>
                  <p className="address">{t('f-col4-phone2')}</p>
                  <p className="address">{t('f-col4-email')}</p>
                </div>
              </div>

              <div className="f-col col-6 col-md-3">
                <div className="footer-col" style={{ color: "white" }}>
                  <p className="col1-p">{t('f-col4-title')}</p>
                  <p className="col1-p">{t('f-col4-mail')}</p>
                  <input type="text" className="form-control mail-inp" />
                  <button className="btn mail-button">
                    <img src={require("../icons/mail.png")} alt="" />
                  </button>
                  
                </div>
              </div>
            </div>
          </div>

          <div className="end-footer">
            <p className="end-p">
             {t('end-title')}
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default Footer;
