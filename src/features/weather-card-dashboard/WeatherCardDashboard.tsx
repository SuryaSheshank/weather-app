import React from 'react';
import Paper from '@mui/material/Paper';
import { useCityContext } from '../../contexts/CityContext';
import { WeatherCard } from '../weather-card/WeatherCard';
import { useUnitsContext } from '../../contexts/UnitsContext';
import Box from '@mui/material/Box';

export const WeatherCardDashboard=()=>{
    const {cities}=useCityContext();
    const {units}=useUnitsContext();
    return (
        <Box  sx={{
            display:'grid',
            gridTemplateColumns:{sm:'1fr',
            md:'1fr 1fr 1fr',
            lg:'1fr 1fr 1fr',
        },
        gap:'10px',
        marginLeft:'20px'
        }}>
        {cities?.map((cityName)=>{
            return <WeatherCard key={cityName} cityName={cityName} units={units}/>
        })}        
        </Box>
        
    )
}