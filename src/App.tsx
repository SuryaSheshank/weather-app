import React from "react";
import { ToastContainer } from "react-toastify";
import { CityContextProvider } from "./contexts/CityContext";
import { WeatherCardDashboard } from "./features/weather-card-dashboard/WeatherCardDashboard";
import { UnitsContextProvider } from "./contexts/UnitsContext";
import { Header } from "./features/header/Header";
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <UnitsContextProvider>
      <CityContextProvider>
        <Header />
        <WeatherCardDashboard />
      </CityContextProvider>
    </UnitsContextProvider>
    <ToastContainer/>
    </>

  );
}

export default App;
