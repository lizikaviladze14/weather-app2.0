import {CurrentWeatherDetailsType, EmptyCurrentDetails} from "./CurrentWeatherDetailsType"
export interface DetailedWeatherType {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    weather: CurrentWeatherDetailsType[];
}

export const EmptyCurrentWeather: DetailedWeatherType = {
    dt: 0,
    sunrise: 0,
    sunset: 0,
    temp: 0,
    feels_like: 0,
    pressure: 0,
    humidity: 0,
    dew_point: 0,
    uvi: 0,
    clouds: 0,
    visibility: 0,
    wind_speed: 0,
    wind_deg: 0,
    weather: [EmptyCurrentDetails],
}