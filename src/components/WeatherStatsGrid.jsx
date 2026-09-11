import { useEffect, useState } from "react";

import humidity from "@meteocons/svg/fill/humidity.svg";
import wind from "@meteocons/svg/fill/wind.svg";
import pressureHigh from "@meteocons/svg/fill/pressure-high.svg";
import pressureLow from "@meteocons/svg/fill/pressure-low.svg";
import mist from "@meteocons/svg/fill/mist.svg";
import thermoCelcius from "@meteocons/svg/fill/thermometer-celsius.svg";
import sunrise from "@meteocons/svg/fill/sunrise.svg";
import sunset from "@meteocons/svg/fill/sunset.svg";

import StatCard from "./StatCard.jsx";
import { getWindIconSlug, getBeaufortWindScale } from "../utils/utils.js";

export default function WeatherStatsGrid({ weatherData, isPending }) {
  const [windIconSrc, setWindIconSrc] = useState("");
  const [beaufortWindIconSrc, setBeaufortWindIconSrc] = useState({
    description: "",
    slug: "",
  });

  const weatherValues = { ...weatherData };
  const windDirection = getWindIconSlug(weatherValues.wind?.deg);
  const beaufortWindScale = getBeaufortWindScale(weatherValues.wind?.speed);

  useEffect(() => {
    if (windDirection) {
      import(
        `../../node_modules/@meteocons/svg/fill/${windDirection?.slug}.svg`
      ).then((mod) => setWindIconSrc(mod.default));
    }
  }, [windDirection]);

  useEffect(() => {
    if (beaufortWindScale) {
      import(
        `../../node_modules/@meteocons/svg/fill/${beaufortWindScale?.slug}.svg`
      ).then((mod) => setBeaufortWindIconSrc(mod.default));
    }
  }, [beaufortWindScale]);

  if (isPending) {
    return (
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-9 2xl:grid-cols-10 justify-items-stretch bg-sky-400 rounded-sm p-1 m-1">
        <StatCard isPending={isPending} />
        <StatCard isPending={isPending} />
        <StatCard isPending={isPending} />
        <StatCard isPending={isPending} />
        <StatCard isPending={isPending} />
        <StatCard isPending={isPending} />
        <StatCard isPending={isPending} />
        <StatCard isPending={isPending} />
        <StatCard isPending={isPending} />
      </div>
    );
  }

  const pressureIcon =
    weatherValues.main.pressure > 1010 ? pressureHigh : pressureLow;
  const sunriseTime = Temporal.Instant.fromEpochMilliseconds(
    weatherData.sys.sunrise * 1000,
  ).toString();
  const sunsetTime = Temporal.Instant.fromEpochMilliseconds(
    weatherData.sys.sunset * 1000,
  ).toString();
  const sunrisePlainTime = Temporal.PlainTime.from(
    sunriseTime.slice(10, sunriseTime.length - 1),
  );
  const sunsetPlainTime = Temporal.PlainTime.from(
    sunsetTime.slice(10, sunsetTime.length - 1),
  );

  return (
    <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-9 2xl:grid-cols-10 justify-items-stretch bg-sky-400 rounded-sm p-1 m-1">
      <StatCard
        title="Sunrise"
        value={sunrisePlainTime.toLocaleString("en-US", { timeStyle: "short" })}
        icon={sunrise}
        unit=""
        className="size-16"
        isPending={isPending}
      />
      <StatCard
        title="Sunset"
        value={sunsetPlainTime.toLocaleString("en-US", { timeStyle: "short" })}
        icon={sunset}
        unit=""
        className="size-16"
        isPending={isPending}
      />
      <StatCard
        title="Feels Like"
        value={Math.round(weatherValues.main.feels_like)}
        icon={thermoCelcius}
        unit=" °C"
        className="size-16"
        isPending={isPending}
      />
      <StatCard
        title="Humidity"
        value={weatherValues.main.humidity}
        icon={humidity}
        unit="%"
        className="size-16"
        isPending={isPending}
      />
      <StatCard
        title="Wind Speed"
        value={Math.round(weatherValues.wind.speed)}
        icon={wind}
        unit=" km/h"
        className="size-16"
        isPending={isPending}
      />
      <StatCard
        title="Wind Direction"
        value={`${windDirection.direction} - ${weatherValues.wind.deg} `}
        icon={windIconSrc}
        unit=" °"
        className="size-16"
        isPending={isPending}
      />
      <StatCard
        title="Beaufort Wind Scale"
        value={beaufortWindScale.description}
        icon={beaufortWindIconSrc}
        unit=""
        className="size-16"
        isPending={isPending}
      />
      <StatCard
        title="Pressure"
        value={weatherValues.main.pressure}
        icon={pressureIcon}
        unit=" hPa"
        className="size-16"
        isPending={isPending}
      />
      <StatCard
        title="Visibility"
        value={Math.round(weatherValues.visibility / 1000)}
        icon={mist}
        unit=" km"
        className="size-16"
        isPending={isPending}
      />
    </div>
  );
}
