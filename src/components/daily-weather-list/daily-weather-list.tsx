import './daily-weather-list.scss'
import React from "react";
import DailyWeatherItem from "../daily-weather-item/daily-weather-item";
import {DailyWeatherType} from "../../types";

interface Props {
    dailyWeather: DailyWeatherType[];
}
const DailyWeatherList: React.FC<Props> = ({dailyWeather}) => {
    return (
        <div className={"daily-weather-list"}>
            {dailyWeather.map((dailyItem, index) => {
                const weekDay = new Date(dailyItem.dt * 1000).toLocaleDateString("en", {
                    weekday: "long",
                });
                return <DailyWeatherItem key={index} weekDay={weekDay} dailyItem={dailyItem}/>
            })}
        </div>
    )
}

export default DailyWeatherList;