import { useEffect, useState } from "react";

import CurrentWeather from "./components/CurrentWeather.jsx";
import ForecastSection from "./components/ForecastSection.jsx";
import WeatherStatsGrid from "./components/WeatherStatsGrid.jsx";
import Header from "./components/Header.jsx";

const TEMP_DATA = {
    "coord": {
        "lon": -17.448,
        "lat": 14.6935
    },
    "weather": [
        {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 28.48,
        "feels_like": 33.15,
        "temp_min": 28.48,
        "temp_max": 28.48,
        "pressure": 1014,
        "humidity": 79,
        "sea_level": 1014,
        "grnd_level": 1014
    },
    "visibility": 10000,
    "wind": {
        "speed": 5.97,
        "deg": 282,
        "gust": 6.5
    },
    "clouds": {
        "all": 68
    },
    "dt": 1783614541,
    "sys": {
        "type": 2,
        "id": 2103129,
        "country": "SN",
        "sunrise": 1783579577,
        "sunset": 1783626198
    },
    "timezone": 0,
    "id": 2253354,
    "name": "Dakar",
    "cod": 200
};

function App() {
  useEffect(() => {
    async function getRealtimeWeather() {
      const geoRes = await fetch(
        "/api/getCityGeolocation?city=Dakar&limit=1",
      );

      const geoData = await geoRes.json();

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
