import React from "react";
import Box from "@mui/material/Box";
import CitySearch from "../../components/city-search/CitySearch";
import { UnitsToggle } from "../../components/units-toggle/UnitsToggle";

export const Header = () => {
  return (
    <Box display="flex" justifyContent="space-between" marginBottom={1} p={2} sx={{backgroundColor:"#FAF6F0"}}>
      <CitySearch />
      <UnitsToggle />
    </Box>
  );
};
