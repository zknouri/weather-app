import { useEffect, useState } from "react";

import { WEATHER_CONDITIONS } from "../lib/constants.js";
import WeatherIcon from "./WeatherIcon.jsx";
import { getBeaufortWindScale, getWindIconSlug } from "../utils/utils.js";
import ForecastDetailsItem from "./ForecastDetailsItems.jsx";

export default function ForecastCardDetails({ forecastWeather }) {
  const pressureIcon =
    forecastWeather[0].main.pressure > 1010 ? "pressure-high" : "pressure-low";
  const windDirection = getWindIconSlug(forecastWeather[0].wind.deg);
  const beaufortWindScale = getBeaufortWindScale(forecastWeather[0].wind.speed);
  const [windIconSrc, setWindIconSrc] = useState("");

  useEffect(() => {
    import(
      `../../node_modules/@meteocons/svg/fill/${windDirection.slug}.svg`
    ).then((mod) => setWindIconSrc(mod.default));
  }, [windDirection]);

  return (
    <div className="flex justify-center flex-wrap m-1 p-1 w-auto h-auto bg-sky-400 rounded-sm text-stone-50">
      <ForecastDetailsItem
        name={"Condition"}
        slug={WEATHER_CONDITIONS[forecastWeather[0].weather[0].description]}
        value={forecastWeather[0].weather[0].description}
        unit=""
      />
      <ForecastDetailsItem
        name={"Feels Like"}
        slug={"thermometer-celsius"}
        value={Math.round(forecastWeather[0].main.feels_like)}
        unit="°C"
      />
      <ForecastDetailsItem
        name={"Pressure"}
        slug={pressureIcon}
        value={forecastWeather[0].main.pressure}
        unit="hPa"
      />
      <ForecastDetailsItem
        name={"Humidity"}
        slug={'humidity'}
        value={forecastWeather[0].main.humidity}
        unit="%"
      />
      <ForecastDetailsItem
        name={"Dew Point"}
        slug={'thermometer-raindrop'}
        value={Math.round(forecastWeather[0].main.dew_point)}
        unit="°C"
      />
      <ForecastDetailsItem
        name={"Visibility"}
        slug={'mist'}
        value={forecastWeather[0].visibility / 1000}
        unit="Km"
      />
      <ForecastDetailsItem
        name={"Wind"}
        slug={'wind'}
        value={Math.round(forecastWeather[0].wind.speed)}
        unit="Km/h"
      />
      <ForecastDetailsItem
        name={"Gusts"}
        slug={'wind'}
        value={Math.round(forecastWeather[0].wind.gust)}
        unit="Km/h"
      />
      <ForecastDetailsItem
        name={"Beaufort Scale"}
        slug={beaufortWindScale.slug}
        value={beaufortWindScale.description}
        unit=""
      />
      <ForecastDetailsItem
        name={"Wind Direction"}
        slug={windDirection.slug}
        value={`${windDirection.direction} - ${forecastWeather[0].wind.deg}`}
        unit="°"
      />
    </div>
  );
}
