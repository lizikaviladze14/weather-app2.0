import './hourly-weather-item.scss'
import React, {useEffect, useState} from "react";
import {HourlyWeatherType} from "../../types";
import {useWeatherIcons} from "../../hooks/useWeatherIcons";
import useTheme from "../../hooks/useTheme";

interface Props {
    hourlyItem: HourlyWeatherType;
    hour: string;
}
const HourlyWeatherItem: React.FC<Props> = ({hourlyItem, hour}) => {
    const [icon, setIcon] = useState();
    const { theme } = useTheme();

    const {weatherIcons} = useWeatherIcons(theme);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const iconPath = weatherIcons[hourlyItem.weather[0].icon];
                const response = await import(iconPath);
                setIcon(response.default);
            } catch (err) {
                console.log(err);
            }
        }

        fetchImage();
    }, [weatherIcons, hourlyItem, theme])


    return (
        <div className={"hourly-weather-item"}>
            <p className={"time"}>{hour}</p>
            <div className={"weather-icon"}>
                <img src={icon} alt={hourlyItem.weather[0].description}/>
            </div>
            <p className={"temperature"}>{Math.floor(hourlyItem.temp)}&deg;C</p>
        </div>
    )
}

export default HourlyWeatherItem;