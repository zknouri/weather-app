import { useEffect, useState } from "react";

import CurrentWeather from "./components/CurrentWeather.jsx";
import ForecastSection from "./components/ForecastSection.jsx";
import WeatherStatsGrid from "./components/WeatherStatsGrid.jsx";
import Header from "./components/Header.jsx";

const WEATHER_REALTIME_DATA = {
  data: {
    time: "2026-06-29T18:03:00Z",
    values: {
      altimeterSetting: 1016.83,
      cloudBase: null,
      cloudCeiling: null,
      cloudCover: 0,
      dewPoint: 20.9,
      freezingRainIntensity: 0,
      humidity: 81,
      precipitationProbability: 0,
      pressureSeaLevel: 1017.3,
      pressureSurfaceLevel: 1012.23,
      rainIntensity: 0,
      sleetIntensity: 0,
      snowIntensity: 0,
      temperature: 24.34,
      temperatureApparent: 24.3,
      uvHealthConcern: 0,
      uvIndex: 1,
      visibility: 13.3,
      weatherCode: 1000,
      windDirection: 17,
      windGust: 6.8,
      windSpeed: 3.4,
    },
  },
  location: {
    lat: 33.594512939453125,
    lon: -7.620028495788574,
    name: "Casablanca ⵜⴰⴷⴷⴰⵔⵜ ⵜⵓⵎⵍⵉⵍⵜ الدار البيضاء, arrondissement de Sidi Belyout مقاطعة سيدي بليوط, Pachalik de Casablanca, Préfecture de Casablanca عمالة الدار البيضاء, Casablanca-Settat ⵜⵉⴳⵎⵉ ⵜⵓⵎⵍⵉⵍⵜ-ⵙⵟⵟⴰⵜ الدار البيضاء-سطات, Maroc ⵍⵎⵖⵔⵉⴱ المغرب",
    type: "administrative",
  },
};

function App() {
  useEffect(() => {
    async function getRealtimeWeather() {
      const response = await fetch(
        "/api/weather?location=Casablanca&units=metric",
      );

      const data = await response.json();
    }

    // getRealtimeWeather();
  }, []);

  const [realtimeWeather, setRealtimeWeather] = useState(WEATHER_REALTIME_DATA);

  return (
    <>
      <Header />
      <main>
        <CurrentWeather weatherData={realtimeWeather}/>
        <WeatherStatsGrid />
        <ForecastSection />
      </main>
    </>
  );
}

export default App;
