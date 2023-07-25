import "./daily-weather-item.scss";
import React, { useState } from "react";
import { DailyWeatherType, WeatherUnitType } from "../../types";
// import { useWeatherIcons } from "../../hooks/useWeatherIcons";
import useTheme from "../../hooks/useTheme";
import DetailedDailyWeatherInfo from "../detailed-daily-weather-info/detailed-daily-weather-info";
import { SpeedUnitType } from "../../types/SpeedUnitType";
import weatherIcons from "../../hooks/weatherIcons"; // Import the weatherIcons mapping object

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
  // const [icon, setIcon] = useState();
  // const { theme } = useTheme();
  const [showDetailedInfo, setShowDetailedInfo] = useState(false);

  // const { weatherIcons } = await useWeatherIcons(theme);
  //
  // useEffect(() => {
  //   const fetchImage = async () => {
  //     try {
  //       const iconPath = weatherIcons[dailyItem.weather[0].icon];
  //       const response = await import(iconPath);
  //       setIcon(response.default);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //
  //   fetchImage();
  // }, [weatherIcons, dailyItem, theme]);

  const { theme } = useTheme();

  const getIconByWeatherCode = (weatherCode: string): string => {
    const themeIcons = weatherIcons[theme];
    if (themeIcons && themeIcons[weatherCode]) {
      return themeIcons[weatherCode];
    }
    // Provide a fallback in case the weather code or theme is not recognized.
    return "";
  };

  const icon = getIconByWeatherCode(dailyItem.weather[0].icon);

  return (
    <div className={"daily-weather-item"}>
      <div
        className={"daily-weather-wrapper"}
        onClick={() => setShowDetailedInfo(!showDetailedInfo)}
      >
        <div className={"left"}>
          <img src={icon} alt={dailyItem.weather[0].description} />
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
