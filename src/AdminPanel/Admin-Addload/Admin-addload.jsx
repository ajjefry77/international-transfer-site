import React, { useState } from "react";
import "./Admin-addload.css";
import axios from "axios";
import { t } from "i18next";
import Swal from "sweetalert2";

const AdminAddLoad = () => {
  const [proText, setProText] = useState("");
  const [proLoad1, setProLoad1] = useState();
  const [uploadProgress, setUploadProgress] = useState(0);
  const [message, setMessage] = useState();

  const handleSendData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("myFile", proLoad1);
    formData.append("myText", proText);

    try {
      const response = await axios.post(
        "https://silkfleet.com/php/bargiri.php",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            const percent = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(percent);
          },
        }
      );

      setMessage(response.data.message);
      Swal.fire({
        icon: "success",
        title: "ویدئو بارگیری شما با موفقیت ثبت شد",
        confirmButtonText: "متوجه شدم",
      });
      setUploadProgress(0);
    } catch (error) {
      console.error("خطا در آپلود:", error);
      setMessage("خطا در ارسال اطلاعات");
    }
  };
  return (
    <div>
      <div className="text-center mt-5">
        <h2>ثبت بارگیری</h2>

        <div className="d-flex justify-content-center">
          <form className="admin-edit" enctype="multipart/form-data">
            <input
              type="text"
              className="form-control mt-4"
              placeholder=" توضیحات بارگیری..."
              value={proText}
              onChange={(e) => {
                setProText(e.target.value);
              }}
            />
            <div className="container-fluid mt-5">
              <div className="row">
                <div className="col-lg-3 col-6 cols">
                  <input
                    type="file"
                    className="file-inp"
                    accept="video/*"
                    onChange={(e) => {
                      setProLoad1(e.target.files[0]);
                    }}
                  />
                  <div className="upload d-flex justify-content-center">
                    {proLoad1 ? (
                      <video
                        width="120"
                        height="100"
                        controls={false}
                        style={{
                          marginTop: "50px",
                          borderRadius: "10px",
                          objectFit: "cover",
                        }}
                      >
                        <source
                          src={URL.createObjectURL(proLoad1)}
                          type={proLoad1.type}
                        />
                        مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
                      </video>
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

                  {proLoad1 && (
                    <p className="mt-2 text-muted">{proLoad1.name}</p>
                  )}
                </div>
              </div>
            </div>

            {uploadProgress > 0 && uploadProgress < 100 && (
              <div className="progress mt-4" style={{ height: "25px" }}>
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  style={{ width: `${uploadProgress}%` }}
                >
                  {uploadProgress}%
                </div>
              </div>
            )}

            <button className="pro-set-btn btn" onClick={handleSendData}>
              ثبت بارگیری
            </button>
            
          </form>
          {console.log(message)}
        </div>
      </div>
    </div>
  );
};

export default AdminAddLoad;
