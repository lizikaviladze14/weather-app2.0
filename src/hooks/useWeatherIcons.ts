export const useWeatherIcons = (theme: "dark-mode" | "light-mode") => {
  const weatherIcons: { [key: string]: string } = {
    "01d": `../../../images/weather_icons/${theme}/icon_01d.png`,
    "01n": `../../../images/weather_icons/${theme}/icon_01n.png`,
    "02d": `../../../images/weather_icons/${theme}/icon_02d.png`,
    "02n": `../../../images/weather_icons/${theme}/icon_02n.png`,
    "03d": `../../../images/weather_icons/${theme}/icon_03d.png`,
    "03n": `../../../images/weather_icons/${theme}/icon_03n.png`,
    "04d": `../../../images/weather_icons/${theme}/icon_04d.png`,
    "04n": `../../../images/weather_icons/${theme}/icon_04n.png`,
    "09d": `../../../images/weather_icons/${theme}/icon_09d.png`,
    "09n": `../../../images/weather_icons/${theme}/icon_09n.png`,
    "10d": `../../../images/weather_icons/${theme}/icon_10d.png`,
    "10n": `../../../images/weather_icons/${theme}/icon_10n.png`,
    "11d": `../../../images/weather_icons/${theme}/icon_11d.png`,
    "11n": `../../../images/weather_icons/${theme}/icon_11n.png`,
    "13d": `../../../images/weather_icons/${theme}/icon_13d.png`,
    "13n": `../../../images/weather_icons/${theme}/icon_13n.png`,
    "50d": `../../../images/weather_icons/${theme}/icon_50d.png`,
    "50n": `../../../images/weather_icons/${theme}/icon_50n.png`,
  };

  return { weatherIcons };
};
