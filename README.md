# Weather App

The Weather App retrieves data about the current and the following 10 days weather forecast based on the user's location 
or the input location. It uses the 'One Call API 3.0' for weather forecast and 'Google Maps API' for transforming 
location names into latitude and longitude.

## Preview

You can preview the application at [Weather App Preview](https://weather-app2-0-tan.vercel.app/).

**Note: The preview displays fake data and does not reflect actual weather conditions. 
To use real weather data, please follow the installation and usage instructions below.**

## Installation

1. Install the dependencies:\
npm install

2. Run the development server:\
npm run dev

## Usage

In the `App.tsx` file, change the `mockdata` variable from `true` to `false` to enable retrieving real weather data from the APIs.

To use the required APIs, you will need subscriptions to the following:

- [OpenWeatherMap API](https://openweathermap.org/api/one-call-3)
- [Google Maps API](https://developers.google.com/maps)

These APIs will generate unique API keys for you. Create a `.env` file in the root directory with the following content:

VITE_WEATHER_API_URL='https://api.openweathermap.org/data/3.0' \
VITE_WEATHER_API_KEY=YOUR_OPEN_WEATHER_API_KEY\
VITE_LOCATION_API_KEY=YOUR_GOOGLE_MAPS_API_KEY\

Remember to replace YOUR_OPEN_WEATHER_API_KEY and YOUR_GOOGLE_MAPS_API_KEY with the actual API keys you obtain from the respective services.
After setting up the environment variables, you should be able to input location names and get real weather forecasts.
