import React, { useEffect, useState } from "react";
import "./Petro-Products.css";
import { Button, Carousel } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { t } from "i18next";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const PetroProducts = () => {
  const navigate = useNavigate();
  const [pro, setPro] = useState([]);
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    axios
      .get("https://silkfleet.com/php/showproducts.php")
      .then((response) => {
        console.log("API Response:", response.data);
        setPro(Array.isArray(response.data[0]) ? response.data[0] : []);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div>
      <Helmet>
        <title>محصولات پتروشیمی</title>
        <meta
          name="description"
          content="کالا ناوگان ابریشم،محصولات ، سفارش محصول ، حمل و نقل محصول، حمل و نقل کالا"
        />
        <meta
          name="keywords"
          content="حمل بار، حمل و نقل، باربری، سفارش کالا ، بازرگانی ، کالا ناوگان ابریشم ، سفارش محصول ، حمل و نقل محصول"
        />
        <meta property="og:title" content="محصولات" />
        <meta
          property="og:description"
          content="سفارش و حمل کالا درخواستی شما"
        />
        <meta property="og:image" content="logo.ico" />
        <meta property="og:url" content="https://silkfleet.com/" />
      </Helmet>
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
                <p
                  className="slider-title"
                  style={{ color: "white", fontSize: "40px" }}
                >
                  حمل و نقل فراورده های پتروشیمی با بهترین قیمت
                </p>
                <p
                  className=" slider-description"
                  style={{ color: "white", fontSize: "13px" }}
                >
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
      <div className="products">
        <h1>{t("PetroProducts-title")}</h1>
        <div className="container-fluid mt-5">
          <div className="row d-flex justify-content-center">
            {pro
              .filter((item) => item.type === "پتروشیمی")
              .map((item) => (
                <div className="col-3 pro" key={item.id}>
                  <div className="card" style={{ width: "18rem" }}>
                    <Carousel className="m-0">
                      {[item.img1, item.img2, item.img3, item.img4]
                        .filter((img) => img)
                        .map((img, index) => (
                          <Carousel.Item key={index}>
                            <img
                              src={`https://silkfleet.com/php/productpics/${img}`}
                              className="card-img-top pro-img"
                              alt={`image-${index}`}
                              
                            />
                          </Carousel.Item>
                        ))}
                    </Carousel>

                    <div className="card-body">
                      <h5 className="card-title">
                        {t("pro-title")}
                        {item.name}
                      </h5>
                      <h5 className="card-title">
                        {t("pro-place")}
                        {item.country}
                      </h5>
                      <p className="card-text">{item.description}</p>
                      <Button
                        className="pro-buttons"
                        onClick={() => {
                          navigate(`/userPanel/${item.token}`, {
                            state: {
                              name: item.name,
                              country: item.country,
                            },
                          });
                        }}
                      >
                        سفارش
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetroProducts;
