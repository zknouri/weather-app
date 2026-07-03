import { useEffect, useState } from "react";

import CurrentWeather from "./components/CurrentWeather.jsx";
import ForecastSection from "./components/ForecastSection.jsx";
import WeatherStatsGrid from "./components/WeatherStatsGrid.jsx";
import Header from "./components/Header.jsx";

const TEMP_DATA = {
  coord: {
    lon: -7.62,
    lat: 33.5945,
  },
  weather: [
    {
      id: 802,
      main: "Clouds",
      description: "scattered clouds",
      icon: "03d",
    },
  ],
  base: "stations",
  main: {
    temp: 31.87,
    feels_like: 32.64,
    temp_min: 31.87,
    temp_max: 31.87,
    pressure: 1013,
    humidity: 43,
    sea_level: 1013,
    grnd_level: 1005,
  },
  visibility: 10000,
  wind: {
    speed: 1.79,
    deg: 20,
  },
  clouds: {
    all: 33,
  },
  dt: 1783103027,
  sys: {
    type: 2,
    id: 47681,
    country: "MA",
    sunrise: 1783056276,
    sunset: 1783107866,
  },
  timezone: 3600,
  id: 2553604,
  name: "Casablanca",
  cod: 200,
};

function App() {
  useEffect(() => {
    async function getRealtimeWeather() {
      const geoRes = await fetch(
        "/api/getCityGeolocation?city=Casablanca&limit=1",
      );

      const geoData = await geoRes.json();

      console.log(geoData);

      const latitude = geoData[0].lat;
      const longitude = geoData[0].lon;

      const response = await fetch(
        `/api/weather?latitude=${latitude}&longitude=${longitude}&units=metric`,
      );

      const data = await response.json();

      console.log(data);
    }

    // getRealtimeWeather();
  }, []);

  const [realtimeWeather, setRealtimeWeather] = useState(TEMP_DATA);

  return (
    <>
      <Header />
      <main>
        <CurrentWeather weatherData={realtimeWeather} />
        <WeatherStatsGrid weatherData={realtimeWeather} />
        <ForecastSection />
      </main>
    </>
  );
}

export default App;
