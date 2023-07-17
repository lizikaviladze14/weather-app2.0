import "./top-bar.scss";
import React, { useState } from "react";
import ChangeTheme from "../change-theme/change-theme";
import WeatherUnit from "../weather-unit/weather-unit";

interface Props {
  handleWeatherUnitValue: (value: "F" | "C") => void;
}

const TopBar: React.FC<Props> = ({ handleWeatherUnitValue }) => {
  const [isActiveF, setIsActiveF] = useState(false);
  const [isActiveC, setIsActiveC] = useState(true);
  const handleUnitValue = (unitValue: "F" | "C") => {
    if (unitValue === "F") {
      setIsActiveF(true);
      setIsActiveC(false);
    } else {
      setIsActiveF(false);
      setIsActiveC(true);
    }
    handleWeatherUnitValue(unitValue);
  };
  return (
    <div className={"top-bar"}>
      <WeatherUnit
        onClick={handleUnitValue}
        weatherUnit={"C"}
        isActive={isActiveC}
      />
      <WeatherUnit
        onClick={handleUnitValue}
        weatherUnit={"F"}
        isActive={isActiveF}
      />
      <ChangeTheme />
    </div>
  );
};

export default TopBar;
