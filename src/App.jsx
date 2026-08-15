import { useEffect, useState } from "react";

import CurrentWeather from "./components/CurrentWeather.jsx";
import ForecastSection from "./components/ForecastSection.jsx";
import WeatherStatsGrid from "./components/WeatherStatsGrid.jsx";
import Header from "./components/Header.jsx";
import { FORECAST_DATA } from "./lib/constants.js";

const TEMP_DATA = {
  coord: {
    lon: -7.6184,
    lat: 33.5922,
  },
  weather: [
    {
      id: 801,
      main: "Clouds",
      description: "few clouds",
      icon: "02d",
    },
  ],
  base: "stations",
  main: {
    temp: 25.75,
    feels_like: 26.31,
    temp_min: 25.75,
    temp_max: 25.75,
    pressure: 1014,
    humidity: 74,
    sea_level: 1014,
    grnd_level: 1007,
  },
  visibility: 10000,
  wind: {
    speed: 2.68,
    deg: 40,
  },
  clouds: {
    all: 13,
  },
  dt: 1786126459,
  sys: {
    type: 2,
    id: 47681,
    country: "MA",
    sunrise: 1786081610,
    sunset: 1786130744,
  },
  timezone: 3600,
  id: 2553604,
  name: "Casablanca",
  cod: 200,
};

const GEOLO = [
  {
    name: "Casablanca",
    local_names: {
      hu: "Casablanca",
      hy: "Կասաբլանկա",
      eu: "Casablanca",
      mk: "Казабланка",
      en: "Casablanca",
      he: "קזבלנקה",
      ka: "კასაბლანკა",
      ko: "카사블랑카",
      ascii: "Casablanca",
      sl: "Casablanca",
      ml: "കാസബ്ലങ്ക",
      kn: "ಕಾಸಾಬ್ಲಾಂಕಾ",
      fr: "Casablanca",
      be: "Касабланка",
      ar: "الدار البيضاء",
      de: "Casablanca",
      nl: "Casablanca",
      eo: "Kazablanko",
      lv: "Kasablanka",
      gl: "Casabranca",
      bg: "Казабланка",
      feature_name: "Casablanca",
      sr: "Казабланка",
      ja: "カサブランカ",
      sk: "Casablanca",
      ur: "دار البیضاء",
      cs: "Casablanca",
      hi: "कैसाब्लांका",
      ro: "Casablanca",
      pl: "Casablanca",
      uk: "Касабланка",
      fa: "دارالبیضا",
      et: "Casablanca",
      az: "Kasablanka",
      ru: "Касабланка",
      tr: "Kazablanka",
      hr: "Casablanca",
      ku: "Kazablanka",
      es: "Casablanca",
      pt: "Casablanca",
      el: "Καζαμπλάνκα",
      zh: "卡萨布兰卡",
      oc: "Casablanca",
    },
    lat: 33.5945144,
    lon: -7.6200284,
    country: "MA",
  },
  {
    name: "Casablanca",
    lat: -33.3205864,
    lon: -71.4100762,
    country: "CL",
    state: "Valparaiso Region",
  },
  {
    name: "Casablanca",
    lat: -32.3971639,
    lon: -58.1565864,
    country: "UY",
    state: "Paysandú",
  },
  {
    name: "Casablanca",
    local_names: {
      ca: "Casablanca",
    },
    lat: 41.334155,
    lon: 2.0367593,
    country: "ES",
    state: "Catalonia",
  },
  {
    name: "Casablanca",
    lat: 23.146365099999997,
    lon: -82.32740962642539,
    country: "CU",
    state: "Havana",
  },
];

function App() {
  const [realtimeWeather, setRealtimeWeather] = useState(TEMP_DATA);
  const [forecastWeather, setForecastWeather] = useState(FORECAST_DATA);
  const [searchLocation, setSearchLocation] = useState("Casablanca");
  const [searchResults, setSearchResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedGeolocation, setSelectedGeolocation] = useState({
    name: "Casablanca",
    local_names: {
      hu: "Casablanca",
      hy: "Կասաբլանկա",
      eu: "Casablanca",
      mk: "Казабланка",
      en: "Casablanca",
      he: "קזבלנקה",
      ka: "კასაბლანკა",
      ko: "카사블랑카",
      ascii: "Casablanca",
      sl: "Casablanca",
      ml: "കാസബ്ലങ്ക",
      kn: "ಕಾಸಾಬ್ಲಾಂಕಾ",
      fr: "Casablanca",
      be: "Касабланка",
      ar: "الدار البيضاء",
      de: "Casablanca",
      nl: "Casablanca",
      eo: "Kazablanko",
      lv: "Kasablanka",
      gl: "Casabranca",
      bg: "Казабланка",
      feature_name: "Casablanca",
      sr: "Казабланка",
      ja: "カサブランカ",
      sk: "Casablanca",
      ur: "دار البیضاء",
      cs: "Casablanca",
      hi: "कैसाब्लांका",
      ro: "Casablanca",
      pl: "Casablanca",
      uk: "Касабланка",
      fa: "دارالبیضا",
      et: "Casablanca",
      az: "Kasablanka",
      ru: "Касабланка",
      tr: "Kazablanka",
      hr: "Casablanca",
      ku: "Kazablanka",
      es: "Casablanca",
      pt: "Casablanca",
      el: "Καζαμπλάνκα",
      zh: "卡萨布兰卡",
      oc: "Casablanca",
    },
    lat: 33.5945144,
    lon: -7.6200284,
    country: "MA",
  });

  async function getGeolocation(locationName) {
    const geolocationRes = await fetch(
      `/api/geolocation?city=${locationName}&limit=5`,
    );

    const geolocationData = await geolocationRes.json();

    setSearchResults(geolocationData);

    console.log(geolocationData);
  }

  useEffect(() => {
    async function getWeatherData() {
        setIsLoading(true);
        const latitude = selectedGeolocation.lat;
        const longitude = selectedGeolocation.lon;
        const weatherResponse = await fetch(
          `/api/weather?latitude=${latitude}&longitude=${longitude}&units=metric`,
        );
        const weatherData = await weatherResponse.json();
        setRealtimeWeather(weatherData);
        console.log(weatherData);

      const forecastResponse = await fetch(
        `/api/forecast?latitude=${latitude}&longitude=${longitude}&cnt=1000&units=metric`,
      );
      const forecastData = await forecastResponse.json();
      setForecastWeather(forecastData);
      console.log(forecastData);

      setIsLoading(false)
    }

    getWeatherData();
  }, [selectedGeolocation]);

  return (
    <>
      <Header
        onLocationSearch={getGeolocation}
        geolocationResults={searchResults}
        onLocationSelect={setSelectedGeolocation}
      />
      <main>
        <CurrentWeather weatherData={realtimeWeather} isPending={isLoading}/>
        <WeatherStatsGrid weatherData={realtimeWeather}  isPending={isLoading}/>
        <ForecastSection forecastData={forecastWeather}  isPending={isLoading}/>
      </main>
    </>
  );
}

export default App;
