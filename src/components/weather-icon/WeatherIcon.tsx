import React from "react";
import { weatherIconURL } from "../../constants";
interface WeatherIconProps {
  size?: string;
  icon: string;
  alt?: string;
}
export const WeatherIcon = (props: WeatherIconProps) => {
  return (
  //  <div style={{ display: "flex", alignItems: "flex-start" }}>
    <img
      src={
        props.size
          ? `${weatherIconURL}${props.icon}@${props.size}.png`
          : `${weatherIconURL}${props.icon}.png`
      }
      alt={props.alt}
      // style={{ verticalAlign: "bottom" }} // Adjust the alignment as needed
    />
    // </div>
  );
};
