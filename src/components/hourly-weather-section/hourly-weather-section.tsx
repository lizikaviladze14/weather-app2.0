import "./hourly-weather-section.scss";
import React from "react";
import HourlyWeatherList from "../hourly-weather-list/hourly-weather-list";
import { HourlyWeatherType, WeatherUnitType } from "../../types";
import BaseLoader from "../base/loader/base-loader";

interface Props {
  hourlyWeather: HourlyWeatherType[];
  isLoading: boolean;
  weatherUnit: WeatherUnitType;
}
const HourlyWeatherSection: React.FC<Props> = ({
  hourlyWeather,
  isLoading,
  weatherUnit,
}) => {
  return (
    <div className={"hourly-weather-section"}>
      <h3>Hourly</h3>
      {isLoading ? (
        <BaseLoader />
      ) : (
        <HourlyWeatherList
          hourlyWeather={hourlyWeather}
          weatherUnit={weatherUnit}
        />
      )}
    </div>
  );
};

export default HourlyWeatherSection;
