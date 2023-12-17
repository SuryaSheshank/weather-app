import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
interface MapProps{
  lat:number,
  lon:number
}
export const Map = ({lat,lon}:MapProps) => {
  const mapIcon = new Icon({
    iconUrl: require("../../assets/location.png"),
    iconSize: [38, 38],
  });
  return (
    <>
    {lat&&lon? <MapContainer center={[lat, lon]} zoom={10} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lon]} icon={mapIcon}>
      </Marker>
    </MapContainer>:''}
    </>
  );
};
