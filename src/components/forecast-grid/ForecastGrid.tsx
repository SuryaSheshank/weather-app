import React, { useEffect, useState } from "react";
import { fetchForecastData } from "./forecast-grid-service";
import { WeatherIcon } from "../weather-icon/WeatherIcon";
import "./forecast-grid.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface ForecastGridProps {
  cityName: string;
  units: "metric" | "imperial";
}

export const ForecastGrid = ({ cityName, units }: ForecastGridProps) => {
  const [forecast, setForecast] = useState<any>([]);

  useEffect(() => {
    const fetchForecastWeather = async () => {
      setForecast(await fetchForecastData(cityName, units));
    };

    fetchForecastWeather();
  }, [cityName, units]);


  return (
    <Box p={1}>
      <Typography variant="caption">5-DAY-FORECAST</Typography>
      {forecast && (
        <Box className="forecast-container" p={2}>
          {forecast?.dateKeys?.map((item: any,index:number) => {
            const date = new Date(item);
            date.setHours(0, 0, 0, 0);
            const now = new Date();
            now.setHours(0, 0, 0, 0);
            const today = date.getTime() === now.getTime();
            const day = today
              ? "Today"
              : date.toLocaleDateString("en-US", { weekday: "long" });
            const { temp_min, temp_max, icon, main } =
              forecast?.forecastData[item];
            return (
              
              <Box key={index}  display="grid" gridTemplateColumns={"1fr 1fr 1fr 1fr"}>
                <div style={{marginTop:'14px'}}>{day}</div>
                {icon && <WeatherIcon icon={icon} alt={main} />}
                <div style={{marginTop:'14px'}}>L : {temp_min}</div>
                <div style={{marginTop:'14px'}}>H : {temp_max}</div>
                
              </Box>
              
            );
          })}
        </Box>
      )}
    </Box>
  );
};
