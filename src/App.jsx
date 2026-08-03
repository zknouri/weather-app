import { useEffect, useState } from "react";

import CurrentWeather from "./components/CurrentWeather.jsx";
import ForecastSection from "./components/ForecastSection.jsx";
import WeatherStatsGrid from "./components/WeatherStatsGrid.jsx";
import Header from "./components/Header.jsx";
import { FORECAST_DATA } from "./lib/constants.js";

const TEMP_DATA = {
    "coord": {
        "lon": -7.6184,
        "lat": 33.5922
    },
    "weather": [
        {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 24.08,
        "feels_like": 24.35,
        "temp_min": 24.08,
        "temp_max": 24.08,
        "pressure": 1014,
        "humidity": 69,
        "sea_level": 1014,
        "grnd_level": 1006
    },
    "visibility": 10000,
    "wind": {
        "speed": 1.34,
        "deg": 110
    },
    "clouds": {
        "all": 44
    },
    "dt": 1785718295,
    "sys": {
        "type": 2,
        "id": 47681,
        "country": "MA",
        "sunrise": 1785735836,
        "sunset": 1785785359
    },
    "timezone": 3600,
    "id": 2553604,
    "name": "Casablanca",
    "cod": 200
};

function App() {
  const [realtimeWeather, setRealtimeWeather] = useState(TEMP_DATA);
  
  useEffect(() => {
    async function getAllWeatherData() {
      const geolocationRes = await fetch(
        "/api/geolocation?city=Casablanca&limit=5",
      );

      const geolocationData = await geolocationRes.json();

      console.log(geolocationData[0]);

      const latitude = geolocationData[0].lat;
      const longitude = geolocationData[0].lon;

      const weatherResponse = await fetch(
        `/api/weather?latitude=${latitude}&longitude=${longitude}&units=metric`,
      );

      const weatherData = await weatherResponse.json();

      console.log(weatherData);

      const forecastResponse = await fetch(
        `/api/forecast?latitude=${latitude}&longitude=${longitude}&cnt=1000&units=metric`,
      );

      const forecastData = await forecastResponse.json();

      console.log(forecastData);
    }

    // getAllWeatherData();
  }, []);

  return (
    <>
      <Header />
      <main>
        <CurrentWeather weatherData={realtimeWeather} />
        <WeatherStatsGrid weatherData={realtimeWeather} />
        <ForecastSection/>
      </main>
    </>
  );
}

export default App;
