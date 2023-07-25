import "./daily-weather-item.scss";
import React, { useState } from "react";
import { DailyWeatherType, WeatherUnitType } from "../../types";
import useTheme from "../../hooks/useTheme";
import DetailedDailyWeatherInfo from "../detailed-daily-weather-info/detailed-daily-weather-info";
import { SpeedUnitType } from "../../types/SpeedUnitType";

interface Props {
  dailyItem: DailyWeatherType;
  weekDay: string;
  weatherUnit: WeatherUnitType;
  speedUnit: SpeedUnitType;
}
const DailyWeatherItem: React.FC<Props> = ({
  dailyItem,
  weekDay,
  weatherUnit,
  speedUnit,
}) => {
  const { theme } = useTheme();
  const [showDetailedInfo, setShowDetailedInfo] = useState(false);

  return (
    <div className={"daily-weather-item"}>
      <div
        className={"daily-weather-wrapper"}
        onClick={() => setShowDetailedInfo(!showDetailedInfo)}
      >
        <div className={"left"}>
          <img
            src={`/images/weather_icons/${theme}/icon_${dailyItem.weather[0].icon}.png`}
            alt={dailyItem.weather[0].description}
          />
          <p>{weekDay}</p>
        </div>
        <div className={"right"}>
          <p className={"condition"}>{dailyItem.weather[0].description}</p>
          <p className={"degree"}>
            {Math.floor(dailyItem.temp.night)}&deg;{weatherUnit} /{" "}
            {Math.floor(dailyItem.temp.day)}&deg;{weatherUnit}
          </p>
        </div>
      </div>
      {showDetailedInfo && (
        <div className={"daily-weather-detailed-info"}>
          <DetailedDailyWeatherInfo
            detailedWeather={dailyItem}
            speedUnit={speedUnit}
          />
        </div>
      )}
    </div>
  );
};

export default DailyWeatherItem;
