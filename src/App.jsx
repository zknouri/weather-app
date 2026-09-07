import { useEffect, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";

import CurrentWeather from "./components/CurrentWeather.jsx";
import ForecastSection from "./components/ForecastSection.jsx";
import WeatherStatsGrid from "./components/WeatherStatsGrid.jsx";
import Header from "./components/Header.jsx";
import Error from "./components/ErrorFallback.jsx";

function App() {
  const [realtimeWeather, setRealtimeWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const { showBoundary } = useErrorBoundary();
  const [selectedGeolocation, setSelectedGeolocation] = useState({
    name: "Casablanca",
    lat: 33.5945144,
    lon: -7.6200284,
    country: "MA",
  });

  async function getGeolocation(locationName) {
    try {
      const geolocationRes = await fetch(
        `/api/geolocation?city=${locationName}&limit=5`,
      );

      if (!geolocationRes.ok) {
        throw new Error("Failed to fetch geolocation from location name");
      }

      const geolocationData = await geolocationRes.json();

      setSearchResults(geolocationData);
    } catch (error) {
      showBoundary(error || "Something went wrong when fetching geolocation");
    }
  }

  useEffect(() => {
    async function getWeatherData() {
      try {
        const latitude = selectedGeolocation.lat;
        const longitude = selectedGeolocation.lon;
        const weatherResponse = await fetch(
          `/api/weather?latitude=${latitude}&longitude=${longitude}&units=metric`,
        );

        if (!weatherResponse.ok) {
          throw new Error("Failed to fetch realtime weather");
        }

        const weatherData = await weatherResponse.json();
        setRealtimeWeather(weatherData);

        const forecastResponse = await fetch(
          `/api/forecast?latitude=${latitude}&longitude=${longitude}&cnt=1000&units=metric`,
        );

        if (!forecastResponse.ok) {
          throw new Error("Failed to fetch forecasts");
        }

        const forecastData = await forecastResponse.json();
        setForecastWeather(forecastData);

        setLoading(false);
      } catch (error) {
        showBoundary(
          error || "Something went wrong while fetching weather data",
        );
      }
    }

    getWeatherData();
  }, [selectedGeolocation]);

  return (
    <>
      <Header
        onLocationSearch={getGeolocation}
        geolocationResults={searchResults}
        onLocationSelect={setSelectedGeolocation}
        onPending={setLoading}
        searchResultsReset={setSearchResults}
      />
      <main>
        <CurrentWeather weatherData={realtimeWeather} isPending={loading} />
        <WeatherStatsGrid weatherData={realtimeWeather} isPending={loading} />
        <ForecastSection forecastData={forecastWeather} isPending={loading} />
      </main>
      <footer>
        <p className="text-center text-stone-500">
          Weather Data by{" "}
          <a
            href="https://openweathermap.org/"
            name="OpenWeather"
            className="text-[#f65c20]"
          >
            OpenWeather
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
