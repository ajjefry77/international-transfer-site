import React from "react";
import "./About-us.css";
import PageWrapper from "../../PageWrapper";

const AboutUs = () => {
  return (
    <PageWrapper>
      <div className="d-flex justify-content-center">
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
                  <div className="row">
                    <div className="col-6 features">
                      <div className="text-center mt-3">
                        <h1 className="f-title">۴۲</h1>
                        <p className="f-text">پروژه بین المللی</p>
                      </div>
                    </div>
                    <div className="col-6 features">
                      <div className="text-center mt-3">
                        <h1 className="f-title">+۳.۵</h1>
                        <p className="f-text">سال تجربه</p>
                      </div>
                    </div>
                    <div className="col-6 features">
                      <div className="text-center mt-3">
                        <h2 className="f-title">+۱۰,۰۰۰</h2>
                        <p className="f-text">راننده ماهر</p>
                      </div>
                    </div>
                    <div className="col-6 features">
                      <div className="text-center mt-3">
                        <h3 className="f-title">+۷,۰۰۰,۰۰۰</h3>
                        <p className="f-text">خدمات رسانی موفق</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-7 mt-5 text-center about-text">
              <h1 className="about-h1">همه چیز درباره ما</h1>
              <p className="about-p">
              کالا ناوگان ابریشم، با الهام از میراث تاریخی راه ابریشم، در سال ۱۴۰۰ متولد شد. همانگونه که کاروان های ابریشم، تمدنها را به هم پیوند می دادند، ما هم امروزه با ناوگانی مدرن، مرزهای جغرافیایی را درمی نوردیم تا تجارت جهانی را برای کسب وکارها ساده، امن و سریع سازیم.
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
