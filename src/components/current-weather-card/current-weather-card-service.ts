import { KEY, baseWeatherURL } from "../../constants";

export const fetchWeatherData= async (cityName:string,units:'metric' | 'imperial')=>{
    try{
        const weatherUrl=`${baseWeatherURL}?q=${cityName}&appid=${KEY}&units=${units}`
        const result=await fetch(weatherUrl);
        const data=await result.json();
        return data;
    }catch{

    }
    
}


