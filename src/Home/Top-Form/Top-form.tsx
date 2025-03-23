import React, { useState } from "react";
import "./Top-form.css";
import "bootstrap/dist/css/bootstrap.css";
import * as Router from "react-router-dom";
import { Map } from "../../Map/Map";
import axios from "axios";
import PageWrapper from "../../PageWrapper";

const TopForm = () => {
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async(e:any) => {
    e.preventDefault()

    // try {
    //   const response = await axios.post("http://localhost:8080/index.php", { tel });
    //   setMessage(response.data.message); // نمایش پیام برگشتی از سرور
    // } catch (error) {
    //   console.error("Error:", error);
    //   setMessage("خطا در ارسال درخواست");
    // }
    
  }


  return (
    <PageWrapper>
      <div>
        {/* main Form------------- */}
        <div id="main-form">
          <p className="main-title">۰ تا ۱۰۰ هر چیزی که شما بخواهید</p>
          <p className="description">
            شرکت کالا ناوگان ابریشم ۰ تا ۱۰۰ حمل و نقل و یا سفارش محصولات و کالا هایی که شما بخواهید را انجام میدهد برای دریافت اطلاعات بیشتر و مشاوره با کارشناسان ما شماره همراه خود را وارد کنید
          </p>
          <form className="d-flex">
          <input
            type="email"
            className="form-control inp"
            id="tel-input"
            name="tel"
            value={tel}
            placeholder="شماره همراه خود را وارد کنید..."
            onChange={(e) => setTel(e.target.value)}
          />
          <button type="submit" className="btn home-buttons" onClick={handleSubmit}>
            ارسال کد تایید
          </button>
          <h2>{message}</h2>

        </form>
        </div>

        {/* main img------------- */}
        <div className="container-fluid img-container">
          <img src={require("../../images/main.png")} className="main-img" />
        </div>

        {/* companies-----------
      <div className="d-flex justify-content-center container-fluid companies">
        <ul className="companies-list row">
          <li className="companies-list-items col-md-1 col-sm-3">یوبی سافت</li>
          <li className="companies-list-items col-md-1 col-sm-3">نایک</li>
          <li className="companies-list-items col-md-1 col-sm-3">مایکروسافت</li>
          <li className="companies-list-items col-md-1 col-sm-3">گوگل</li>
          <li className="companies-list-items col-md-1 col-sm-3">اپیک گیمز</li>
          <li className="companies-list-items col-md-1 col-sm-3">کاکتوس جک</li>
        </ul>
      </div> */}

        {/* scores------------- */}
        <div id="scores">
          <div className="d-flex justify-content-center w-100">
            <h2 className="title">
              جزو بهترین و امن ترین سیتم حمل و نقل در کشور
            </h2>
          </div>

          <div className="d-flex justify-content-center">
            <p className="s-top-description">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است نیاز ابزارهای کاربردی می باشد.
            </p>
          </div>

          <div id="scores-cards">
            <div className="container">
              <div className="row ">
                <div className="col-lg-5 col-6 s-col">
                  <div className="mt-5 s-card ms-5">
                    <img src={require("../../icons/Group16.png")} alt="" className="s-icon" />
                    <h2 className={'s-title'}>امن ترین سیستم</h2>
                    <p className="s-description">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                    </p>
                  </div>

                  <div className="mt-5 s-card">
                    <img src={require("../../icons/Vector.png")} alt="" className="s-icon" />
                    <h2 className={'s-title'}> ارزان ترین معامله</h2>
                    <p className="s-description">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                    </p>
                  </div>
                    <button type="button" className="btn home-buttons s me-0">
                      بیشتر بدانید
                    </button>
                  
                </div>

                <div className="col-lg-5 col-6 s-col">
                  <div className="mt-5 s-card">
                    <img src={require("../../icons/trust.png")} alt="" className="s-icon" />
                    <h2 className={'s-title'}> قابل اعتمادترین</h2>
                    <p className="s-description">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                    </p>
                  </div>

                  <div className="mt-5 s-card">
                    <img src={require("../../icons/Layer2.png")} alt="" className="s-icon time" />
                    <h2 className={'s-title'}>سریعترین روش</h2>
                    <p className="s-description">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                    </p>
                  </div>
                </div>

                <div className="col-sm-12 col-xxl-2 mb-5 s-img">
                  <img
                    src={require("../../images/Group.png")}
                    alt=""
                    
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* handling type------ */}

        <div id="handling-type">
          <div className="d-flex justify-content-center ">
            <h2 className="title">
              {" "}
              حمل و نقل متناسب با نیازهای صنعت خود را کشف کنید{" "}
            </h2>
          </div>

          <div className="mt-5 ">
            <div className="container-fluid d-flex justify-content-center">
              <div className="row ">
                <div className="col-4 handling">
                  <div className="handling-cards">
                    <img
                      src={require("../../images/transit.png")}
                      width={"90%"}
                    />
                    <h2 className="mt-4 h-title">حمل و نقل جاده ای</h2>
                    <p className="text-center h-link">
                      <Router.Link className="handling-links" to={"/products"}>
                        بیشتر بدانید....
                      </Router.Link>
                    </p>
                  </div>
                </div>
                <div className="col-4 handling">
                  <div className="handling-carde">
                    <img
                      src={require("../../images/subway.png")}
                      width={"90%"}
                    />
                    <h2 className="mt-4 h-title">حمل و نقل ریلی</h2>
                    <p className="text-center h-link">
                      <Router.Link className="handling-links" to={"/products"}>
                        بیشتر بدانید....
                      </Router.Link>
                    </p>
                  </div>
                </div>
                <div className="col-4 handling">
                  <div className="handling-cards">
                    <img
                      src={require("../../images/waterWay.png")}
                      width={"90%"}
                    />
                    <h2 className="h-title mt-2">حمل و نقل دریایی</h2>
                    <p className="text-center h-link">
                      <Router.Link className="handling-links" to={"/products"}>
                        بیشتر بدانید....
                      </Router.Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* mini map---------- */}
        <div className="d-flex justify-content-center">
          <h2 className="title "> درخواست محصول پیشنهادی</h2>
        </div>
        <div id="mini-map">
          <Map />
        </div>

        {/* panel features */}
        <div id="panel-features">
          <div className="d-flex justify-content-center">
            <h2 className="title ">ویژگی های پنل</h2>
          </div>
          <div className="d-flex justify-content-center">
            <p className="">ویژگی های پنل کاربری شما در سایت</p>
          </div>

          <div className="container mt-5">
            <div className="row mb-5">

              <div className="col-4 col-lg-4 d-flex justify-content-center mb-5">
                <div className="text-center">
                  <img src={require("../../icons/lock.png")} alt="" />
                  <h5 className="mt-2 p-description">امنیت حساب</h5>
                </div>
              </div>

              <div className="col-4 col-lg-4 d-flex justify-content-center mb-5">
                <div className="text-center">
                  <img src={require("../../icons/figures.png")} alt="" />
                  <h5 className="mt-2 p-description">آمار دقیق</h5>
                </div>
              </div>

              <div className="col-4 col-lg-4 d-flex justify-content-center mb-5">
                <div className="text-center">
                  <img src={require("../../icons/location.png")} alt="" />
                  <h5 className="mt-2 p-description">ثبت درخواست و رهگیری</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* driver request */}
        <div>
          <div className="container-fluid driver-container">
            <div className="row">
              <div className="col-6 driver-form">
                <div className="mt-5">
                  <h2 className="d-title">برای پیوستن به عنوان راننده اقدام کنید!</h2>
                  <p className="d-description">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است.
                  </p>
                  
                  <button type="button" className="btn home-buttons d mt-3">
                    ثبت درخواست
                  </button>
                  
                </div>
              </div>
              <div className="col-6 driver-img">
                <img src={require("../../images/driver.png")} alt="" className="d-img"/>
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
