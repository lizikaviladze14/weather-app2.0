import './App.css'
import Header from "./components/header/header";
import HourlyWeatherSection from "./components/hourly-weather-section/hourly-weather-section";
import DailyWeatherSection from "./components/daily-weather-section/daily-weather-section";
import {useWeather} from "./hooks/useWeather";
import {useEffect} from "react";
import TopBar from "./components/top-bar/top-bar";

function App() {
    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if(!theme) {
            localStorage.setItem('theme', "dark-mode");
        }
    }, [])
    const {currentWeather, dailyWeather, hourlyWeather, isLoading} = useWeather();
    return (
        <div>
            <TopBar />
            <Header isLoading={isLoading} currentWeather={currentWeather}/>
            <HourlyWeatherSection isLoading={isLoading} hourlyWeather={hourlyWeather}/>
            <DailyWeatherSection isLoading={isLoading} dailyWeather={dailyWeather}/>
        </div>
    )
}

export default App;