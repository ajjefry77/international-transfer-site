import { useEffect, useState } from "react";
import "./Map.css";
import Cookies from "js-cookie";
import axios from "axios";
import * as Router from "react-router-dom";
import Swal from "sweetalert2";
import { log } from "console";

interface SearchBoxProps {
  onSearchStart: (query: string) => void;
  onSearchDestination: (query: string) => void;
  onRouteTypeChange: (routeType: string) => void;
}

export const SearchBox = ({
  onSearchStart,
  onSearchDestination,
  onRouteTypeChange,
}: SearchBoxProps) => {
  const [query, setQuery] = useState("");
  const [destinationQuery, setDestinationQuery] = useState("");
  const [routeType, setRouteType] = useState("driving");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [reqType, SetReqType] = useState("");
  const [reqName, SetReqName] = useState("");
  const [reqCount, SetReqCount] = useState("");
  const [reqEmail, SetReqEmail] = useState("");
  const [reqPhone, SetReqPhone] = useState("");
  const location = Router.useLocation();

  const showReqBtn = location.pathname === "/userPanel";

  const predefinedRoutes = [
    { name: " تهران به مشهد", start: "تهران", end: "مشهد" },
    { name: "تهران به استانبول", start: "تهران", end: "استانبول" },
    { name: "مشهد به نیویورک", start: "مشهد", end: "نیویورک" },
  ];

  const requestType = [
    { name: "درخواست محصول پیشنهادی" },
    { name: "حمل محصول" },
    { name: "۰ تا ۱۰۰" },
  ];

  const handlePredefinedRouteSelect = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
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

  const setStartEnd = (e: any) => {
    e.preventDefault();
    onSearchStart(query);
    onSearchDestination(destinationQuery);
  };

  const handleSendData = async (event: any) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/map.php",
        { query, destinationQuery },
        { withCredentials: true }
      );
      Swal.fire({
        icon: "success",
        title: "درخواست شما با موفقیت ثبت شد",
        text: "کارشناسان ما در اصرا وقت با شما تماس خواهند گرفت",
        confirmButtonText: "متوجه شدم",
      });
    } catch (error) {
      setMessage("خطا در ارسال درخواست");
      Swal.fire({
        icon: "error",
        title: " خطا در ارسال درخواست ",
        confirmButtonText: "متوجه شدم",
      });
    }
  };

  const sendReqType = (e: any) => {
    const selectedType = requestType.find(
      (type) => type.name === e.target.value
    );
    if (selectedType) {
      SetReqType(selectedType.name);
    }
  };

  const handleSendReqType = async (event: any) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/homereq.php", {
        reqType,
        query,
        destinationQuery,
        reqName,
        reqCount,
        reqEmail,
        reqPhone,
        name,
      });
      setMessage("کد رهگیری شما:" + response.data.message)
      if (name && reqName && reqType && reqCount && reqEmail && reqPhone) {
        Swal.fire({
          icon: "success",
          title: "درخواست شما با موفقیت ثبت شد",
          text: `کارشناسان ما در اصرا وقت با شما تماس خواهند گرفت کد رهگیری شما}`,
          confirmButtonText: "متوجه شدم",
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
        title: " خطا در ارسال درخواست ",
        confirmButtonText: "متوجه شدم",
      });
    }
  };

  return (
    <div style={{ margin: "10px", gap: "10px", position: "relative" }}>
      <form>
        <select onChange={handlePredefinedRouteSelect} className="form-control">
          <option value="">مسیر ها پیش فرض</option>
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
          placeholder="مبدا"
          className="form-control mt-3"
          name="query"
        />

        <input
          type="text"
          value={destinationQuery}
          onChange={(e) => setDestinationQuery(e.target.value)}
          placeholder="مقصد"
          className="form-control mt-4"
          name="destinationQuery"
        />

        <br />

        {showReqBtn ? (
          <>
            <button
              onClick={setStartEnd}
              className="btn search-buttons"
              type="submit"
              disabled={query && destinationQuery ? false : true}
            >
              ثبت مسیر
            </button>
            <button
              onClick={handleSendData}
              className="btn search-buttons mt-5"
              type="submit"
              disabled={query && destinationQuery ? false : true}
            >
              ثبت درخواست
            </button>
          </>
        ) : (
          <>
            <button
              onClick={setStartEnd}
              className="btn search-buttons"
              type="submit"
              disabled={query && destinationQuery ? false : true}
            >
              ثبت مسیر
            </button>

            <form action="">
              <p>نوع درخواست:</p>
              <select
                className="form-control mb-3"
                onChange={sendReqType}
                required
              >
                <option value="">لطفا یکی از موارد زیر را انتخاب کنید</option>
                {requestType.map((type, index) => (
                  <option key={index} value={type.name}>
                    {type.name}
                  </option>
                ))}
              </select>

              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="نام و نام خانوادگی"
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
                placeholder="نام محصول"
                className="form-control mt-3"
                name="reqName"
                required
              />
              <input
                type="text"
                value={reqCount}
                onChange={(e) => {
                  SetReqCount(e.target.value);
                }}
                placeholder="مقدار محصول"
                className="form-control mt-3"
                name="reqName"
                required
              />
              <input
                type="text"
                value={reqPhone}
                onChange={(e) => {
                  SetReqPhone(e.target.value);
                }}
                placeholder="شماره تماس"
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
                placeholder="ایمیل"
                required
                className="form-control mt-3"
                name="reqEmail"
              />

              <button
                onClick={handleSendReqType}
                className="btn search-buttons mt-3"
                type="submit"
              >
                ثبت درخواست
              </button>
            </form>
            {/* <span>{message}</span> */}
          </>
        )}
      </form>
      <p>{message}</p>
    </div>
  );
};
