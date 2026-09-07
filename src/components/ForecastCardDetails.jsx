import { useEffect, useState } from "react";

import { WEATHER_CONDITIONS } from "../lib/constants.js";
import WeatherIcon from "./WeatherIcon.jsx";
import { getBeaufortWindScale, getWindIconSlug } from "../utils/utils.js";
import ForecastDetailsItem from "./ForecastDetailsItems.jsx";

export default function ForecastCardDetails({ forecastDetails, forecastDetailsRef }) {
  const [windIconSrc, setWindIconSrc] = useState("");
  
  const windDirection = getWindIconSlug(forecastDetails?.wind.deg);

  useEffect(() => {
    if(windDirection){
      import(
      `../../node_modules/@meteocons/svg/fill/${windDirection.slug}.svg`
    ).then((mod) => setWindIconSrc(mod.default));
    }
    
  }, [windDirection]);

  if(!forecastDetails){
    return <div ref={forecastDetailsRef} className="flex justify-center flex-wrap m-1 p-1 w-auto h-auto bg-sky-400 rounded-sm text-stone-50 animate-pulse"><p>Select a forecast to see more details...</p></div>;
  }
  
  const pressureIcon =
    forecastDetails.main.pressure > 1010 ? "pressure-high" : "pressure-low";
  const beaufortWindScale = getBeaufortWindScale(forecastDetails.wind.speed);


  return (
    <div ref={forecastDetailsRef} className="flex justify-center flex-wrap m-1 p-1 w-auto h-auto bg-sky-400 rounded-sm text-stone-50 animate-fade-in-scale">
      <ForecastDetailsItem
        name={"Condition"}
        slug={WEATHER_CONDITIONS[forecastDetails.weather[0].description]}
        value={forecastDetails.weather[0].description}
        unit=""
      />
      <ForecastDetailsItem
        name={"Feels Like"}
        slug={"thermometer-celsius"}
        value={Math.round(forecastDetails.main.feels_like)}
        unit="°C"
      />
      <ForecastDetailsItem
        name={"Pressure"}
        slug={pressureIcon}
        value={forecastDetails.main.pressure}
        unit="hPa"
      />
      <ForecastDetailsItem
        name={"Humidity"}
        slug={'humidity'}
        value={forecastDetails.main.humidity}
        unit="%"
      />
      <ForecastDetailsItem
        name={"Dew Point"}
        slug={'thermometer-raindrop'}
        value={Math.round(forecastDetails.main.dew_point)}
        unit="°C"
      />
      <ForecastDetailsItem
        name={"Visibility"}
        slug={'mist'}
        value={forecastDetails.visibility / 1000}
        unit="Km"
      />
      <ForecastDetailsItem
        name={"Wind"}
        slug={'wind'}
        value={Math.round(forecastDetails.wind.speed)}
        unit="Km/h"
      />
      <ForecastDetailsItem
        name={"Gusts"}
        slug={'wind'}
        value={Math.round(forecastDetails.wind.gust)}
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
        value={`${windDirection.direction} - ${forecastDetails.wind.deg}`}
        unit="°"
      />
    </div>
  );
}
