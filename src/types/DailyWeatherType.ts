import {CurrentWeatherDetailsType} from "./CurrentWeatherDetailsType";
import {DailyWeatherTempType, EmptyDailyWeatherTemp} from "./DailyWeatherTempType"
import {DailyWeatherFeelsLikeType, EmptyDailyWeatherFeelsLike} from "./DailyWeatherFeelsLikeType"
export interface DailyWeatherType {
    dt: number;
    sunrise: number;
    sunset: number;
    moonrise: number;
    moonset: number;
    moon_phase: number;
    temp: DailyWeatherTempType;
    feels_like: DailyWeatherFeelsLikeType;
    pressure: number;
    humidity: number;
    dew_point: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: CurrentWeatherDetailsType[];
    clouds: number;
    pop: number;
    rain: number;
    uvi: number;
}

export const EmptyDailyWeather: DailyWeatherType = {
    dt: 0,
    sunrise: 0,
    sunset: 0,
    moonrise: 0,
    moonset: 0,
    moon_phase: 0,
    temp: EmptyDailyWeatherTemp,
    feels_like: EmptyDailyWeatherFeelsLike,
    pressure: 0,
    humidity: 0,
    dew_point: 0,
    wind_speed: 0,
    wind_deg: 0,
    wind_gust: 0,
    weather: [],
    clouds: 0,
    pop: 0,
    rain: 0,
    uvi: 0,
}