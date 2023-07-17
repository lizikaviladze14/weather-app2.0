import "./weather-unit.scss";
import React from "react";
import { WeatherUnitType } from "../../types";

interface Props {
  weatherUnit: WeatherUnitType;
  onClick: (value: WeatherUnitType) => void;
  isActive: boolean;
}

const WeatherUnit: React.FC<Props> = ({ weatherUnit, onClick, isActive }) => {
  const handleUnitCLick = () => {
    onClick(weatherUnit);
  };

  return (
    <div
      className={`weather-unit ${isActive ? "active" : ""}`}
      onClick={handleUnitCLick}
    >
      &deg;{weatherUnit}
    </div>
  );
};

export default WeatherUnit;
