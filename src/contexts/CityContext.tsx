import React, { createContext, useContext, useState } from "react";
import { DropResult } from "react-beautiful-dnd";

interface CityContextProviderProps {
  children: React.ReactNode;
}

type CityContextType = {
  cities: string[];
  setCities: React.Dispatch<React.SetStateAction<string[]>>;
  response: any;
  setResponse: React.Dispatch<React.SetStateAction<any>>;

};

export const CityContext = createContext<CityContextType | undefined>(
  undefined
);
export const CityContextProvider = ({ children }: CityContextProviderProps) => {
  const locCities=JSON.parse(localStorage.getItem('cities')||'[]');
  const [cities, setCities] = useState<string[]>(locCities);
  const [response, setResponse] = useState<any>();

  return (
    <CityContext.Provider value={{ cities, setCities,response,setResponse }}>
      {children}
    </CityContext.Provider>
  );
};

export const useCityContext = () => {
  const context = useContext(CityContext);
  if (!context) {
    throw new Error("useCityContext must be used within a CityContextProvider");
  }
  return context;
};
