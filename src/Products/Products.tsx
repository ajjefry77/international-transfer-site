import React from "react";
import "./Products.css";
import { Button } from "react-bootstrap";
const Products = () => {
  return (
    <div>
      {/* Slider */}
      <div className="d-flex justify-content-center slider">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="slider-form">
                <p className="slider-title" style={{ color: "white", fontSize:'40px' }}>
                  حمل و نقل فراورده های پتروشیمی با بهترین قیمت
                </p>
                <p className=" slider-description" style={{ color: "white", fontSize:'13px'}}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز  
                </p>
                <button className="btn order">ثبت سفارش</button>
                <button className="btn basket">سبد خرید</button>
              </div>
              <img
                src={require("../images/Slider.png")}
                className="d-block w-100 slide-img"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Products */}
      <div className=" products">
        <h1>محبوب ترین </h1>
        <div className="container-fluid mt-5">
          <div className="row d-flex justify-content-center">
            <div className="col-3 pro">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={require("../images/eating.png")}
                  className="card-img-top pro-img"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">حمل و نقل مواد غذایی</h5>
                  <p className="card-text">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز 
                  </p>
                  <Button className="pro-buttons">سفارش</Button>
                </div>
              </div>
            </div>
            <div className="col-3 pro">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={require("../images/petro.png")}
                  className="card-img-top pro-img"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">حمل محصولات پتروشیمی</h5>
                  <p className="card-text">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز 
                  </p>
                  <Button className="pro-buttons">سفارش</Button>
                </div>
              </div>
            </div>
            <div className="col-3 pro">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={require("../images/cars.png")}
                  className="card-img-top pro-img"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">حمل وسایل نقلیه</h5>
                  <p className="card-text">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز 
                  </p>
                  <Button className="pro-buttons">سفارش</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="row d-flex justify-content-center">
            <div className="col-3 pro">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={require("../images/sea.png")}
                  className="card-img-top pro-img"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">حمل و نقل دریایی </h5>
                  <p className="card-text">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز 
                  </p>
                  <Button className="pro-buttons">سفارش</Button>
                </div>
              </div>
            </div>
            <div className="col-3 pro">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={require("../images/eating.png")}
                  className="card-img-top pro-img"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">حمل و نقل جاده ای</h5>
                  <p className="card-text">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز 
                  </p>
                  <Button className="pro-buttons">سفارش</Button>
                </div>
              </div>
            </div>
            <div className="col-3 pro">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={require("../images/subwaypro.png")}
                  className="card-img-top pro-img"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">حمل و نقل ریلی</h5>
                  <p className="card-text">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز 
                  </p>
                  <Button className="pro-buttons">سفارش</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
