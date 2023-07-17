import "./detailed-daily-weather-info.scss";
import React from "react";
import { DailyWeatherType } from "../../types";
import { SpeedUnitType } from "../../types/SpeedUnitType";

interface Props {
  detailedWeather: DailyWeatherType;
  speedUnit: SpeedUnitType;
}
const DetailedDailyWeatherInfo: React.FC<Props> = ({
  detailedWeather,
  speedUnit,
}) => {
  return (
    <div className={"detailed-daily-weather-info"}>
      <div className={"info-wrapper"}>
        <div className={"half"}>
          <div className={"info-item"}>
            <p>Rain:</p>
            <span>0%</span>
          </div>
          <div className={"info-item"}>
            <p>Humidity:</p>
            <span>{detailedWeather.humidity}%</span>
          </div>
        </div>
        <div className={"half"}>
          <div className={"info-item"}>
            <p>Wind speed:</p>
            <span>
              {detailedWeather.wind_speed} {speedUnit}
            </span>
          </div>
          <div className={"info-item"}>
            <p>Pressure:</p>
            <span>{detailedWeather.pressure}hpa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedDailyWeatherInfo;
