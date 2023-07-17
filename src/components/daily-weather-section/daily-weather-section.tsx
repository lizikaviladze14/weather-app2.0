import "./daily-weather-section.scss";
import React from "react";
import DailyWeatherList from "../daily-weather-list/daily-weather-list";
import { DailyWeatherType, WeatherUnitType } from "../../types";
import BaseLoader from "../base/loader/base-loader";
import { SpeedUnitType } from "../../types/SpeedUnitType";

interface Props {
  dailyWeather: DailyWeatherType[];
  isLoading: boolean;
  weatherUnit: WeatherUnitType;
  speedUnit: SpeedUnitType;
}
const DailyWeatherSection: React.FC<Props> = ({
  dailyWeather,
  isLoading,
  weatherUnit,
  speedUnit,
}) => {
  return (
    <div className={"daily-weather-section"}>
      <h3>Daily</h3>
      {isLoading ? (
        <BaseLoader />
      ) : (
        <DailyWeatherList
          dailyWeather={dailyWeather}
          weatherUnit={weatherUnit}
          speedUnit={speedUnit}
        />
      )}
    </div>
  );
};

export default DailyWeatherSection;
