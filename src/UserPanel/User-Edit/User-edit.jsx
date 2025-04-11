import React, { useState } from "react";
import "./User-edit.css";
import { t } from "i18next";
import { Button } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

const UserEdit = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const cookie = Cookies.get('token')

  const handleSubmitEdit = async (e) => {
    e.preventDefault();

    try {
      // ارسال درخواست به PHP با استفاده از Axios
      const response = await axios.post(
       "https://silkfleet.com/php/useredit.php",
        { name, phone, email, password, cookie }
      );

      setMessage(response.data.message)

      // بررسی وضعیت پاسخ از PHP
      if (response.data.success) {
        Swal.fire({
          icon: "success",
          title: t('user-edit-success'),
          confirmButtonText: t('req-success-btn'),
        });
      } else {
        alert("خطا در به‌روزرسانی اطلاعات.");
      }
    } catch (error) {
      console.error("خطا در ارسال درخواست:", error);
      alert("خطا در ارسال درخواست.");
    }
  };
  return (
    <div>
      <div className="text-center mt-5">
        <h2>{t("user-edit")}</h2>

        <div className="d-flex justify-content-center">
          <form className="user-edit">
            <label className="mt-3">{t("user-edit-name")}</label>
            <input
              type="text"
              className="form-control mt-1"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label className="mt-3">{t("user-edit-phone")}</label>
            <input
              type="text"
              className="form-control mt-1"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <label className="mt-3">{t("user-edit-email")}</label>
            <input
              type="text"
              className="form-control mt-1"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label className="mt-3">{t("user-edit-password")}</label>
            <input
              type="text"
              className="form-control mt-1"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Button className="edit-buttons" onClick={handleSubmitEdit}>
              {t("user-edit-submit")}
            </Button>
          </form>
          {console.log(message)
          }
        </div>
      </div>
    </div>
  );
};

export default UserEdit;
