import "./current-weather-info.scss"
import React from "react";
import {DetailedWeatherType} from "../../types";

interface Props {
    currentWeather: DetailedWeatherType;
}
const CurrentWeatherInfo: React.FC<Props> = ({currentWeather}) => {
    return (
        <div className={"current-weather-info"}>
            <div className={"info-wrapper"}>
                <div className={"half"}>
                    <div className={"info-item"}>
                        <p>Rain:</p>
                        <span>0%</span>
                    </div>
                    <div className={"info-item"}>
                        <p>Humidity:</p>
                        <span>{currentWeather.humidity}%</span>
                    </div>
                    <div className={"info-item"}>
                        <p>Wind speed:</p>
                        <span>{currentWeather.wind_speed} m/s</span>
                    </div>
                </div>
                <div className={"half"}>
                    <div className={"info-item"}>
                        <p>Pressure:</p>
                        <span>{currentWeather.pressure}hpa</span>
                    </div>
                    <div className={"info-item"}>
                        <p>Visibility:</p>
                        <span>{currentWeather.visibility/1000} km</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeatherInfo;