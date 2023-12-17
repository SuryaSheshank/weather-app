import { KEY, baseForecastURL } from "../../constants";


export const fetchForecastData=async (cityName:string,units:'metric' | 'imperial')=>{
    try{
        const forecastUrl=`${baseForecastURL}?q=${cityName}&appid=${KEY}&units=${units}`;
        const result=await fetch(forecastUrl);
        const data=await result.json();
        let forecastData:any={};
        data.list.forEach((item:any) => {
            const date=item.dt_txt.split(" ")[0]
            if(forecastData&&forecastData[date]){
                if(item.main.temp_min<forecastData[date].temp_min){
                    forecastData[date].temp_min=item.main.temp_min;
                }
                if(item.main.temp_max>forecastData[date].temp_max){
                    forecastData[date].temp_max=item.main.temp_max;
                }
            }else{

                forecastData[date]={
                    temp_min:item.main.temp_min,
                    temp_max:item.main.temp_max,
                    icon:item.weather[0].icon,
                    main:item.weather[0].main
                }
            }
        });
        const dateKeys=Object.keys(forecastData);
        return {
            dateKeys,
            forecastData
        }

    }catch(ex){
        console.log(ex);
    }
}