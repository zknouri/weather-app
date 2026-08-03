import { useState } from "react";

import ForecastCard from "./ForecastCard.jsx";
import ForecastCardDetails from "./ForecastCardDetails.jsx";
import { FORECAST_DATA, WEATHER_CONDITIONS } from "../lib/constants.js";
import previousButton from "../assets/svg/previous-button-green-icon.svg";
import nextButton from "../assets/svg/next-button-green-icon.svg";

export default function ForecastSection() {
  const [forecastWeather, setForecastWeather] = useState(FORECAST_DATA.list);
  const [currentSlidePosition, setCurrentSlidePosition] = useState(0);

  function slideNext() {
    if (currentSlidePosition >= 720) {
      setCurrentSlidePosition(0);
    } else {
      setCurrentSlidePosition((prevPosition) => prevPosition + 40);
    }
  }

  function slidePrevious() {
    if (currentSlidePosition <= 0) {
      setCurrentSlidePosition(720);
    } else {
      setCurrentSlidePosition((prevPosition) => prevPosition - 40);
    }
  }

  return (
    <>
      <div className="relative m-1 p-1 w-auto h-auto bg-sky-400/70 rounded-sm text-stone-50 overflow-clip">
        <button
          onClick={slidePrevious}
          className="absolute top-20 min-w-7 cursor-pointer z-10"
        >
          <img src={previousButton} alt="previous button" className="size-7" />
        </button>
        <div
          className={`flex transition ease-in-out duration-300`}
          style={{ transform: "translateX(-" + currentSlidePosition + "%)" }}
        >
          {forecastWeather.map((forecast) => {
            const dateTimeString = Temporal.Instant.fromEpochMilliseconds(
              forecast.dt * 1000,
            ).toString();
            const plainDateTime = Temporal.PlainDateTime.from(
              dateTimeString.slice(0, dateTimeString.length - 1),
            );
            return (
              <ForecastCard
                key={forecast.dt}
                day={plainDateTime.toLocaleString("en-US", {
                  weekday: "long",
                })}
                time={plainDateTime.toLocaleString("en-US", {
                  timeStyle: "short",
                })}
                slug={WEATHER_CONDITIONS[forecast.weather[0].description]}
                temperature={`${Math.round(forecast.main.temp)} °C`}
              />
            );
          })}
        </div>
        <button
          onClick={slideNext}
          className="absolute right-1 top-20 min-w-7 cursor-pointer z-10"
        >
          <img src={nextButton} alt="previous button" className="size-7" />
        </button>
      </div>
      <ForecastCardDetails forecastWeather={forecastWeather} />
    </>
  );
}
