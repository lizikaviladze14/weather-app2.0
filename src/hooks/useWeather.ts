import { useEffect, useState } from "react";
import {
    CurrentWeatherType,
    DailyWeatherType,
    EmptyCurrentWeather,
    HourlyWeatherType
} from "../types"

interface WeatherData {
    currentWeather: CurrentWeatherType;
    dailyWeather: DailyWeatherType[];
    hourlyWeather: HourlyWeatherType[];
}

interface WeatherHookResult extends WeatherData {
    isLoading: boolean;
}

export const useWeather = (): WeatherHookResult => {
    const [isLoading, setIsLoading] = useState(false);
    const [weatherData, setWeatherData] = useState<WeatherData>({
        currentWeather: EmptyCurrentWeather,
        dailyWeather: [],
        hourlyWeather: []
    });

    const [lat, setLat] = useState(0);
    const [lon, setLong] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(
                    `${import.meta.env.VITE_WEATHER_API_URL}/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
                );
                const result = await response.json();
                setWeatherData({
                    currentWeather: result.current,
                    dailyWeather: result.daily,
                    hourlyWeather: result.hourly
                });
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [lat, lon]);

    useEffect(() => {
        const updateLocation = (position: GeolocationPosition) => {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        }
        const handleLocationError = (error: GeolocationPositionError) => {
            console.error(error);
        }

        const options = { enableHighAccuracy: true, maximumAge: 30000, timeout: 27000 };
        navigator.geolocation.getCurrentPosition(updateLocation, handleLocationError, options);
    }, [])

    return { ...weatherData, isLoading };
};
