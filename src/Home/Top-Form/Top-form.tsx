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
          <p className="main-title">۰ تا ۱۰۰ هر چیزی که شما بخاهید</p>
          <p className="description">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز
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
          <div className="d-flex justify-content-center">
            <h2 className="title">
              جزو بهترین و امن ترین سیتم حمل و نقل در کشور
            </h2>
          </div>

          <div className="d-flex justify-content-center">
            <p className="top-description">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است نیاز ابزارهای کاربردی می باشد.
            </p>
          </div>

          <div id="scores-cards">
            <div className="container">
              <div className="row ">
                <div className="col-5 ">
                  <div className="mt-5">
                    <img src={require("../../icons/Group16.png")} alt="" />
                    <h2>امن ترین سیستم</h2>
                    <p className="description">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                    </p>
                  </div>

                  <div className="mt-5">
                    <img src={require("../../icons/Vector.png")} alt="" />
                    <h2> ارزان ترین معامله</h2>
                    <p className="description">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                    </p>
                  </div>

                  <div className="">
                    <button type="button" className="btn home-buttons me-0">
                      بیشتر بدانید
                    </button>
                  </div>
                </div>

                <div className="col-5">
                  <div className="mt-5">
                    <img src={require("../../icons/trust.png")} alt="" />
                    <h2> قابل اعتمادترین</h2>
                    <p className="description">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                    </p>
                  </div>

                  <div className="mt-5">
                    <img src={require("../../icons/Layer2.png")} alt="" />
                    <h2>سریعترین روش</h2>
                    <p className="description">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                    </p>
                  </div>
                </div>

                <div className="col-sm-12 col-xxl-2 mb-5">
                  <img
                    src={require("../../images/Group.png")}
                    alt=""
                    height={"560px"}
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

          <div className="mt-5">
            <div className="container">
              <div className="row">
                <div className="col-4 handling">
                  <div className="handling-cards">
                    <img
                      src={require("../../images/transit.png")}
                      width={"90%"}
                    />
                    <h2 className="mt-4">حمل و نقل جاده ای</h2>
                    <p className="text-center">
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
                    <h2 className="mt-4">حمل و نقل ریلی</h2>
                    <p className="text-center">
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
                    <h2>حمل و نقل دریایی</h2>
                    <p className="text-center">
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
          <h2 className="title ">بررسی ارزان ترین و منطقی ترین حمل و نقل</h2>
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
            <p className="">لورم ایپسوم متن ساختگی از طراحان گرافیک است</p>
          </div>

          <div className="container mt-5">
            <div className="row mb-5">

              <div className="col-4 col-lg-4 d-flex justify-content-center mb-5">
                <div className="text-center">
                  <img src={require("../../icons/lock.png")} alt="" />
                  <h5>سیستم ردیابی زنده</h5>
                </div>
              </div>

              <div className="col-4 col-lg-4 d-flex justify-content-center mb-5">
                <div className="text-center">
                  <img src={require("../../icons/figures.png")} alt="" />
                  <h5>سیستم ردیابی زنده</h5>
                </div>
              </div>

              <div className="col-4 col-lg-4 d-flex justify-content-center mb-5">
                <div className="text-center">
                  <img src={require("../../icons/location.png")} alt="" />
                  <h5>سیستم ردیابی زنده</h5>
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
                  <h2>برای پیوستن به عنوان راننده اقدام کنید!</h2>
                  <p className="description">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است.
                  </p>
                  <button type="button" className="btn home-buttons mt-5">
                    ثبت درخواست
                  </button>
                </div>
              </div>
              <div className="col-6 driver-img">
                <img src={require("../../images/driver.png")} alt="" />
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
