import React, { useState } from "react";
import "./Admin-addpro.css";
import axios from "axios";
import { t } from "i18next";
import Swal from "sweetalert2";

const AdminAddPro = () => {
  const [proName, setProName] = useState("");
  const [proPlace, setProPlace] = useState("");
  const [proText, setProText] = useState("");
  const [proType, setProType] = useState();
  const [proImg1, setProImg1] = useState();
  const [proImg2, setProImg2] = useState();
  const [proImg3, setProImg3] = useState();
  const [proImg4, setProImg4] = useState();
  const [message, setMessage] = useState();

  const proTypes = [
    { type: "پتروشیمی" },
    { type: "غذایی" },
    { type: "ساختمانی" },
    { type: "ماشین آلات" },
    { type: "کشاورزی" },
  ];

  const handleSetProType = (event) => {
    const selectedType = proTypes.find(
      (route) => route.type === event.target.value
    );
    if (selectedType) {
      setProType(selectedType.type);
    }
  };

  const handleSendData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("myFile", proImg1);
    formData.append("myFile2", proImg2);
    formData.append("myFile3", proImg3);
    formData.append("myFile4", proImg4);
    formData.append("proName", proName);
    formData.append("proPlace", proPlace);
    formData.append("proText", proText);
    formData.append("proType", proType);

    try {
      const response = await axios.post(
        "https://silkfleet.com/php/newproduct.php",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setMessage(response.data.message);
       Swal.fire({
        icon: "success",
        title: "محصول شما با موفقیت ثبت شد",
        confirmButtonText: "متوجه شدم",
        });
    } catch (error) {
      console.error("خطا در آپلود:", error);
      setMessage("خطا در ارسال اطلاعات");
    }
  };
  return (
    <div>
      <div className="text-center mt-5">
        <h2>ثبت محصول</h2>

        <div className="d-flex justify-content-center">
          <form className="admin-edit" enctype="multipart/form-data">
            <input
              type="text"
              className="form-control mt-5"
              placeholder="نام محصول..."
              value={proName}
              onChange={(e) => {
                setProName(e.target.value);
              }}
            />
            <input
              type="text"
              className="form-control mt-4"
              placeholder="کشور مبدا..."
              value={proPlace}
              onChange={(e) => {
                setProPlace(e.target.value);
              }}
            />
            <input
              type="text"
              className="form-control mt-4"
              placeholder=" توضیحات محصول..."
              value={proText}
              onChange={(e) => {
                setProText(e.target.value);
              }}
            />

            <select
              className="form-control mt-4"
              onChange={handleSetProType}
              required
            >
              <option value="">{t("title-req")}</option>
              {proTypes.map((type, index) => (
                <option key={index} value={type.type}>
                  {type.type}
                </option>
              ))}
            </select>

            <div className="container-fluid mt-5">
              <div className="row">
                <div className="col-lg-3 col-6 cols">
                  <input
                    type="file"
                    className="file-inp"
                    onChange={(e) => {
                      setProImg1(e.target.files[0]);
                    }}
                  />
                  <div className="upload d-flex justify-content-center">
                    {proImg1 ? (
                      <img
                        src={URL.createObjectURL(proImg1)}
                        alt="Uploaded Preview"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                          marginTop: "50px",
                          borderRadius: "10px",
                        }}
                      />
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="70"
                        height="70"
                        viewBox="0 0 24 24"
                        color="#bd1833"
                        style={{ marginTop: "50px" }}
                      >
                        <mask id="lineMdFilePlusTwotone0">
                          <g
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          >
                            <path
                              fill="#fff"
                              fillOpacity="0"
                              stroke-dasharray="64"
                              stroke-dashoffset="64"
                              d="M13.5 3l5.5 5.5v11.5c0 0.55 -0.45 1 -1 1h-12c-0.55 0 -1 -0.45 -1 -1v-16c0 -0.55 0.45 -1 1 -1Z"
                            >
                              <animate
                                fill="freeze"
                                attributeName="fill-opacity"
                                begin="0.8s"
                                dur="0.15s"
                                values="0;0.3"
                              />
                              <animate
                                fill="freeze"
                                attributeName="stroke-dashoffset"
                                dur="0.6s"
                                values="64;0"
                              />
                            </path>
                            <path
                              d="M14.5 3.5l2.25 2.25l2.25 2.25z"
                              opacity="0"
                            >
                              <animate
                                fill="freeze"
                                attributeName="d"
                                begin="0.6s"
                                dur="0.2s"
                                values="M14.5 3.5l2.25 2.25l2.25 2.25z;M14.5 3.5l0 4.5l4.5 0z"
                              />
                              <set
                                fill="freeze"
                                attributeName="opacity"
                                begin="0.6s"
                                to="1"
                              />
                            </path>
                            <path
                              fill="#000"
                              fill-opacity="0"
                              stroke="none"
                              d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"
                            >
                              <set
                                fill="freeze"
                                attributeName="fill-opacity"
                                begin="1s"
                                to="1"
                              />
                            </path>
                            <path
                              stroke-dasharray="8"
                              stroke-dashoffset="8"
                              d="M16 19h6"
                            >
                              <animate
                                fill="freeze"
                                attributeName="stroke-dashoffset"
                                begin="1s"
                                dur="0.2s"
                                values="8;0"
                              />
                            </path>
                            <path
                              stroke-dasharray="8"
                              stroke-dashoffset="8"
                              d="M19 16v6"
                            >
                              <animate
                                fill="freeze"
                                attributeName="stroke-dashoffset"
                                begin="1.2s"
                                dur="0.2s"
                                values="8;0"
                              />
                            </path>
                          </g>
                        </mask>
                        <rect
                          width="24"
                          height="24"
                          fill="currentColor"
                          mask="url(#lineMdFilePlusTwotone0)"
                        />
                      </svg>
                    )}
                  </div>
                </div>

                <div className="col-lg-3 col-6 cols">
                  <input
                    type="file"
                    className="file-inp"
                    onChange={(e) => {
                      setProImg2(e.target.files[0]);
                    }}
                  />
                  <div className="upload d-flex justify-content-center">
                    {proImg2 ? (
                      <img
                        src={URL.createObjectURL(proImg2)}
                        alt="Uploaded Preview"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                          marginTop: "50px",
                          borderRadius: "10px",
                        }}
                      />
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="70"
                        height="70"
                        viewBox="0 0 24 24"
                        color="#bd1833"
                        style={{ marginTop: "50px" }}
                      >
                        <mask id="lineMdFilePlusTwotone0">
                          <g
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          >
                            <path
                              fill="#fff"
                              fillOpacity="0"
                              stroke-dasharray="64"
                              stroke-dashoffset="64"
                              d="M13.5 3l5.5 5.5v11.5c0 0.55 -0.45 1 -1 1h-12c-0.55 0 -1 -0.45 -1 -1v-16c0 -0.55 0.45 -1 1 -1Z"
                            >
                              <animate
                                fill="freeze"
                                attributeName="fill-opacity"
                                begin="0.8s"
                                dur="0.15s"
                                values="0;0.3"
                              />
                              <animate
                                fill="freeze"
                                attributeName="stroke-dashoffset"
                                dur="0.6s"
                                values="64;0"
                              />
                            </path>
                            <path
                              d="M14.5 3.5l2.25 2.25l2.25 2.25z"
                              opacity="0"
                            >
                              <animate
                                fill="freeze"
                                attributeName="d"
                                begin="0.6s"
                                dur="0.2s"
                                values="M14.5 3.5l2.25 2.25l2.25 2.25z;M14.5 3.5l0 4.5l4.5 0z"
                              />
                              <set
                                fill="freeze"
                                attributeName="opacity"
                                begin="0.6s"
                                to="1"
                              />
                            </path>
                            <path
                              fill="#000"
                              fill-opacity="0"
                              stroke="none"
                              d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"
                            >
                              <set
                                fill="freeze"
                                attributeName="fill-opacity"
                                begin="1s"
                                to="1"
                              />
                            </path>
                            <path
                              stroke-dasharray="8"
                              stroke-dashoffset="8"
                              d="M16 19h6"
                            >
                              <animate
                                fill="freeze"
                                attributeName="stroke-dashoffset"
                                begin="1s"
                                dur="0.2s"
                                values="8;0"
                              />
                            </path>
                            <path
                              stroke-dasharray="8"
                              stroke-dashoffset="8"
                              d="M19 16v6"
                            >
                              <animate
                                fill="freeze"
                                attributeName="stroke-dashoffset"
                                begin="1.2s"
                                dur="0.2s"
                                values="8;0"
                              />
                            </path>
                          </g>
                        </mask>
                        <rect
                          width="24"
                          height="24"
                          fill="currentColor"
                          mask="url(#lineMdFilePlusTwotone0)"
                        />
                      </svg>
                    )}
                  </div>
                </div>

                <div className="col-lg-3 col-6 cols">
                  <input
                    type="file"
                    className="file-inp"
                    onChange={(e) => {
                      setProImg3(e.target.files[0]);
                    }}
                  />
                  <div className="upload d-flex justify-content-center">
                    {proImg3 ? (
                      <img
                        src={URL.createObjectURL(proImg3)}
                        alt="Uploaded Preview"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                          marginTop: "50px",
                          borderRadius: "10px",
                        }}
                      />
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="70"
                        height="70"
                        viewBox="0 0 24 24"
                        color="#bd1833"
                        style={{ marginTop: "50px" }}
                      >
                        <mask id="lineMdFilePlusTwotone0">
                          <g
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          >
                            <path
                              fill="#fff"
                              fillOpacity="0"
                              stroke-dasharray="64"
                              stroke-dashoffset="64"
                              d="M13.5 3l5.5 5.5v11.5c0 0.55 -0.45 1 -1 1h-12c-0.55 0 -1 -0.45 -1 -1v-16c0 -0.55 0.45 -1 1 -1Z"
                            >
                              <animate
                                fill="freeze"
                                attributeName="fill-opacity"
                                begin="0.8s"
                                dur="0.15s"
                                values="0;0.3"
                              />
                              <animate
                                fill="freeze"
                                attributeName="stroke-dashoffset"
                                dur="0.6s"
                                values="64;0"
                              />
                            </path>
                            <path
                              d="M14.5 3.5l2.25 2.25l2.25 2.25z"
                              opacity="0"
                            >
                              <animate
                                fill="freeze"
                                attributeName="d"
                                begin="0.6s"
                                dur="0.2s"
                                values="M14.5 3.5l2.25 2.25l2.25 2.25z;M14.5 3.5l0 4.5l4.5 0z"
                              />
                              <set
                                fill="freeze"
                                attributeName="opacity"
                                begin="0.6s"
                                to="1"
                              />
                            </path>
                            <path
                              fill="#000"
                              fill-opacity="0"
                              stroke="none"
                              d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"
                            >
                              <set
                                fill="freeze"
                                attributeName="fill-opacity"
                                begin="1s"
                                to="1"
                              />
                            </path>
                            <path
                              stroke-dasharray="8"
                              stroke-dashoffset="8"
                              d="M16 19h6"
                            >
                              <animate
                                fill="freeze"
                                attributeName="stroke-dashoffset"
                                begin="1s"
                                dur="0.2s"
                                values="8;0"
                              />
                            </path>
                            <path
                              stroke-dasharray="8"
                              stroke-dashoffset="8"
                              d="M19 16v6"
                            >
                              <animate
                                fill="freeze"
                                attributeName="stroke-dashoffset"
                                begin="1.2s"
                                dur="0.2s"
                                values="8;0"
                              />
                            </path>
                          </g>
                        </mask>
                        <rect
                          width="24"
                          height="24"
                          fill="currentColor"
                          mask="url(#lineMdFilePlusTwotone0)"
                        />
                      </svg>
                    )}
                  </div>
                </div>

                <div className="col-lg-3 col-6 cols">
                  <input
                    type="file"
                    className="file-inp"
                    onChange={(e) => {
                      setProImg4(e.target.files[0]);
                    }}
                  />
                  <div className="upload d-flex justify-content-center">
                    {proImg4 ? (
                      <img
                        src={URL.createObjectURL(proImg4)}
                        alt="Uploaded Preview"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                          marginTop: "50px",
                          borderRadius: "10px",
                        }}
                      />
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="70"
                        height="70"
                        viewBox="0 0 24 24"
                        color="#bd1833"
                        style={{ marginTop: "50px" }}
                      >
                        <mask id="lineMdFilePlusTwotone0">
                          <g
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          >
                            <path
                              fill="#fff"
                              fillOpacity="0"
                              stroke-dasharray="64"
                              stroke-dashoffset="64"
                              d="M13.5 3l5.5 5.5v11.5c0 0.55 -0.45 1 -1 1h-12c-0.55 0 -1 -0.45 -1 -1v-16c0 -0.55 0.45 -1 1 -1Z"
                            >
                              <animate
                                fill="freeze"
                                attributeName="fill-opacity"
                                begin="0.8s"
                                dur="0.15s"
                                values="0;0.3"
                              />
                              <animate
                                fill="freeze"
                                attributeName="stroke-dashoffset"
                                dur="0.6s"
                                values="64;0"
                              />
                            </path>
                            <path
                              d="M14.5 3.5l2.25 2.25l2.25 2.25z"
                              opacity="0"
                            >
                              <animate
                                fill="freeze"
                                attributeName="d"
                                begin="0.6s"
                                dur="0.2s"
                                values="M14.5 3.5l2.25 2.25l2.25 2.25z;M14.5 3.5l0 4.5l4.5 0z"
                              />
                              <set
                                fill="freeze"
                                attributeName="opacity"
                                begin="0.6s"
                                to="1"
                              />
                            </path>
                            <path
                              fill="#000"
                              fill-opacity="0"
                              stroke="none"
                              d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"
                            >
                              <set
                                fill="freeze"
                                attributeName="fill-opacity"
                                begin="1s"
                                to="1"
                              />
                            </path>
                            <path
                              stroke-dasharray="8"
                              stroke-dashoffset="8"
                              d="M16 19h6"
                            >
                              <animate
                                fill="freeze"
                                attributeName="stroke-dashoffset"
                                begin="1s"
                                dur="0.2s"
                                values="8;0"
                              />
                            </path>
                            <path
                              stroke-dasharray="8"
                              stroke-dashoffset="8"
                              d="M19 16v6"
                            >
                              <animate
                                fill="freeze"
                                attributeName="stroke-dashoffset"
                                begin="1.2s"
                                dur="0.2s"
                                values="8;0"
                              />
                            </path>
                          </g>
                        </mask>
                        <rect
                          width="24"
                          height="24"
                          fill="currentColor"
                          mask="url(#lineMdFilePlusTwotone0)"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <button className="pro-set-btn btn" onClick={handleSendData}>
              ثبت محصول
            </button>
            {console.log(message)}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminAddPro;
