import React, { useEffect, useState } from "react";
import "./Petro-Products.css";
import { Button, Carousel } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { t } from "i18next";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

const FarmProducts = () => {
  const navigate = useNavigate();
  const [pro, setPro] = useState([]);
  const [searchPro, setSearchPro] = useState([]);
  const width = useWindowWidth();
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    axios
      .get("https://silkfleet.com/php/showproducts.php")
      .then((response) => {
        console.log("API Response:", response.data);
        setPro(response.data[0]);
        setSearchPro(response.data[0]);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleDetail = (item) => {
    Swal.fire({
      icon: "info",
      iconColor: "rgb(70, 131, 195)",
      title: "توضیحات",
      text: item,
      confirmButtonText: "متوجه شدم",
      confirmButtonColor: "rgb(70, 131, 195)",
    });
  };

  const handleSearch = (e) => {
    setPro(searchPro.filter((u) => u.name.includes(e.target.value)));
  };
  return (
    <div>
      <Helmet>
        <title>{t("Farm-title")}</title>
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
        <h1 className="pro-title d-flex justify-content-center">
          {t("Farm-title")}
        </h1>
        <div className="container-fluid mt-5">
          <div className="row d-flex justify-content-center">
            <div className="d-flex justify-content-start">
              <div className="input-group mb-3 search-inp">
                <input
                  type="text"
                  class="form-control "
                  placeholder={t("search")}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={handleSearch}
                />
              </div>
            </div>
            <hr />
            {pro
              .filter((item) => item.type === "کشاورزی")
              .map((item) =>
                width > 780 ? (
                  <div className=" col-3 pro p-0" key={item.id}>
                    <Carousel className="m-0 ">
                      {[item.img1, item.img2, item.img3, item.img4]
                        .filter((img) => img)
                        .map((img, index) => (
                          <Carousel.Item key={index}>
                            <img
                              src={`https://silkfleet.com/php/productpics/${img}`}
                              className="card-img-top card-img"
                              alt={`image-${index}`}
                            />
                          </Carousel.Item>
                        ))}
                    </Carousel>

                    <div className="d-flex justify-content-center">
                      <h1 className="card-title">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="#a4a2a2"
                            stroke-linecap="round"
                            stroke-width="1.5"
                            d="M21.984 10c-.037-1.311-.161-2.147-.581-2.86c-.598-1.015-1.674-1.58-3.825-2.708l-2-1.05C13.822 2.461 12.944 2 12 2s-1.822.46-3.578 1.382l-2 1.05C4.271 5.56 3.195 6.125 2.597 7.14C2 8.154 2 9.417 2 11.942v.117c0 2.524 0 3.787.597 4.801c.598 1.015 1.674 1.58 3.825 2.709l2 1.049C10.178 21.539 11.056 22 12 22s1.822-.46 3.578-1.382l2-1.05c2.151-1.129 3.227-1.693 3.825-2.708c.42-.713.544-1.549.581-2.86M21 7.5l-4 2M12 12L3 7.5m9 4.5v9.5m0-9.5l4.5-2.25l.5-.25m0 0V13m0-3.5l-9.5-5"
                          />
                        </svg>
                        {item.name}
                      </h1>
                    </div>

                    <div className="mt-1 d-flex justify-content-between">
                      <h1 className="card-des">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="m-0"
                          width="30"
                          height="30"
                          viewBox="0 0 48 48"
                        >
                          <path
                            fill="#868686"
                            fill-rule="evenodd"
                            d="M15.517 11.535A11.96 11.96 0 0 1 24 8c3.18 0 6.232 1.27 8.483 3.535A12.12 12.12 0 0 1 36 20.077c0 5.526-3.064 10.528-6.256 14.221a41.4 41.4 0 0 1-4.363 4.328A36 36 0 0 1 24 39.752a37 37 0 0 1-1.381-1.126a41.4 41.4 0 0 1-4.363-4.328C15.064 30.605 12 25.603 12 20.077c0-3.205 1.266-6.277 3.517-8.542m7.907 30.282L24 41l.576.817a1 1 0 0 1-1.152 0m0 0L24 41l.576.817l.004-.002l.01-.007l.03-.023l.118-.085q.152-.111.43-.324c.368-.282.89-.697 1.513-1.23a43.4 43.4 0 0 0 4.575-4.54C34.564 31.78 38 26.32 38 20.076c0-3.73-1.474-7.31-4.098-9.95A13.96 13.96 0 0 0 24 6a13.96 13.96 0 0 0-9.902 4.125A14.12 14.12 0 0 0 10 20.077c0 6.243 3.436 11.703 6.744 15.529a43.4 43.4 0 0 0 4.575 4.54c.624.533 1.145.948 1.513 1.23a26 26 0 0 0 .547.41l.032.022l.009.007zM20 20a4 4 0 1 1 8 0a4 4 0 0 1-8 0m4-6a6 6 0 1 0 0 12a6 6 0 0 0 0-12"
                            clip-rule="evenodd"
                          />
                        </svg>
                        {t("pro-place")}
                        {item.country}
                      </h1>
                    </div>

                    <div className=" mt-0 d-flex justify-content-between">
                      <h1 className="card-des">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="m-0"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="#868686"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="m10.94 18.339l-3.43 2.548a1.71 1.71 0 0 1-2.76-1.23V6.35a3.735 3.735 0 0 1 3.87-3.597h6.76a3.74 3.74 0 0 1 3.87 3.597v13.309a1.708 1.708 0 0 1-2.76 1.229l-3.43-2.548a1.8 1.8 0 0 0-2.12 0"
                          />
                        </svg>

                        {item.type}
                      </h1>
                    </div>

                    <div className=" d-flex ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        color="rgb(70, 131, 195)"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill="currentColor"
                          d="M2.5 5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1zM2 11.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1z"
                        />
                      </svg>
                      <Button
                        className="detail-buttons"
                        onClick={() => {
                          handleDetail(item.description);
                        }}
                      >
                        توضیحات...
                      </Button>
                    </div>

                    <div className="d-flex justify-content-center mt-1">
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
                ) : (
                  <div className=" col-3 pro p-0 d-flex" key={item.id}>
                    <Carousel className="m-0 slide">
                      {[item.img1, item.img2, item.img3, item.img4]
                        .filter((img) => img)
                        .map((img, index) => (
                          <Carousel.Item key={index}>
                            <img
                              src={`https://silkfleet.com/php/productpics/${img}`}
                              className="card-img-top card-img"
                              alt={`image-${index}`}
                            />
                          </Carousel.Item>
                        ))}
                    </Carousel>
                    <div className="card-body">
                      <div className="mt-1 d-flex justify-content-center">
                        <h1 className="card-title">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="none"
                              stroke="#a4a2a2"
                              stroke-linecap="round"
                              stroke-width="1.5"
                              d="M21.984 10c-.037-1.311-.161-2.147-.581-2.86c-.598-1.015-1.674-1.58-3.825-2.708l-2-1.05C13.822 2.461 12.944 2 12 2s-1.822.46-3.578 1.382l-2 1.05C4.271 5.56 3.195 6.125 2.597 7.14C2 8.154 2 9.417 2 11.942v.117c0 2.524 0 3.787.597 4.801c.598 1.015 1.674 1.58 3.825 2.709l2 1.049C10.178 21.539 11.056 22 12 22s1.822-.46 3.578-1.382l2-1.05c2.151-1.129 3.227-1.693 3.825-2.708c.42-.713.544-1.549.581-2.86M21 7.5l-4 2M12 12L3 7.5m9 4.5v9.5m0-9.5l4.5-2.25l.5-.25m0 0V13m0-3.5l-9.5-5"
                            />
                          </svg>
                          {item.name}
                        </h1>
                      </div>

                      <div className="mt-1 d-flex justify-content-between">
                        <h1 className="card-des">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="m-0"
                            width="30"
                            height="30"
                            viewBox="0 0 48 48"
                          >
                            <path
                              fill="#868686"
                              fill-rule="evenodd"
                              d="M15.517 11.535A11.96 11.96 0 0 1 24 8c3.18 0 6.232 1.27 8.483 3.535A12.12 12.12 0 0 1 36 20.077c0 5.526-3.064 10.528-6.256 14.221a41.4 41.4 0 0 1-4.363 4.328A36 36 0 0 1 24 39.752a37 37 0 0 1-1.381-1.126a41.4 41.4 0 0 1-4.363-4.328C15.064 30.605 12 25.603 12 20.077c0-3.205 1.266-6.277 3.517-8.542m7.907 30.282L24 41l.576.817a1 1 0 0 1-1.152 0m0 0L24 41l.576.817l.004-.002l.01-.007l.03-.023l.118-.085q.152-.111.43-.324c.368-.282.89-.697 1.513-1.23a43.4 43.4 0 0 0 4.575-4.54C34.564 31.78 38 26.32 38 20.076c0-3.73-1.474-7.31-4.098-9.95A13.96 13.96 0 0 0 24 6a13.96 13.96 0 0 0-9.902 4.125A14.12 14.12 0 0 0 10 20.077c0 6.243 3.436 11.703 6.744 15.529a43.4 43.4 0 0 0 4.575 4.54c.624.533 1.145.948 1.513 1.23a26 26 0 0 0 .547.41l.032.022l.009.007zM20 20a4 4 0 1 1 8 0a4 4 0 0 1-8 0m4-6a6 6 0 1 0 0 12a6 6 0 0 0 0-12"
                              clip-rule="evenodd"
                            />
                          </svg>
                          {t("pro-place")}
                          {item.country}
                        </h1>
                      </div>

                      <div className=" mt-0 d-flex justify-content-between">
                        <h1 className="card-des">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="m-0"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="none"
                              stroke="#868686"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              d="m10.94 18.339l-3.43 2.548a1.71 1.71 0 0 1-2.76-1.23V6.35a3.735 3.735 0 0 1 3.87-3.597h6.76a3.74 3.74 0 0 1 3.87 3.597v13.309a1.708 1.708 0 0 1-2.76 1.229l-3.43-2.548a1.8 1.8 0 0 0-2.12 0"
                            />
                          </svg>

                          {item.type}
                        </h1>
                      </div>

                      <div className=" d-flex ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          color="rgb(70, 131, 195)"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill="currentColor"
                            d="M2.5 5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1zM2 11.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1z"
                          />
                        </svg>
                        <Button
                          className="detail-buttons"
                          onClick={() => {
                            handleDetail(item.description);
                          }}
                        >
                          توضیحات...
                        </Button>
                      </div>

                      <div className=" d-flex justify-content-end mt-1">
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
                )
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmProducts;
