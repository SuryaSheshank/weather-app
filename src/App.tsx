import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { CityContextProvider } from "./contexts/CityContext";
import { WeatherCardDashboard } from "./features/weather-card-dashboard/WeatherCardDashboard";
import { UnitsContextProvider } from "./contexts/UnitsContext";
import { Header } from "./features/header/Header";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [dragIdx, setDragIdx] = useState<number[]>([]);
  const handleDragEnd = (result: DropResult) => {
    if (!result?.source?.index && result?.source?.index !== 0) return;
    if (!result?.destination?.index && result?.destination?.index !== 0) return;
    if (result.source.index === result.destination.index) return;
    setDragIdx([result.source.index, result.destination.index]);
  };
  return (
    <>
      <UnitsContextProvider>
        <CityContextProvider>
          <Header />
          <DragDropContext onDragEnd={handleDragEnd}>
            <WeatherCardDashboard dragIdx={dragIdx} setDragIdx={setDragIdx}/>
          </DragDropContext>
        </CityContextProvider>
      </UnitsContextProvider>
      <ToastContainer />
    
    </>
  );
}

export default App;
