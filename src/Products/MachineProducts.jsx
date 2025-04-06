import React, { useEffect, useState } from "react";
import "./Petro-Products.css";
import { Button, Carousel } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { t } from "i18next";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const MachineProducts = () => {
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
        <title>ماشین آلات</title>
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
      

      {/* Products */}
      <div className="products">
        <h1>{t("MachineProducts-title")}</h1>
        <div className="container-fluid mt-5">
          <div className="row d-flex justify-content-center">
            {pro
              .filter((item) => item.type === "ماشین آلات")
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

export default MachineProducts;
