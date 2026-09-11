import { useState, useEffect } from "react";

import WeatherIcon from "./WeatherIcon.jsx";
import { WEATHER_CONDITIONS } from "../lib/constants.js";

export default function ForecastCard({
  selectedForecast,
  setSelectedForecast,
  forecastData,
  forecastDetailsRef,
  cardRef,
  isPending,
}) {
  const [isSelected, setIsSelected] = useState(false);

  const selectedForecastDateTime = selectedForecast?.dt;

  useEffect(() => {
    if (selectedForecast && selectedForecastDateTime === forecastData.dt) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [selectedForecastDateTime]);

  function selectedForecastHandler(forecast) {
    setSelectedForecast(forecast);
    forecastDetailsRef?.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  if (isPending) {
    return (
      <div className="flex flex-col gap-1 items-center p-1 m-1 min-h-32 min-w-22 w-22  rounded-md text-stone-50 border-2 font-semibold cursor-pointer animate-pulse">
        <p className="w-9 h-7 rounded-4xl bg-sky-200"></p>
        <p className="w-14 h-6 rounded-4xl bg-sky-200"></p>
        <p className="size-20 rounded-full bg-sky-200"></p>
        <p className="w-9 h-6 rounded-4xl bg-sky-200"></p>
      </div>
    );
  }

  const dateTimeString = Temporal.Instant.fromEpochMilliseconds(
    forecastData.dt * 1000,
  ).toString();
  const plainDateTime = Temporal.PlainDateTime.from(
    dateTimeString.slice(0, dateTimeString.length - 1),
  );

  return (
    <div
      ref={cardRef}
      onClick={() => selectedForecastHandler(forecastData)}
      className={`flex flex-col items-center p-1 m-1 min-h-32 min-w-22 w-22 rounded-md text-stone-50 border-2 font-semibold cursor-pointer hover:border-black ${isSelected ? "text-stone-500" : ""} animate-fade-in-scale`}
    >
      <p className="text-xl">
        {plainDateTime
          .toLocaleString("en-US", {
            weekday: "long",
          })
          .slice(0, 3)
          .toUpperCase()}
      </p>
      <p>
        {plainDateTime.toLocaleString("en-US", {
          timeStyle: "short",
        })}
      </p>
      <WeatherIcon
        slug={WEATHER_CONDITIONS[forecastData.weather[0].description]}
        className="size-20 animate-fade-in-scale"
      />
      <p>{`${Math.round(forecastData.main.temp)} °C`}</p>
    </div>
  );
}
