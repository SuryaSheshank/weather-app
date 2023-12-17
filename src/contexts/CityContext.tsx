import React, { createContext, useContext, useState } from "react";

interface CityContextProviderProps {
  children: React.ReactNode;
}

type CityContextType = {
  cities: string[];
  setCities: React.Dispatch<React.SetStateAction<string[]>>;
};

export const CityContext = createContext<CityContextType | undefined>(
  undefined
);
export const CityContextProvider = ({ children }: CityContextProviderProps) => {
  const [cities, setCities] = useState<string[]>([]);
  return (
    <CityContext.Provider value={{ cities, setCities }}>
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
