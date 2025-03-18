import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  useMap,
  Polyline,
  CircleMarker,
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
import  * as Router from "react-router-dom";

const ChangeMapView = ({
  coords,
}: {
  coords: { lat: number; lng: number };
}) => {
  const map = useMap();
  map.setView([coords.lat, coords.lng], 13);
  return null;
};

// const AnimatedPolyline = ({ positions }: { positions: [number, number][] }) => {
//   const map = useMap();
//   const [index, setIndex] = useState(0);
//   const [animatedCoords, setAnimatedCoords] = useState<[number, number][]>([]);

//   useEffect(() => {
//     if (positions.length === 0) return;

//     setAnimatedCoords([]);

//     let i = 0;
//     const interval = setInterval(() => {
//       if (i < positions.length) {
//         setAnimatedCoords((prev) => [...prev, positions[i]]);
//         i++;
//       } else {
//         clearInterval(interval);
//       }
//     }, 200); // تنظیم سرعت انیمیشن

//     return () => clearInterval(interval);
//   }, [positions]);

//   return (
//     <Polyline
//       positions={animatedCoords}
//       pathOptions={{ color: "orange", weight: 5, dashArray: "10, 10" }} // استایل زیبا‌تر
//     />
//   );
// };

export const Map = () => {
  const centerPoint: L.LatLngExpression = [40.4530225, -3.6874219587470445];
  const [startCoords, setStartCoords] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [endCoords, setEndCoords] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [routeCoords, setRouteCoords] = useState<[number, number][]>([]);
  const [curvedRouteCoords, setCurvedRouteCoords] = useState<
    [number, number][]
  >([]); // ذخیره مسیر کمانی
  const [travelTime, setTravelTime] = useState<number | null>(null);
  const [routeType, setRouteType] = useState("driving"); // به طور پیش‌فرض مسیر زمینی است
  const [loading, setLoading] = useState(false);
  const { userId } = useParams();
  const location = Router.useLocation()

  const mapStyle = location.pathname === "/userPanel";

  const getSearchLocation = async (query: string) => {
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

  const handleSearchStart = async (query: string) => {
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
  
  const handleSearchDestination = async (query: string) => {
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
  
  // ✅ استفاده از useEffect برای فراخوانی getRoute پس از تغییر مبدا یا مقصد
  useEffect(() => {
    if (startCoords && endCoords) {
      getRoute(startCoords, endCoords);
    }
  }, [startCoords, endCoords]); // هر بار که startCoords یا endCoords تغییر کند، getRoute اجرا می‌شود
  

  const handleRouteTypeChange = (routeType: string) => {
    setRouteType(routeType);
  };

  const getRoute = async (
    start: { lat: number; lng: number },
    end: { lat: number; lng: number }
  ) => {
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
        const transformedCoords = route.geometry.coordinates.map(
          (coord: [number, number]) => [coord[1], coord[0]]
        );

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

  
  const findEndOfRoad = (routeCoords: [number, number][]) => {
    return routeCoords.length - 1;
  };

 
  const calculateCurve = (
    start: [number, number],
    end: { lat: number; lng: number }
  ) => {
    
    const curve: [number, number][] = [
      start,
      [
        start[0] + (end.lat - start[0]) / 2,
        start[1] + (end.lng - start[1]) / 2,
      ], // نقطه میانه
      [end.lat, end.lng],
    ];
    return curve;
  };

  const formatTravelTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    if (hours > 0) {
      return `${hours} ساعت و ${minutes % 60} دقیقه`;
    }
    return `${minutes} دقیقه`;
  };

  return (
   
      <>
        <div
          style={{
            position: "relative",
            width: "80%",
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
            marginRight: `${mapStyle && "10%"}`
          }}
        >
          {travelTime !== null && (
            <div
              style={{
                position: "absolute",
                top: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 1000,
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                padding: "10px",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              ⏳ زمان تخمینی سفر: {formatTravelTime(travelTime)}
            </div>
          )}

              <div
                style={{
                  position: "relative",
                  backgroundColor: "rgba(234, 239, 245, 0.767)",
                  borderRadius: "10px",
                  height: "90%",
                  marginLeft: "1%",
                }}
              >
                <SearchBox
                  onSearchStart={handleSearchStart}
                  onSearchDestination={handleSearchDestination}
                  onRouteTypeChange={handleRouteTypeChange}
                />
              </div>

          {loading ? (
            <div style={{ position: "absolute", top: "30%" }}>
              <FourSquare color="#691307" size="medium" text="" textColor="" />
            </div>
          ) : (
            <>
              

              <MapContainer
                style={{
                  position: "relative",
                  width: "80%",
                  height: "90%",
                  borderRadius: "10px",
                }}
                center={centerPoint}
                zoom={13}
              >
                <TileLayer
                  attribution='&copy; <a href="https://carto.com/">CARTO</a>'
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />

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
