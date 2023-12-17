import React, { useEffect } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useCityContext } from "../../contexts/CityContext";
import { WeatherCard } from "../weather-card/WeatherCard";
import { useUnitsContext } from "../../contexts/UnitsContext";
import "./weather-card-dashboard.css";

interface WeatherCardDashboardProps {
  dragIdx: number[];
}

export const WeatherCardDashboard = ({
  dragIdx,
}: WeatherCardDashboardProps) => {
  const { cities, setCities } = useCityContext();
  const { units } = useUnitsContext();

  useEffect(() => {
    if (dragIdx.length !== 2) return;
    if (dragIdx[0] < 0 || dragIdx[1] < 0) return;
    const newCities = [...cities];
    newCities[dragIdx[0]] = cities[dragIdx[1]];
    newCities[dragIdx[1]] = cities[dragIdx[0]];
    setCities(newCities);
    localStorage.setItem('cities',JSON.stringify(newCities));
  }, [dragIdx]);

  const renderDashboardView = () => {
    if (!cities || cities.length === 0) {
      return (
        <Box
          textAlign="center"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Typography variant="h6">Please search for a city.</Typography>
          <Typography variant="h1">Weather App</Typography>
          <h1>
            <NightsStayIcon color="primary" style={{ fontSize: "10rem" }} />
          </h1>
        </Box>
      );
    }

    return (
      <Droppable droppableId="weather-cards">
        {(provided) => (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "1fr 1fr 1fr",
                lg: "1fr 1fr 1fr",
              },
              gap: "10px",
              marginLeft: "20px",
            }}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {cities?.map((cityName, index) => (
              <Draggable key={cityName} draggableId={cityName} index={index}>
                {(provided) => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    <WeatherCard cityName={cityName} units={units} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    );
  };
  return <>{renderDashboardView()}</>;
};
