// not using env variable for key, since a get request is directly being done on the client
export const KEY="d8857f32c22748ffbc78c19f6c06ec79" 
export const baseWeatherURL="https://api.openweathermap.org/data/2.5/weather"
export const baseForecastURL="https://api.openweathermap.org/data/2.5/forecast"
export const weatherIconURL="https://openweathermap.org/img/wn/"

export const unitsDef={
    metric:{
        temp:'C',
        speed:'meter/sec'
    },
    imperial:{
        temp:'F',
        speed:'miles/hour'
    }
}