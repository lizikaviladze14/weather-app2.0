const isLocal =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1";

const iconsPath = isLocal ? "" : "weather-app2.0";

const weatherIcons: { [key: string]: { [key: string]: string } } = {
  "dark-mode": {
    "01d": `weather-app2.0/images/weather_icons/dark-mode/icon_01d.png`,
    "01n": `weather-app2.0/images/weather_icons/dark-mode/icon_01n.png`,
    "02d": `weather-app2.0/images/weather_icons/dark-mode/icon_02d.png`,
    "02n": `weather-app2.0/images/weather_icons/dark-mode/icon_02n.png`,
    "03d": `weather-app2.0/images/weather_icons/dark-mode/icon_03d.png`,
    "03n": `weather-app2.0/images/weather_icons/dark-mode/icon_03n.png`,
    "04d": `weather-app2.0/images/weather_icons/dark-mode/icon_04d.png`,
    "04n": `weather-app2.0/images/weather_icons/dark-mode/icon_04n.png`,
    "09d": `weather-app2.0/images/weather_icons/dark-mode/icon_09d.png`,
    "09n": `weather-app2.0/images/weather_icons/dark-mode/icon_09n.png`,
    "10d": `weather-app2.0/images/weather_icons/dark-mode/icon_10d.png`,
    "10n": `weather-app2.0/images/weather_icons/dark-mode/icon_10n.png`,
    "11d": `weather-app2.0/images/weather_icons/dark-mode/icon_11d.png`,
    "11n": `weather-app2.0/images/weather_icons/dark-mode/icon_11n.png`,
    "13d": `weather-app2.0/images/weather_icons/dark-mode/icon_13d.png`,
    "13n": `weather-app2.0/images/weather_icons/dark-mode/icon_13n.png`,
    "50d": `weather-app2.0/images/weather_icons/dark-mode/icon_50d.png`,
    "50n": `weather-app2.0/images/weather_icons/dark-mode/icon_50n.png`,
  },
  "light-mode": {
    "01d": `weather-app2.0/images/weather_icons/light-mode/icon_01d.png`,
    "01n": `weather-app2.0/images/weather_icons/light-mode/icon_01n.png`,
    "02d": `weather-app2.0/images/weather_icons/light-mode/icon_02d.png`,
    "02n": `weather-app2.0/images/weather_icons/light-mode/icon_02n.png`,
    "03d": `weather-app2.0/images/weather_icons/light-mode/icon_03d.png`,
    "03n": `weather-app2.0/images/weather_icons/light-mode/icon_03n.png`,
    "04d": `weather-app2.0/images/weather_icons/light-mode/icon_04d.png`,
    "04n": `weather-app2.0/images/weather_icons/light-mode/icon_04n.png`,
    "09d": `weather-app2.0/images/weather_icons/light-mode/icon_09d.png`,
    "09n": `weather-app2.0/images/weather_icons/light-mode/icon_09n.png`,
    "10d": `weather-app2.0/images/weather_icons/light-mode/icon_10d.png`,
    "10n": `weather-app2.0/images/weather_icons/light-mode/icon_10n.png`,
    "11d": `weather-app2.0/images/weather_icons/light-mode/icon_11d.png`,
    "11n": `weather-app2.0/images/weather_icons/light-mode/icon_11n.png`,
    "13d": `weather-app2.0/images/weather_icons/light-mode/icon_13d.png`,
    "13n": `weather-app2.0/images/weather_icons/light-mode/icon_13n.png`,
    "50d": `weather-app2.0/images/weather_icons/light-mode/icon_50d.png`,
    "50n": `weather-app2.0/images/weather_icons/light-mode/icon_50n.png`,
  },
};

export default weatherIcons;
