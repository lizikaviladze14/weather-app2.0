import "./header.scss";
import React, { useEffect, useState } from "react";
import BaseInput from "../base/input/base-input";
import CurrentWeatherInfo from "../current-weather-info/current-weather-info";
import { DetailedWeatherType, WeatherUnitType } from "../../types";
import BaseLoader from "../base/loader/base-loader";
import { useWeatherIcons } from "../../hooks/useWeatherIcons";
import useTheme from "../../hooks/useTheme";
import { SpeedUnitType } from "../../types/SpeedUnitType";

interface Props {
  currentWeather: DetailedWeatherType;
  isLoading: boolean;
  emitAddressValue: (value: string) => void;
  cityName: string;
  countryName: string;
  errorMsg: string | null;
  weatherUnit: WeatherUnitType;
  speedUnit: SpeedUnitType;
}
const Header: React.FC<Props> = ({
  currentWeather,
  isLoading,
  emitAddressValue,
  cityName,
  countryName,
  errorMsg,
  weatherUnit,
  speedUnit,
}) => {
  const [icon, setIcon] = useState();
  const { theme } = useTheme();

  const { weatherIcons } = useWeatherIcons(theme);

  const handleInputEnter = (addressValue: string) => {
    emitAddressValue(addressValue);
  };

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const iconPath = weatherIcons[currentWeather.weather[0].icon];
        const response = await import(iconPath);
        setIcon(response.default);
      } catch (err) {
        console.log(err);
      }
    };

    fetchImage();
  }, [currentWeather]);

  const currentDate = new Date();
  const formattedDate = currentDate.toDateString();

  return (
    <div className={"header"}>
      {isLoading ? (
        <BaseLoader />
      ) : (
        <div className={"part left"}>
          <h1>{cityName}</h1>
          <h2>{countryName}</h2>
          <p>{formattedDate}</p>
          <div className={"weather-icon"}>
            <img src={icon} alt={currentWeather.weather[0].description} />
          </div>
        </div>
      )}
      {isLoading ? (
        <BaseLoader />
      ) : (
        <div className={"part right"}>
          <BaseInput
            placeholder={"Enter your location..."}
            onKeydown={handleInputEnter}
            errorMsg={errorMsg}
          />
          <div className={"current-weather-wrapper"}>
            <div className={"current-weather"}>
              <p>
                {Math.floor(currentWeather.temp)}&deg;{weatherUnit}
              </p>
              <span>
                Feels like: {Math.floor(currentWeather.feels_like)}&deg;
                {weatherUnit}
              </span>
            </div>
            <CurrentWeatherInfo
              currentWeather={currentWeather}
              speedUnit={speedUnit}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
