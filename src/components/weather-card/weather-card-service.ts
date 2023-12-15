import { KEY, baseWeatherURL } from "../../constants";

export const fetchWeatherData= async (cityName:string)=>{
    const weatherUrl=`${baseWeatherURL}?q=${cityName}&appid=${KEY}`
    const result=await fetch(weatherUrl);
    const data=await result.json();
    return data;
}
