export const useWeatherIcons = (theme: "dark-mode" | "light-mode") => {
  const isLocal =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1";

  const iconsPath = isLocal ? "" : "weather-app2.0";
  const weatherIcons: { [key: string]: string } = {
    "01d": `../../../${iconsPath}/images/weather_icons/${theme}/icon_01d.png`,
    "01n": `../../../${iconsPath}/images/weather_icons/${theme}/icon_01n.png`,
    "02d": `../../../${iconsPath}/images/weather_icons/${theme}/icon_02d.png`,
    "02n": `../../../${iconsPath}/images/weather_icons/${theme}/icon_02n.png`,
    "03d": `../../../${iconsPath}/images/weather_icons/${theme}/icon_03d.png`,
    "03n": `../../../${iconsPath}/images/weather_icons/${theme}/icon_03n.png`,
    "04d": `../../../${iconsPath}/images/weather_icons/${theme}/icon_04d.png`,
    "04n": `../../../${iconsPath}/images/weather_icons/${theme}/icon_04n.png`,
    "09d": `../../../${iconsPath}/images/weather_icons/${theme}/icon_09d.png`,
    "09n": `../../../${iconsPath}/images/weather_icons/${theme}/icon_09n.png`,
    "10d": `../../../${iconsPath}/images/weather_icons/${theme}/icon_10d.png`,
    "10n": `../../../${iconsPath}/images/weather_icons/${theme}/icon_10n.png`,
    "11d": `../../../${iconsPath}/images/weather_icons/${theme}/icon_11d.png`,
    "11n": `../../../${iconsPath}/images/weather_icons/${theme}/icon_11n.png`,
    "13d": `../../../${iconsPath}/images/weather_icons/${theme}/icon_13d.png`,
    "13n": `../../../${iconsPath}/images/weather_icons/${theme}/icon_13n.png`,
    "50d": `../../../${iconsPath}/images/weather_icons/${theme}/icon_50d.png`,
    "50n": `../../../${iconsPath}/images/weather_icons/${theme}/icon_50n.png`,
  };

  return { weatherIcons };
};
