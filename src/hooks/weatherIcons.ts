const isLocal =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1";

const iconsPath = isLocal ? "" : "weather-app2.0";

const weatherIcons: { [key: string]: { [key: string]: string } } = {
  "dark-mode": {
    "01d": `${iconsPath}/images/weather_icons/dark-mode/icon_01d.png`,
    "01n": `${iconsPath}/images/weather_icons/dark-mode/icon_01n.png`,
    "02d": `${iconsPath}/images/weather_icons/dark-mode/icon_02d.png`,
    "02n": `${iconsPath}/images/weather_icons/dark-mode/icon_02n.png`,
    "03d": `${iconsPath}/images/weather_icons/dark-mode/icon_03d.png`,
    "03n": `${iconsPath}/images/weather_icons/dark-mode/icon_03n.png`,
    "04d": `${iconsPath}/images/weather_icons/dark-mode/icon_04d.png`,
    "04n": `${iconsPath}/images/weather_icons/dark-mode/icon_04n.png`,
    "09d": `${iconsPath}/images/weather_icons/dark-mode/icon_09d.png`,
    "09n": `${iconsPath}/images/weather_icons/dark-mode/icon_09n.png`,
    "10d": `${iconsPath}/images/weather_icons/dark-mode/icon_10d.png`,
    "10n": `${iconsPath}/images/weather_icons/dark-mode/icon_10n.png`,
    "11d": `${iconsPath}/images/weather_icons/dark-mode/icon_11d.png`,
    "11n": `${iconsPath}/images/weather_icons/dark-mode/icon_11n.png`,
    "13d": `${iconsPath}/images/weather_icons/dark-mode/icon_13d.png`,
    "13n": `${iconsPath}/images/weather_icons/dark-mode/icon_13n.png`,
    "50d": `${iconsPath}/images/weather_icons/dark-mode/icon_50d.png`,
    "50n": `${iconsPath}/images/weather_icons/dark-mode/icon_50n.png`,
  },
  "light-mode": {
    "01d": `${iconsPath}/images/weather_icons/light-mode/icon_01d.png`,
    "01n": `${iconsPath}/images/weather_icons/light-mode/icon_01n.png`,
    "02d": `${iconsPath}/images/weather_icons/light-mode/icon_02d.png`,
    "02n": `${iconsPath}/images/weather_icons/light-mode/icon_02n.png`,
    "03d": `${iconsPath}/images/weather_icons/light-mode/icon_03d.png`,
    "03n": `${iconsPath}/images/weather_icons/light-mode/icon_03n.png`,
    "04d": `${iconsPath}/images/weather_icons/light-mode/icon_04d.png`,
    "04n": `${iconsPath}/images/weather_icons/light-mode/icon_04n.png`,
    "09d": `${iconsPath}/images/weather_icons/light-mode/icon_09d.png`,
    "09n": `${iconsPath}/images/weather_icons/light-mode/icon_09n.png`,
    "10d": `${iconsPath}/images/weather_icons/light-mode/icon_10d.png`,
    "10n": `${iconsPath}/images/weather_icons/light-mode/icon_10n.png`,
    "11d": `${iconsPath}/images/weather_icons/light-mode/icon_11d.png`,
    "11n": `${iconsPath}/images/weather_icons/light-mode/icon_11n.png`,
    "13d": `${iconsPath}/images/weather_icons/light-mode/icon_13d.png`,
    "13n": `${iconsPath}/images/weather_icons/light-mode/icon_13n.png`,
    "50d": `${iconsPath}/images/weather_icons/light-mode/icon_50d.png`,
    "50n": `${iconsPath}/images/weather_icons/light-mode/icon_50n.png`,
  },
};

export default weatherIcons;
