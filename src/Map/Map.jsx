import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  useMap,
  Polyline,
  CircleMarker,
  Marker,
  Popup,
} from "react-leaflet";
import { useState } from "react";
import axios from "axios";
import { SearchBox } from "./Search-map-inputs";
import { FourSquare } from "react-loading-indicators";
import "leaflet-polylinedecorator";
import { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import PageWrapper from "../PageWrapper";
import * as Router from "react-router-dom";
import LocationMarker from "./locationMarker";

const ChangeMapView = ({ coords }) => {
  const map = useMap();
  map.setView([coords.lat, coords.lng], 13);
  return null;
};

const MapClickHandler = ({
  setStartCoords,
  setEndCoords,
  startCoords,
  setStartAddress,
  setEndAddress,
}) => {
  const map = useMap();

  useEffect(() => {
    const handleMapClick = async (e) => {
      const { lat, lng } = e.latlng;

      try {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
        );
        const address = response.data.display_name;

        if (!startCoords) {
          setStartCoords({ lat, lng });
          setStartAddress(address); // نمایش آدرس در ورودی مبدا
        } else {
          setEndCoords({ lat, lng });
          setEndAddress(address); // نمایش آدرس در ورودی مقصد
        }
      } catch (error) {
        console.error("خطا در دریافت آدرس:", error);
      }
    };

    map.on("click", handleMapClick);
    return () => {
      map.off("click", handleMapClick);
    };
  }, [map, startCoords]);

  return null;
};

export const Map = (props) => {
  const name = props.name
  const country = props.country
  const centerPoint = [40.4530225, -3.6874219587470445];
  const [startCoords, setStartCoords] = useState(null);
  const [endCoords, setEndCoords] = useState(null);
  const [routeCoords, setRouteCoords] = useState([]);
  const [curvedRouteCoords, setCurvedRouteCoords] = useState([]); // ذخیره مسیر کمانی
  const [travelTime, setTravelTime] = useState(null);
  const [routeType, setRouteType] = useState("driving"); // به طور پیش‌فرض مسیر زمینی است
  const [loading, setLoading] = useState(false);
  const location = Router.useLocation();
  const [startAddress, setStartAddress] = useState("");
  const [endAddress, setEndAddress] = useState("");
  const startIcon = L.icon({
    iconUrl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAolJREFUWEfFV7FuE0EQnXdOzzlFaqeHAon0sfIVVMQSvYViKhSRKKIiEUofye7S00e4B4mCD+DqFLlLH+7BnHft9el2vb4E2d351jNvZt57O4Zs+IMN55fWAL6kaU/BP4j03hfFtG0hawHQpKXIGwInDQkzAaadsjx9VxRZLKBoAJ/TdB/At4jAGcjJUVGcRpyNG8F5t6uJ921AArcgb6pn8laS5DnIHYq8sGdAnsSAWNmBhsqvKXJdr65TljtlkhyIyGsHxOCoKCahTgQB6Mz/AL9tgFLkA0R+hQIaIFfmTNYh+yFOBAGcb2+PhTw0wZYrJ7dE5KV591OAB6fyAwGG5nk6yvO+D3QYQLer1fd05kK+dRK8IjCEyLOKBiL3IC8J/NBn7QKTZGg4kY3yfLctAFY/BG5IXhrSbQkwtsnnxBS5F3JgOwHtAKmckFGeewv1vrhI00MCY5NUq7Os3wNw3FQRyTMBvleYZ2SsCEmy7zMrL4Aa+xfzJ+MAaPWGB60A1BTgAlh7BB1y16eEVSSsOKDSUwnGknBGm0dyQINYB6yrYE5GjwwN6K+GwJPR3d2glQqWiCjS6IBNgeHMH2TQDaOdsLEL3rJwpXfDKgmaToWMVWTJDWdmM5Oj5+NWL0Cw/VEAXDVEdQGL6kPsnxM6XP/s7UWafpwvIa4r1n7sMv/JrmPNYbqgO0G1hjXdiur7icgngyno/y7ulfuAPew6Y9MoNLldSELOV+94NIDKF9zr2RmFm/zf5hS8fh8FoD4KWWxGdguKbv1aJHRR11Vh9a5n1ml9awBGFYur2kRqkzzKB3wydaUZK7mmWGuRsD4K/ZOi38Ws317njDGi/3mmdQeeCtTGAfwFgGR0MD9vv0kAAAAASUVORK5CYII=",
    iconSize: [40, 40], // اندازه آیکون
    iconAnchor: [20, 40], // نقطه‌ی لنگر آیکون (پایین مرکز آیکون)
    popupAnchor: [0, -40], // موقعیت پاپ‌آپ نسبت به آیکون
  });

  const endIcon = L.icon({
    iconUrl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAolJREFUWEfFV7FuE0EQnXdOzzlFaqeHAon0sfIVVMQSvYViKhSRKKIiEUofye7S00e4B4mCD+DqFLlLH+7BnHft9el2vb4E2d351jNvZt57O4Zs+IMN55fWAL6kaU/BP4j03hfFtG0hawHQpKXIGwInDQkzAaadsjx9VxRZLKBoAJ/TdB/At4jAGcjJUVGcRpyNG8F5t6uJ921AArcgb6pn8laS5DnIHYq8sGdAnsSAWNmBhsqvKXJdr65TljtlkhyIyGsHxOCoKCahTgQB6Mz/AL9tgFLkA0R+hQIaIFfmTNYh+yFOBAGcb2+PhTw0wZYrJ7dE5KV591OAB6fyAwGG5nk6yvO+D3QYQLer1fd05kK+dRK8IjCEyLOKBiL3IC8J/NBn7QKTZGg4kY3yfLctAFY/BG5IXhrSbQkwtsnnxBS5F3JgOwHtAKmckFGeewv1vrhI00MCY5NUq7Os3wNw3FQRyTMBvleYZ2SsCEmy7zMrL4Aa+xfzJ+MAaPWGB60A1BTgAlh7BB1y16eEVSSsOKDSUwnGknBGm0dyQINYB6yrYE5GjwwN6K+GwJPR3d2glQqWiCjS6IBNgeHMH2TQDaOdsLEL3rJwpXfDKgmaToWMVWTJDWdmM5Oj5+NWL0Cw/VEAXDVEdQGL6kPsnxM6XP/s7UWafpwvIa4r1n7sMv/JrmPNYbqgO0G1hjXdiur7icgngyno/y7ulfuAPew6Y9MoNLldSELOV+94NIDKF9zr2RmFm/zf5hS8fh8FoD4KWWxGdguKbv1aJHRR11Vh9a5n1ml9awBGFYur2kRqkzzKB3wydaUZK7mmWGuRsD4K/ZOi38Ws317njDGi/3mmdQeeCtTGAfwFgGR0MD9vv0kAAAAASUVORK5CYII=",
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });

  const mapStyle = location.pathname === "/userPanel";

  const getSearchLocation = async (query) => {
    setLoading(true);
    const response = await axios.get(
      `https://nominatim.openstreetmap.org/search?q=${query}&format=json&addressdetails=1&accept-language=fa`
    );
    if (response.data.length > 0) {
      const { lat, lon } = response.data[0];
      setLoading(false);
      return { lat: parseFloat(lat), lng: parseFloat(lon) };
    } else {
      throw new Error("موقعیت پیدا نشد");
    }
  };

  const handleSearchStart = async (query) => {
    setLoading(true);
    try {
      const response = await getSearchLocation(query);
      setStartCoords(response); // مقدار جدید را تنظیم می‌کنیم
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "خطا در پیدا کردن مبدا",
        text: "مبدا مورد نظر یافت نشد",
        confirmButtonText: "متوجه شدم",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSearchDestination = async (query) => {
    setLoading(true);
    try {
      const response = await getSearchLocation(query);
      setEndCoords(response); // مقدار جدید را تنظیم می‌کنیم
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "خطا در پیدا کردن مقصد",
        text: "مقصد مورد نظر یافت نشد",
        confirmButtonText: "متوجه شدم",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (startCoords && endCoords) {
      getRoute(startCoords, endCoords);
    }
  }, [startCoords, endCoords]); // هر بار که startCoords یا endCoords تغییر کند، getRoute اجرا می‌شود

  const handleRouteTypeChange = (routeType) => {
    setRouteType(routeType);
  };

  const getRoute = async (start, end) => {
    setLoading(true);
    try {
      let routeUrl = "";
      if (routeType === "driving") {
        routeUrl = `https://router.project-osrm.org/route/v1/driving/${start.lng},${start.lat};${end.lng},${end.lat}?overview=full&geometries=geojson`;
      } else if (routeType === "rail") {
        // مسیر ریلی را برای API خود اضافه کنید
        routeUrl = `https://your-rail-api/route/${start.lng},${start.lat};${end.lng},${end.lat}?overview=full&geometries=geojson`;
      } else if (routeType === "sea") {
        // مسیر دریایی را برای API خود اضافه کنید
        routeUrl = `https://your-sea-api/route/${start.lng},${start.lat};${end.lng},${end.lat}?overview=full&geometries=geojson`;
      }

      const response = await axios.get(routeUrl);

      if (response.data.routes && response.data.routes.length > 0) {
        const route = response.data.routes[0];
        const transformedCoords = route.geometry.coordinates.map((coord) => [
          coord[1],
          coord[0],
        ]);

        setRouteCoords(transformedCoords);
        setTravelTime(route.duration);

        // اگر مسیر جاده‌ای به پایان رسید، کمان را رسم کن
        const roadEndIndex = findEndOfRoad(transformedCoords); // این تابع باید انتهای جاده را پیدا کند
        if (roadEndIndex !== -1) {
          const roadEndCoords = transformedCoords[roadEndIndex];
          setCurvedRouteCoords(calculateCurve(roadEndCoords, end)); // کمان بین نقطه انتهای جاده و مقصد
        }
      } else {
        alert("مسیر یافت نشد!");
      }
    } catch (error) {
      console.error("خطا در دریافت مسیر:", error);
      alert("خطا در دریافت مسیر");
    } finally {
      setLoading(false);
    }
  };

  const findEndOfRoad = (routeCoords) => {
    return routeCoords.length - 1;
  };

  const calculateCurve = (start, end) => {
    const curve = [
      start,
      [
        start[0] + (end.lat - start[0]) / 2,
        start[1] + (end.lng - start[1]) / 2,
      ], // نقطه میانه
      [end.lat, end.lng],
    ];
    return curve;
  };

  const formatTravelTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    if (hours > 0) {
      return `${hours} ساعت و ${minutes % 60} دقیقه`;
    }
    return `${minutes} دقیقه`;
  };

  return (
    <>
      <div style={{}} className="container-fluid m">
        <div className="search-box">
          <SearchBox
            onSearchStart={handleSearchStart}
            onSearchDestination={handleSearchDestination}
            onRouteTypeChange={handleRouteTypeChange}
            startAddress={startAddress}
            endAddress={endAddress}
            proname={name} 
            procountry={country}
          />
        </div>

        {loading ? (
          <>
            <div style={{ position: "relative", top: "30%" }}>
              <FourSquare color="#691307" size="medium" text="" textColor="" />
            </div>
          </>
        ) : (
          <>
            <MapContainer className="map" center={centerPoint} zoom={13}>
              <TileLayer
                attribution='&copy; <a href="https://carto.com/">CARTO</a>'
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              />
              <MapClickHandler
                setStartCoords={setStartCoords}
                setEndCoords={setEndCoords}
                startCoords={startCoords}
                setStartAddress={setStartAddress}
                setEndAddress={setEndAddress}
              />

              {startCoords && (
                <Marker position={startCoords} icon={startIcon}></Marker>
              )}
              {endCoords && (
                <Marker position={endCoords} icon={endIcon}></Marker>
              )}

              {startCoords && <ChangeMapView coords={startCoords} />}
              {endCoords && <ChangeMapView coords={endCoords} />}

              {/* مسیر جاده‌ای */}
              {routeCoords.length > 0 && (
                <Polyline
                  positions={routeCoords}
                  pathOptions={{ color: "#691307", weight: 4 }}
                />
              )}

              {/* مسیر کمانی */}
              {curvedRouteCoords.length > 0 && (
                <Polyline
                  positions={curvedRouteCoords}
                  pathOptions={{ color: "#ff6600", weight: 4 }}
                />
              )}
            </MapContainer>
          </>
        )}
      </div>
    </>
  );
};
