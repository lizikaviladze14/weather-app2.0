import "./hourly-weather-item.scss";
import React from "react";
import { HourlyWeatherType, WeatherUnitType } from "../../types";
import useTheme from "../../hooks/useTheme";

interface Props {
  hourlyItem: HourlyWeatherType;
  hour: string;
  weatherUnit: WeatherUnitType;
}
const HourlyWeatherItem: React.FC<Props> = ({
  hourlyItem,
  hour,
  weatherUnit,
}) => {
  const { theme } = useTheme();

  return (
    <div className={"hourly-weather-item"}>
      <p className={"time"}>{hour}</p>
      <div className={"weather-icon"}>
        <img
          src={`/images/weather_icons/${theme}/icon_${hourlyItem.weather[0].icon}.png`}
          alt={hourlyItem.weather[0].description}
        />
      </div>
      <p className={"temperature"}>
        {Math.floor(hourlyItem.temp)}&deg;{weatherUnit}
      </p>
    </div>
  );
};

export default HourlyWeatherItem;
