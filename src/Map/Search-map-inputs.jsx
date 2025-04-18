import { useContext, useEffect, useState } from "react";
import "./Map.css";
import Cookies from "js-cookie";
import axios from "axios";
import * as Router from "react-router-dom";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import { LangContext } from "../contexts/langContext";
import { Form, InputGroup } from "react-bootstrap";
import CurrencyInput from "react-currency-input-field";

export const SearchBox = ({
  onSearchStart,
  onSearchDestination,
  startAddress,
  endAddress,
  proname,
  procountry,
}) => {
  const [query, setQuery] = useState(proname || "");
  const [destinationQuery, setDestinationQuery] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [reqType, SetReqType] = useState("");
  const [reqName, SetReqName] = useState(proname);

  const [reqAmount, SetReqAmount] = useState("");
  const [reqAmountType, SetReqAmountType] = useState("تن");
  const reqAmountValue = reqAmount + reqAmountType;

  const [reqPrice, SetReqPrice] = useState("");
  const [reqPriceType, SetReqPriceType] = useState("$");
  const reqPriceValue = reqPrice + reqPriceType;

  const [reqPhone, SetReqPhone] = useState("");
  const [reqCountryCode, SetReqCountryCode] = useState("");
  const reqPhoneValue = reqCountryCode + reqPhone;

  const [reqEmail, SetReqEmail] = useState("");
  const [reqCheck, SetReqCheck] = useState(false);
  const { t } = useTranslation();
  const { lang, setLang } = useContext(LangContext);
  const location = Router.useLocation();
  const showReqBtn = location.pathname.startsWith("/userPanel");
  const panelReq = location.pathname == "/userPanel";

  const cookie = Cookies.get("token");

  const predefinedRoutes = [
    { name: t("tehran-mashhad"), start: t("tehran"), end: t("mashhad") },
    { name: t("tehran-istanbul"), start: t("tehran"), end: t("istanbul") },
    { name: t("mashhad-newyork"), start: t("mashhad"), end: t("newyork") },
  ];
  const requestType = [
    { name: t("transport-req") },
    { name: t("pro-req") },
    { name: t("full-req") },
  ];

  const requestTypePro = [{ name: t("pro-req") }, { name: t("full-req") }];

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

  const sendReqType = (e) => {
    const selectedType = requestType.find(
      (type) => type.name === e.target.value
    );
    if (selectedType) {
      SetReqType(selectedType.name);
    }
  };

  const handleSubmitReq = async (event) => {
    event.preventDefault();

    if (name && reqName && reqType && reqEmail && reqPhone) {
      try {
        const response = await axios.post(
          "https://silkfleet.com/php/homereq.php",
          {
            reqType,
            query,
            destinationQuery,
            reqName,
            reqAmountValue,
            reqPriceValue,
            reqEmail,
            reqPhoneValue,
            name,
          }
        );
        setMessage("کد رهگیری شما:" + response.data.message);
        setStatus(response.data.status);

        {
          status == "error"
            ? Swal.fire({
                icon: "error",
                title: "ایمیل شما نامعتبر است",
                confirmButtonText: "لطفا از صحت ایمیل خود مطمئن شوید",
              })
            : Swal.fire({
                icon: "info",
                title: t("req-success-title"),
                text: t("req-success-text"),
                confirmButtonText: t("req-success-btn"),
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
    } else {
      Swal.fire({
        icon: "error",
        title: "لطفا تمامی فیلد هارا پر کنید",
        confirmButtonText: "متوجه شدم",
      });
    }
  };

  const handlePrice = () => {
    if (reqType == "حمل کالا") {
      return t("suggested-t-price");
    } else if (reqType == "تامین کالا") {
      return t("suggested-p-price");
    } else if (reqType == "صفر تا صد") {
      return t("suggested-f-price");
    }
  };

  const handleValidPhone = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      SetReqPhone(value); // فقط اعداد مجازند
    }
  };

  useEffect(() => {
    if (startAddress) setQuery(startAddress);
  }, [startAddress]);

  useEffect(() => {
    if (endAddress) setDestinationQuery(endAddress);
  }, [endAddress]);

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
          value={!showReqBtn || panelReq ? reqName : proname}
          onChange={(e) => SetReqName(e.target.value)}
          placeholder={t("product-name")}
          className="form-control mt-3"
          name="reqName"
          disabled={!showReqBtn || panelReq ? false : true}
          required
        />

        <InputGroup className="mt-3">
          <Form.Control
            aria-label="Text input with dropdown button"
            className="amount"
            placeholder={t("product-amount")}
            value={reqAmount}
            onChange={(e) => {
              SetReqAmount(e.target.value);
            }}
          />
          <select
            aria-label="Default select example"
            className="select-amount"
            onChange={(e) => {
              SetReqAmountType(e.target.value);
            }}
          >
            <option>{t("tone")}</option>
            <option>{t("cubic-meter")}</option>
            <option>{t("kilo")}</option>
          </select>
        </InputGroup>

        <div className="req-routes">
          {!showReqBtn ? (
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
          ) : (
            panelReq && (
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
            )
          )}

          <input
            type="text"
            value={!showReqBtn || panelReq ? query : procountry}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("start")}
            className="form-control mt-2"
            disabled={!showReqBtn || panelReq ? false : true}
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
            style={{ display: "none" }}
          >
            {t("submit-route")}
          </button>

          {!showReqBtn ? (
            <select
              className="form-control mb-3"
              onChange={sendReqType}
              required
            >
              <option value="">{t("title-req")}</option>
              {requestType.map((type, index) => (
                <option key={index} value={type.name}>
                  {type.name}
                </option>
              ))}
            </select>
          ) : panelReq ? (
            <select
              className="form-control mb-3"
              onChange={sendReqType}
              required
            >
              <option value="">{t("title-req")}</option>
              {requestType.map((type, index) => (
                <option key={index} value={type.name}>
                  {type.name}
                </option>
              ))}
            </select>
          ) : (
            <select
              className="form-control mb-3"
              onChange={sendReqType}
              required
            >
              <option value="">{t("title-req")}</option>
              {requestTypePro.map((type, index) => (
                <option key={index} value={type.name}>
                  {type.name}
                </option>
              ))}
            </select>
          )}

          <InputGroup className="mt-3">
            <CurrencyInput
              id="input-example"
              name="input-name"
              className="amount-price form-control"
              placeholder={handlePrice()}
              decimalsLimit={2}
              onChange={(e) => {
                SetReqPrice(e.target.value);
              }}
            />

            <select
              aria-label="Default select example"
              className="select-price"
              onChange={(e) => {
                SetReqPriceType(e.target.value);
              }}
            >
              <option>$</option>
              <option>ریال</option>
            </select>
          </InputGroup>

          <div className="d-flex">
            <input
              type="tel"
              value={reqCountryCode}
              onChange={(e) => {
                SetReqCountryCode(e.target.value);
              }}
              placeholder={"98+"}
              required
              className="form-control mt-3 country-code"
              name="reqPhone"
              maxLength={3}
            />

            <input
              type="tel"
              value={reqPhone}
              onChange={handleValidPhone}
              placeholder={t("phone")}
              required
              className="form-control mt-3 phone-inp text-end"
              name="reqPhone"
              maxLength={11}
            />
          </div>

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

          <div className="d-flex mt-3">
            <input
              type="checkbox"
              className="check"
              onChange={() => {
                SetReqCheck(!reqCheck);
              }}
            />
            <label htmlFor="" className="check-title">
              {t("check")}
            </label>
          </div>

          <button
            onClick={handleSubmitReq}
            className="btn search-buttons mt-1"
            type="submit"
            disabled={reqCheck == true ? false : true}
          >
            {t("req-btn")}
          </button>
        </>
      </form>
      <p>{message}</p>
    </div>
  );
};
