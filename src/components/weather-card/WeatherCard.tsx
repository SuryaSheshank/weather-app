import React, { useEffect, useState } from "react";
import { fetchWeatherData } from "./weather-card-service";




export const WeatherCard= ()=>{
    const [data,setData]=useState("")
    useEffect(()=>{
        const fetchData=async ()=>{
            setData(JSON.stringify(await fetchWeatherData("Hyderabad")));
        }
        fetchData();
    })
    return (
        <div>
            {data}
        </div>
    )
}