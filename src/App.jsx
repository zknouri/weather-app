import CurrentWeather from "./components/CurrentWeather.jsx";
import ForecastSection from "./components/ForecastSection.jsx";
import SearchBar from "./components/SearchBar.jsx";
import WeatherStatsGrid from "./components/WeatherStatsGrid.jsx";


function App() {
  return (
    <>
      <h1>Weather App</h1>
      <SearchBar />
      <CurrentWeather />
      <WeatherStatsGrid />
      <ForecastSection />
    </>
  );
}

export default App;
