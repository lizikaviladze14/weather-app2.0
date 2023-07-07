import { useEffect, useState } from "react";
import {
  DetailedWeatherType,
  DailyWeatherType,
  EmptyCurrentWeather,
  HourlyWeatherType,
} from "../types";
import { mockData } from "../mockdata";

interface WeatherData {
  currentWeather: DetailedWeatherType;
  dailyWeather: DailyWeatherType[];
  hourlyWeather: HourlyWeatherType[];
}

interface WeatherHookResult extends WeatherData {
  isLoading: boolean;
}

export const useWeather = (lat: number, lon: number): WeatherHookResult => {
  const [isLoading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useState<WeatherData>({
    currentWeather: EmptyCurrentWeather,
    dailyWeather: [],
    hourlyWeather: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        if (!lat || !lon) {
          setWeatherData({
            currentWeather: mockData.current,
            dailyWeather: mockData.daily,
            hourlyWeather: mockData.hourly,
          });
        } else {
          const response = await fetch(
            `${
              import.meta.env.VITE_WEATHER_API_URL
            }/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${
              import.meta.env.VITE_WEATHER_API_KEY
            }`,
          );
          const result = await response.json();
          setWeatherData({
            currentWeather: result.current,
            dailyWeather: result.daily,
            hourlyWeather: result.hourly,
          });
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [lat, lon]);

  return { ...weatherData, isLoading };
};
