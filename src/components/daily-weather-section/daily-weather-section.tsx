import './daily-weather-section.scss'
import React from "react";
import DailyWeatherList from "../daily-weather-list/daily-weather-list";
import {DailyWeatherType} from "../../types";
import BaseLoader from "../base/loader/base-loader";

interface Props {
    dailyWeather: DailyWeatherType[];
    isLoading: boolean;
}
const DailyWeatherSection: React.FC<Props> = ({dailyWeather, isLoading}) => {
    return (
        <div className={"daily-weather-section"}>
            <h3>Daily</h3>
            {isLoading ? <BaseLoader /> : <DailyWeatherList dailyWeather={dailyWeather}/>}
        </div>
    )
}

export default DailyWeatherSection;