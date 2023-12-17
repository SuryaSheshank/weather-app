import React, { useEffect, useState } from "react";
import { fetchWeatherData } from "./current-weather-card-service";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import { WeatherIcon } from "../weather-icon/WeatherIcon";
import AirIcon from "@mui/icons-material/Air";
import CompressIcon from "@mui/icons-material/Compress";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "./current-weather-card.css";
import { unitsDef } from "../../constants";
import Box from "@mui/material/Box";

interface CurrentWeatherCardProps {
  cityName: string;
  units: "metric" | "imperial";
}

const getWindDirection = (degrees: number | undefined) => {
  if (!degrees) return "";
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const index = Math.round(degrees / 45) % 8;
  return directions[index];
};

export const CurrentWeatherCard = ({
  cityName,
  units,
}: CurrentWeatherCardProps) => {
  const [currWeather, setCurrWeather] = useState<any>();
  useEffect(() => {
    const fetchCurrWeather = async () => {
      setCurrWeather(await fetchWeatherData(cityName, units));
    };

    fetchCurrWeather();
  }, [cityName, units]);
  return (
    <>
      <CardHeader title={`${cityName}`} titleTypographyProps={{ variant: "h3" }} />
      <div className="current-weather-grid-container">
        <div className="flex-container">
          {currWeather?.weather[0]?.icon && (
            <WeatherIcon
              icon={currWeather?.weather[0]?.icon}
              alt={currWeather?.weather[0]?.main}
            />
          )}
          <Typography variant="h3">
            {currWeather?.main?.temp} {unitsDef[units]?.temp}&deg;
          </Typography>
        </div>

        <div>
          <Box p={2}>
            <div className="flex-container flex-container-gap">
              <div className="flex-container">
                <AirIcon />
                <Typography>
                  {currWeather?.wind?.speed} {unitsDef[units].speed}{" "}
                  {getWindDirection(currWeather?.wind?.deg)}
                </Typography>
              </div>
              <div className="flex-container">
                <CompressIcon />
                <Typography>{currWeather?.main?.pressure} Pa</Typography>
              </div>
            </div>
            <div className="flex-container flex-container-gap">
              <Typography>
                Humidity : {currWeather?.main?.humidity} %
              </Typography>
              <div className="flex-container">
                <VisibilityIcon />{" "}
                <Typography sx={{ marginLeft: "4px" }}>
                  {currWeather?.visibility
                    ? currWeather?.visibility / 1000
                    : ""}{" "}
                  km
                </Typography>
              </div>
            </div>
          </Box>
        </div>
      </div>
    </>
  );
};
