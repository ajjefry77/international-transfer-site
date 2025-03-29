import { useContext, useEffect, useState } from "react";
import "./Map.css";
import Cookies from "js-cookie";
import axios from "axios";
import * as Router from "react-router-dom";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import { LangContext } from "../contexts/langContext";
import { Dropdown, DropdownButton, Form, InputGroup } from "react-bootstrap";
import PhoneInput from "react-phone-number-input";

export const SearchBox = ({ onSearchStart, onSearchDestination }) => {
  const [query, setQuery] = useState("");
  const [destinationQuery, setDestinationQuery] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [reqType, SetReqType] = useState("");
  const [reqName, SetReqName] = useState("");
  const [reqCount, SetReqCount] = useState("");
  const [reqEmail, SetReqEmail] = useState("");
  const [price, SetPrice] = useState("");
  const [reqPhone, SetReqPhone] = useState("");
  const location = Router.useLocation();
  const { t } = useTranslation();
  const { lang, setLang } = useContext(LangContext);

  const showReqBtn = location.pathname === "/userPanel";

  const predefinedRoutes = [
    { name: t("tehran-mashhad"), start: t("tehran"), end: t("mashhad") },
    { name: t("tehran-istanbul"), start: t("tehran"), end: t("istanbul") },
    { name: t("mashhad-newyork"), start: t("mashhad"), end: t("newyork") },
  ];

  const requestType = [{ name: t("transport-req") }, { name: t("full-req") }, ];

  const handlePredefinedRouteSelect = (event) => {
    const selectedRoute = predefinedRoutes.find(
      (route) => route.name === event.target.value
    );
    if (selectedRoute) {
      setQuery(selectedRoute.start);
      setDestinationQuery(selectedRoute.end);
      onSearchStart(selectedRoute.start);
      onSearchDestination(selectedRoute.end);
    }
  };

  const setStartEnd = (e) => {
    e.preventDefault();
    onSearchStart(query);
    onSearchDestination(destinationQuery);
  };

  // const handleSendData = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const response = await axios.post(
  //       "https://silkfleet.com/php/map.php",
  //       { query, destinationQuery },
  //     );
  //     Swal.fire({
  //       icon: "success",
  //       title: "درخواست شما با موفقیت ثبت شد",
  //       text: "کارشناسان ما در اصرا وقت با شما تماس خواهند گرفت",
  //       confirmButtonText: "متوجه شدم",
  //     });
  //   } catch (error) {
  //     setMessage("خطا در ارسال درخواست");
  //     Swal.fire({
  //       icon: "error",
  //       title: " خطا در ارسال درخواست ",
  //       confirmButtonText: "متوجه شدم",
  //     });
  //   }
  // };

  const sendReqType = (e) => {
    const selectedType = requestType.find(
      (type) => type.name === e.target.value
    );
    if (selectedType) {
      SetReqType(selectedType.name);
    }
  };

  const handleSendReqType = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://silkfleet.com/php/homereq.php",
        {
          reqType,
          query,
          destinationQuery,
          reqName,
          reqCount,
          reqEmail,
          reqPhone,
          name,
        }
      );
      setMessage("کد رهگیری شما:" + response.data.message);
      if (name && reqName && reqType && reqEmail && reqPhone) {
        Swal.fire({
          icon: "success",
          title: t("req-success-title"),
          text: t("req-success-text"),
          confirmButtonText: t("req-success-btn"),
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "لطفا تمامی فیلد هارا پر کنید",
          confirmButtonText: "متوجه شدم",
        });
      }
    } catch (error) {
      setMessage("خطا در ارسال درخواست");
      Swal.fire({
        icon: "error",
        title: t("req-error-title"),
        confirmButtonText: t("req-error-btn"),
      });
    }
  };

  return (
    <div className="map-form" dir={lang == "en" ? "ltr" : "rtl"}>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder={t("name")}
          className="form-control"
          name="name"
          required
        />

        <input
          type="text"
          value={reqName}
          onChange={(e) => {
            SetReqName(e.target.value);
          }}
          placeholder={t("product-name")}
          className="form-control mt-3"
          name="reqName"
          required
        />

        <InputGroup className="mt-3">
          <Form.Control
            aria-label="Text input with dropdown button"
            className="amount"
            placeholder={t("product-amount")}
          />
          <select aria-label="Default select example" className="select-amount">
            <option>{t("tone")}</option>
            <option>{t("cubic-meter")}</option>
            <option>{t("kilo")}</option>
          </select>
        </InputGroup>

        {/* <input
          type="text"
          value={reqCount}
          onChange={(e) => {
            SetReqCount(e.target.value);
          }}
          placeholder="مقدار محصول"
          className="form-control mt-3"
          name="reqName"
          required
        /> */}

        <div className="req-routes">
          <select
            onChange={handlePredefinedRouteSelect}
            className="form-control"
          >
            <option value="">{t("default-routes")}</option>
            {predefinedRoutes.map((route, index) => (
              <option key={index} value={route.name}>
                {route.name}
              </option>
            ))}
          </select>

          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("start")}
            className="form-control mt-2"
            name="query"
          />

          <input
            type="text"
            value={destinationQuery}
            onChange={(e) => setDestinationQuery(e.target.value)}
            placeholder={t("end")}
            className="form-control mt-2"
            name="destinationQuery"
          />
        </div>

        <br />

        <>
          <button
            onClick={setStartEnd}
            className="btn search-buttons"
            type="submit"
            disabled={query && destinationQuery ? false : true}
          >
            {t("submit-route")}
          </button>

          <select className="form-control mb-3" onChange={sendReqType} required>
            <option value="">{t('title-req')}</option>
            {requestType.map((type, index) => (
              <option key={index} value={type.name}>
                {type.name}
              </option>
            ))}
          </select>

          <InputGroup className="mt-3">
            <Form.Control
              aria-label="Text input with dropdown button"
              className="amount"
              placeholder={t("suggested-price")}
            />
            <select
              aria-label="Default select example"
              className="select-price"
            >
              <option>$</option>
              <option>ریال</option>
            </select>
          </InputGroup>

          <input
            type="text"
            value={reqPhone}
            onChange={(e) => {
              SetReqPhone(e.target.value);
            }}
            placeholder={t("phone")}
            required
            className="form-control mt-3"
            name="reqPhone"
          />
          <input
            type="text"
            value={reqEmail}
            onChange={(e) => {
              SetReqEmail(e.target.value);
            }}
            placeholder={t("email")}
            required
            className="form-control mt-3"
            name="reqEmail"
          />

          <button
            onClick={handleSendReqType}
            className="btn search-buttons mt-3"
            type="submit"
          >
            {t("req-btn")}
          </button>
        </>
      </form>
      <p>{message}</p>
    </div>
  );
};
