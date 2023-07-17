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
  weatherError: string;
}

export const useWeather = (
  lat: number | null,
  lon: number | null,
  isMockData = true,
  weatherUnitValue: string,
): WeatherHookResult => {
  const [isLoading, setIsLoading] = useState(false);
  const [weatherError, setWeatherError] = useState<any>("");
  const [weatherData, setWeatherData] = useState<WeatherData>({
    currentWeather: EmptyCurrentWeather,
    dailyWeather: [],
    hourlyWeather: [],
  });

  const fetchMockData = () => {
    console.log("fetch mock data");
    setWeatherData({
      currentWeather: mockData.current,
      dailyWeather: mockData.daily,
      hourlyWeather: mockData.hourly,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        if (isMockData || !lat || !lon) {
          fetchMockData();
        } else {
          if (import.meta.env.VITE_WEATHER_API_KEY) {
            const response = await fetch(
              `${
                import.meta.env.VITE_WEATHER_API_URL
              }/onecall?lat=${lat}&lon=${lon}&units=${weatherUnitValue}&appid=${
                import.meta.env.VITE_WEATHER_API_KEY
              }`,
            );
            const result = await response.json();
            console.log(result);
            setWeatherData({
              currentWeather: result.current,
              dailyWeather: result.daily,
              hourlyWeather: result.hourly,
            });
          } else {
            setWeatherError("Invalid Weather API Key");
          }
        }
      } catch (error) {
        console.error(error);
        setWeatherError(error);
        // Handle the error here, e.g., set an error state or display an error message.
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [lat, lon, isMockData, weatherUnitValue]);

  return { ...weatherData, isLoading, weatherError };
};
