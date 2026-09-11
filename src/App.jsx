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
        <p className="flex justify-center items-center gap-1 my-1 text-primary dark:text-dark-primary">
          Made by{" "}
          <a
            href="https://github.com/zknouri/"
            className="flex justify-center gap-1 my-1 text-amber-500 hover:text-amber-600"
          >
            <svg
              xmlns="http://w3.org"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            zknouri
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
