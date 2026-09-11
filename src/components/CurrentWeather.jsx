import { WEATHER_CONDITIONS } from "../lib/constants.js";
import WeatherIcon from "./WeatherIcon.jsx";

export default function CurrentWeather({ weatherData, isPending }) {
  if (isPending) {
    return (
      <div className=" m-1 p-1  bg-sky-400/70 rounded-sm text-stone-50">
        <div className="flex flex-col gap-1 items-center w-auto h-auto text-3xl rounded bg-sky-300 animate-pulse">
          <p className="w-60 h-10 rounded-4xl bg-sky-200"></p>
          <p className="text-5xl w-28 h-12 rounded-3xl bg-sky-200"></p>
          <p className="size-28 rounded-full bg-sky-200"></p>
          <p className="text-xl w-28 h-7 rounded-4xl bg-sky-200"></p>
          <p className="text-xl w-80 h-7 rounded-4xl bg-sky-200"></p>
        </div>
      </div>
    );
  }

  const weatherDescription = weatherData.weather[0].description;
  const currentWeatherIconName = WEATHER_CONDITIONS[weatherDescription];
  const dateTimeString = Temporal.Instant.fromEpochMilliseconds(
    weatherData.dt * 1000,
  ).toString();
  const plainDateTime = Temporal.PlainDateTime.from(
    dateTimeString.slice(0, dateTimeString.length - 1),
  );

  return (
    <div className="flex flex-col items-center m-1 p-1 w-auto h-auto bg-sky-400/70 rounded-sm text-stone-50 animate-fade-in-scale">
      <p className="text-3xl">
        {weatherData.name}, {weatherData.sys.country}
      </p>
      <p className="text-5xl">{Math.round(weatherData.main.temp)} °C</p>
      <p>
        <WeatherIcon
          slug={currentWeatherIconName}
          className="size-28 animate-fade-in-scale"
        />
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
