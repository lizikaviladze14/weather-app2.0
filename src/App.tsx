import "./App.scss";
import Header from "./components/header/header";
import HourlyWeatherSection from "./components/hourly-weather-section/hourly-weather-section";
import DailyWeatherSection from "./components/daily-weather-section/daily-weather-section";
import { useWeather } from "./hooks/useWeather";
import { useEffect, useState } from "react";
import TopBar from "./components/top-bar/top-bar";
import { useLocation } from "./hooks/useLocation";
import { Provider } from "react-redux";
import { store } from "./store/store";
import SplashScreen from "./components/base/splash-screen/splash-screen";
import {
  DailyWeatherType,
  DetailedWeatherType,
  HourlyWeatherType,
  WeatherUnitType,
} from "./types";
import { SpeedUnitType } from "./types/SpeedUnitType";

function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [addressValue, setAddressValue] = useState("");
  // for useWeather api
  const [weatherUnitValue, setWeatherUnitValue] = useState("metric");
  // for weather-unit component
  const [weatherUnit, setWeatherUnit] = useState<WeatherUnitType>("C");
  const [speedUnit, setSpeedUnit] = useState<SpeedUnitType>("m/s");
  const [currentWeather, setCurrentWeather] = useState<DetailedWeatherType>(
    {} as DetailedWeatherType,
  );
  const [dailyWeather, setDailyWeather] = useState<DailyWeatherType[]>([]);
  const [hourlyWeather, setHourlyWeather] = useState<HourlyWeatherType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const handleAddressValue = (addressValue: string) => {
    setAddressValue(addressValue);
  };

  const handleWeatherUnitValue = (unitValue: WeatherUnitType) => {
    if (unitValue === "F") {
      setWeatherUnit("F");
      setSpeedUnit("m/h");
      setWeatherUnitValue("imperial");
    } else {
      setWeatherUnit("C");
      setSpeedUnit("m/s");
      setWeatherUnitValue("metric");
    }
  };

  // This variable is the indicator of retrieving real data
  // or displaying the mock data.
  // If it is set to true, there will be displayed the fake data
  // from the file 'mockdata.ts', however, setting this variable to
  // false will change nothing if you have not few mandatory
  // api keys (which I use to retrieve the real data)
  // in the .env file in the root directory
  const mockData = true;

  const { lat, lon, cityName, countryName, isAppLoading, error } = useLocation(
    addressValue,
    mockData,
  );
  const {
    currentWeather: weatherCurrent,
    dailyWeather: weatherDaily,
    hourlyWeather: weatherHourly,
    isLoading: weatherIsLoading,
    weatherError,
  } = useWeather(lat, lon, mockData, weatherUnitValue);

  const icon_01d = "icon_01d";

  useEffect(() => {
    if (!isAppLoading) {
      setIsDataLoaded(true);
    }
  }, [isAppLoading]);

  useEffect(() => {
    setCurrentWeather(weatherCurrent);
    setDailyWeather(weatherDaily);
    setHourlyWeather(weatherHourly);
    setIsLoading(weatherIsLoading);
  }, [weatherCurrent, weatherDaily, weatherHourly, weatherIsLoading]);

  if (!isDataLoaded) {
    return <SplashScreen />; // Render a loader while the data is loading
  }

  return (
    <Provider store={store}>
      {error ? (
        <div className={"error"}>{error}</div>
      ) : weatherError ? (
        <div className={"error"}>{weatherError}</div>
      ) : (
        <div>
          <TopBar handleWeatherUnitValue={handleWeatherUnitValue} />
          <Header
            isLoading={isLoading}
            currentWeather={currentWeather}
            emitAddressValue={handleAddressValue}
            cityName={cityName}
            countryName={countryName}
            errorMsg={error}
            weatherUnit={weatherUnit}
            speedUnit={speedUnit}
          />
          <HourlyWeatherSection
            isLoading={isLoading}
            hourlyWeather={hourlyWeather}
            weatherUnit={weatherUnit}
          />
          <DailyWeatherSection
            isLoading={isLoading}
            dailyWeather={dailyWeather}
            weatherUnit={weatherUnit}
            speedUnit={speedUnit}
          />
        </div>
      )}
    </Provider>
  );
}

export default App;
