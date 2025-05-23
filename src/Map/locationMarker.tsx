import { Marker, useMap, useMapEvent } from "react-leaflet"
import L, { LeafletMouseEvent } from "leaflet"
import React, { ForwardedRef, forwardRef, useContext, useState } from "react"
import axios from "axios"
import { Map, } from '../Map/Map';
interface Position {
    lng: number;
    lat: number;
  }
interface MyComponentProps {
  handleAddress: (newMessage: string) => void;

 }

 const LocationMarker = forwardRef<L.Map, MyComponentProps>(({handleAddress}, mapRef )  =>{
    const map = useMap()
    
    const getLocation = async({lat,lng}:Position)=>{
      const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&addressdetails=1&accept-language=fa&extratags=1&namedetails=1&polygon_geojson=1
      `)
        if (response.data.address) {
            const address = [
              response.data.address.road,
              response.data.address.suburb,
              response.data.address.neighbourhood,
              response.data.address.city,
              response.data.address.country,
            ]
              .filter(Boolean)
              .join(', ');
            return address;
          } else {
            throw new Error('آدرس وجود ندارد');
          }
        
    }

    
    const centerPoint: L.LatLngExpression = [40.4530225, -3.6874219587470445]
    const [locList, setLocList] = useState<L.LatLngExpression[]>([])
    const markerIcon = L.divIcon({
        className: 'selected-icon',
        html: `<svg width="28" height="33" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.17846 0.843094C5.14483 -0.299453 7.56183 -0.279483 9.50975 0.895405C11.4385 2.09422 12.6108 4.23376 12.5999 6.5353C12.555 8.82174 11.298 10.971 9.72673 12.6325C8.81985 13.5958 7.80535 14.4475 6.70396 15.1704C6.59053 15.236 6.46628 15.2799 6.33734 15.3C6.21324 15.2947 6.09239 15.258 5.98568 15.1933C4.30418 14.1071 2.829 12.7206 1.6311 11.1006C0.628731 9.74823 0.0592531 8.11441 1.99923e-06 6.42098C-0.00129925 4.11502 1.21209 1.98564 3.17846 0.843094ZM4.31507 7.37541C4.64584 8.19086 5.42658 8.72276 6.29276 8.72277C6.86021 8.72684 7.40569 8.49955 7.80765 8.09153C8.20961 7.68352 8.43465 7.12868 8.43264 6.55065C8.43567 5.66834 7.91623 4.87119 7.11686 4.5314C6.31748 4.19162 5.39586 4.37622 4.78231 4.99902C4.16875 5.62182 3.9843 6.55996 4.31507 7.37541Z" fill="#BA0000"/>
      <ellipse opacity="0.4" cx="6.29956" cy="17.0999" rx="4.5" ry="0.9" fill="#BA0000"/>
      </svg>
      `,
        iconSize: [30, 30],
      });

    useMapEvent('click', (event: LeafletMouseEvent)=>{
        setLocList((prev) => [...prev, event.latlng])
        getLocation(event.latlng).then((Response)=>{
            handleAddress(Response)
        })

    })
    return(<>
    {locList.map((item, index)=><Marker key={index} position={item} icon={markerIcon}/>)}
    <Marker position={centerPoint} icon={markerIcon}/>
    </>)
})

export default LocationMarker
 
