import "./App.css";
import Header from "./components/header/header";
import HourlyWeatherSection from "./components/hourly-weather-section/hourly-weather-section";
import DailyWeatherSection from "./components/daily-weather-section/daily-weather-section";
import { useWeather } from "./hooks/useWeather";
import { useEffect, useState } from "react";
import TopBar from "./components/top-bar/top-bar";
import { useLocation } from "./hooks/useLocation";
import { mockData } from "./mockdata";

function App() {
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (!theme) {
      localStorage.setItem("theme", "light-mode");
    }
  }, []);
  const [addressValue, setAddressValue] = useState("");
  const handleAddressValue = (addressValue: string) => {
    setAddressValue(addressValue);
  };
  if (!addressValue) {
    const { lat, lon, cityName, countryName } = { mockData };
  }
  const { lat, lon, cityName, countryName } = useLocation(addressValue);
  const { currentWeather, dailyWeather, hourlyWeather, isLoading } = useWeather(
    lat,
    lon,
  );
  return (
    <div>
      <TopBar />
      <Header
        isLoading={isLoading}
        currentWeather={currentWeather}
        emitAddressValue={handleAddressValue}
        cityName={cityName}
        countryName={countryName}
      />
      <HourlyWeatherSection
        isLoading={isLoading}
        hourlyWeather={hourlyWeather}
      />
      <DailyWeatherSection isLoading={isLoading} dailyWeather={dailyWeather} />
    </div>
  );
}

export default App;
