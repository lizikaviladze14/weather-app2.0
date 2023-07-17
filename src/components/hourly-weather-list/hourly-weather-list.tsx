import "./hourly-weather-list.scss";
import React from "react";
import HourlyWeatherItem from "../hourly-weather-item/hourly-weather-item";
import { HourlyWeatherType, WeatherUnitType } from "../../types";

interface Props {
  hourlyWeather: HourlyWeatherType[];
  weatherUnit: WeatherUnitType;
}
const HourlyWeatherList: React.FC<Props> = ({ hourlyWeather, weatherUnit }) => {
  return (
    <div className={"hourly-weather-list"}>
      {hourlyWeather.map((hourlyItem, index) => {
        const hour = new Date(hourlyItem.dt * 1000).toLocaleTimeString("en", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        });
        return (
          <HourlyWeatherItem
            key={index}
            hour={hour}
            hourlyItem={hourlyItem}
            weatherUnit={weatherUnit}
          />
        );
      })}
    </div>
  );
};

export default HourlyWeatherList;
