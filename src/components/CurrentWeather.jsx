import { WEATHER_CONDITIONS } from "../lib/constants";
import WeatherIcon from "./WeatherIcon";


export default function CurrentWeather({ weatherData }) {
  const weatherDescription = weatherData.weather[0].description;
  const currentWeatherIconName = WEATHER_CONDITIONS[weatherDescription];
  const dateTimeString = Temporal.Instant.fromEpochMilliseconds(
    weatherData.dt * 1000,
  ).toString();
  const plainDateTime = Temporal.PlainDateTime.from(
    dateTimeString.slice(0, dateTimeString.length - 1),
  );
  

  return (
    <div className="flex flex-col items-center m-1 p-1 w-auto h-auto bg-sky-400/70 rounded-sm text-stone-50">
      <p className="text-3xl">{weatherData.name}, {weatherData.sys.country}</p>
      <p className="text-5xl">{Math.round(weatherData.main.temp)} °C</p>
      <p>
        <WeatherIcon slug={currentWeatherIconName} />
      </p>
      <p className="text-xl">
        {weatherDescription.replace(/\b\w/g, (char) => char.toUpperCase())}
      </p>
      <p className="text-xl">
        {plainDateTime.toLocaleString("en-US", {
          dateStyle: "full",
          timeStyle: "full",
        })}
      </p>
    </div>
  );
}
