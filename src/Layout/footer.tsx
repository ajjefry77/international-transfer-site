import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css";
import * as Router from "react-router-dom";

const Footer = () => {
  const location = Router.useLocation();
  const hideHeaderFooter = location.pathname == "/auth";
  return (
    <>
      {!hideHeaderFooter && (
        <>
          <div className="container-fluid" id="footer">
            <div className="row">
              <div className="col-3 ">
                <div className="footer-col">
                  <img
                    src={require("../images/Logo.jpg")}
                    alt=""
                    width={"45px"}
                    style={{ borderRadius: "1000px" }}
                  />
                  <p style={{ color: "white", marginTop: "10px" }}>
                    تیم متخصص ما متعهد به ارایٌه است
                  </p>
                  <h6 style={{ color: "white" }}>سریع ، مطمئن ، به صرفه</h6>
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

              <div className="col-3">
                <div className="footer-col">
                  <p style={{ color: "white" }}>پیوند های مهم</p>
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

              <div className="col-3">
                <div className="footer-col">
                  <p style={{ color: "white" }}>پیوند های مهم</p>
                  <ul className={"footer-ul"}>
                    <li className='footer-li'>
                      <Link to={"#"} className="Link">
                        قوانین و مقررات
                      </Link>
                    </li>
                    <li className='footer-li'>
                      <Link to={"#"} className="Link">
                        عوامل
                      </Link>
                    </li>
                    <li className='footer-li'>
                      <Link to={"#"} className="Link">
                        درباره ما
                      </Link>
                    </li>
                    <li className='footer-li'>
                      <Link to={"#"} className="Link">
                        ارتباط با ما
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-3">
                <div className="footer-col" style={{ color: "white" }}>
                  <p>جهت اطلاع از آخرین اخبار</p>
                  <p>ایمیل خود را وارد کنید:</p>
                  <input type="text" className="form-control mail-inp" />
                  <button className="btn mail-button">
                    <img src={require("../icons/mail.png")} alt="" />
                  </button>
                  <div className="row">
                    <img
                      src={require("../images/image2.png")}
                      alt=""
                      className="docs"
                    />
                    <img
                      src={require("../images/eNamad.png")}
                      alt=""
                      className="docs"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="end-footer">
            <p>
              کليه حقوق محصولات و محتوای اين سایت متعلق به شرکت کالا ناوگان
              ابریشم می باشد و هر گونه کپی برداری، غیرمجاز و پیگرد قانونی دارد.
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default Footer;
