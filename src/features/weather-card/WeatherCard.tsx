import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { CurrentWeatherCard } from "../../components/current-weather-card/CurrentWeatherCard";
import { ForecastGrid } from "../../components/forecast-grid/ForecastGrid";
import { useCityContext } from "../../contexts/CityContext";
import { Map } from "../../components/map/Map";

interface WeatherCardProps {
  cityName: string;
  units: "metric" | "imperial";
}

export const WeatherCard = ({ cityName, units }: WeatherCardProps) => {
  const { setCities } = useCityContext();
  const deleteCities = () => {
    setCities((prevState) => {
        const newCities=prevState.filter((item) => cityName !== item)
        localStorage.setItem('cities',JSON.stringify(newCities));
        return newCities;
    });

  };
  return (

          <Card>
            <Box display="flex" justifyContent="flex-end">
              <IconButton onClick={deleteCities}>
                <DeleteForeverIcon />
              </IconButton>
            </Box>
            <CurrentWeatherCard cityName={cityName} units={units} />
            <ForecastGrid cityName={cityName} units={units} />
          </Card>
      
  );
};
