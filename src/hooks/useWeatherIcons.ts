export const useWeatherIcons = (theme: 'dark-mode' | 'light-mode') => {
    const weatherIcons: {[key: string]: string} = {
        '01d': `../../assets/images/weather_icons/${theme}/icon_01d.png`,
        '01n': `../../assets/images/weather_icons/${theme}/icon_01n.png`,
        '02d': `../../assets/images/weather_icons/${theme}/icon_02d.png`,
        '02n': `../../assets/images/weather_icons/${theme}/icon_02n.png`,
        '03d': `../../assets/images/weather_icons/${theme}/icon_03d.png`,
        '03n': `../../assets/images/weather_icons/${theme}/icon_03n.png`,
        '04d': `../../assets/images/weather_icons/${theme}/icon_04d.png`,
        '04n': `../../assets/images/weather_icons/${theme}/icon_04n.png`,
        '09d': `../../assets/images/weather_icons/${theme}/icon_09d.png`,
        '09n': `../../assets/images/weather_icons/${theme}/icon_09n.png`,
        '10d': `../../assets/images/weather_icons/${theme}/icon_10d.png`,
        '10n': `../../assets/images/weather_icons/${theme}/icon_10n.png`,
        '11d': `../../assets/images/weather_icons/${theme}/icon_11d.png`,
        '11n': `../../assets/images/weather_icons/${theme}/icon_11n.png`,
        '13d': `../../assets/images/weather_icons/${theme}/icon_13d.png`,
        '13n': `../../assets/images/weather_icons/${theme}/icon_13n.png`,
        '50d': `../../assets/images/weather_icons/${theme}/icon_50d.png`,
        '50n': `../../assets/images/weather_icons/${theme}/icon_50n.png`,
    }

    return {weatherIcons}
}
