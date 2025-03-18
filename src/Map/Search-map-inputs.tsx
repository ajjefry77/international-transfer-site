import { useEffect, useState } from "react";
import "./Map.css";
import Cookies from "js-cookie";
import axios from "axios";
import * as Router from "react-router-dom";
import Swal from "sweetalert2";


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
  const location = Router.useLocation();

  const showReqBtn = location.pathname === "/userPanel";

  const predefinedRoutes = [
    { name: " تهران به مشهد", start: "تهران", end: "مشهد" },
    { name: "تهران به استانبول", start: "تهران", end: "استانبول" },
    { name: "مشهد به نیویورک", start: "مشهد", end: "نیویورک" },
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

  const handleSendData = async (event: any) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/map.php", {query,destinationQuery},{withCredentials: true});
      setMessage(response.data.message);
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
  

  

  return (
    <div style={{ margin: "10px", gap: "10px", position: "relative" }}>
      <form>
        <p>مسیر ها پیشفرض</p>
        <select
          onChange={handlePredefinedRouteSelect}
          className="form-control mb-5"
        >
          <option value="">یک مسیر را انتخاب کنید</option>
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
          className="form-control"
          name="query"
        />
        <button
          onClick={() => onSearchStart(query)}
          className="btn search-buttons"
          type="button"
        >
          انتخاب مبدا
        </button>

        <input
          type="text"
          value={destinationQuery}
          onChange={(e) => setDestinationQuery(e.target.value)}
          placeholder="مقصد"
          className="form-control"
          name="destinationQuery"
        />
        <button
          onClick={() => onSearchDestination(destinationQuery)}
          className="btn search-buttons"
          type="button"
        >
          انتخاب مقصد
        </button>

        <br />

        {showReqBtn ? (
          <button
            onClick={handleSendData}
            className="btn search-buttons mt-5"
            type="submit"
            disabled={query && destinationQuery ? (false) : (true)}
          >
            ثبت درخواست
          </button>
        ) : (
          <button className="btn search-buttons" type="submit">
            بررسی
          </button>
        )}
      </form>

      <br></br>
      <br></br>
      
    </div>
  );
};
