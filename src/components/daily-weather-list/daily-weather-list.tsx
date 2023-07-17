import "./daily-weather-list.scss";
import React from "react";
import DailyWeatherItem from "../daily-weather-item/daily-weather-item";
import { DailyWeatherType, WeatherUnitType } from "../../types";
import { SpeedUnitType } from "../../types/SpeedUnitType";

interface Props {
  dailyWeather: DailyWeatherType[];
  weatherUnit: WeatherUnitType;
  speedUnit: SpeedUnitType;
}
const DailyWeatherList: React.FC<Props> = ({
  dailyWeather,
  weatherUnit,
  speedUnit,
}) => {
  return (
    <div className={"daily-weather-list"}>
      {dailyWeather.map((dailyItem, index) => {
        const weekDay = new Date(dailyItem.dt * 1000).toLocaleDateString("en", {
          weekday: "long",
        });
        return (
          <DailyWeatherItem
            key={index}
            weekDay={weekDay}
            dailyItem={dailyItem}
            weatherUnit={weatherUnit}
            speedUnit={speedUnit}
          />
        );
      })}
    </div>
  );
};

export default DailyWeatherList;
