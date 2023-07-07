import './daily-weather-item.scss'
import React, {useEffect, useState} from "react";
import {DailyWeatherType} from "../../types";
import {useWeatherIcons} from "../../hooks/useWeatherIcons";
import useTheme from "../../hooks/useTheme";
import DetailedDailyWeatherInfo from "../detailed-daily-weather-info/detailed-daily-weather-info";

interface Props {
    dailyItem: DailyWeatherType;
    weekDay: string;
}
const DailyWeatherItem: React.FC<Props> = ({dailyItem, weekDay}) => {
    const [icon, setIcon] = useState();
    const { theme } = useTheme();
    const [showDetailedInfo, setShowDetailedInfo] = useState(false);

    const {weatherIcons} = useWeatherIcons(theme);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const iconPath =  weatherIcons[dailyItem.weather[0].icon];
                const response = await import(iconPath);
                setIcon(response.default);
            } catch (err) {
                console.log(err);
            }
        }

        fetchImage();
    }, [dailyItem])

    return (
        <div className={"daily-weather-item"}>
            <div className={"daily-weather-wrapper"} onClick={() => setShowDetailedInfo(!showDetailedInfo)}>
                <div className={"left"}>
                    <img src={icon} alt={dailyItem.weather[0].description}/>
                    <p>{weekDay}</p>
                </div>
                <div className={"right"}>
                    <p className={"condition"}>{dailyItem.weather[0].description}</p>
                    <p className={"degree"}>
                        {Math.floor(dailyItem.temp.night)}&deg;C / {Math.floor(dailyItem.temp.day)}&deg;C
                    </p>
                </div>
            </div>
            { showDetailedInfo &&
                <div className={"daily-weather-detailed-info"} >
                    <DetailedDailyWeatherInfo detailedWeather={dailyItem}/>
                </div>
            }
        </div>
    )
}

export default DailyWeatherItem;