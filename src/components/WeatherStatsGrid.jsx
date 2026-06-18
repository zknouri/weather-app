import StatCard from "./StatCard";
import humidity from "@meteocons/svg/fill/humidity.svg";
import wind from "@meteocons/svg/fill/wind.svg";
import pressureHigh from "@meteocons/svg/fill/pressure-high.svg";
import uvIndex from "@meteocons/svg/fill/uv-index.svg";

export default function WeatherStatsGrid() {
  return (
    <div className="grid grid-cols-3 justify-items-stretch bg-sky-400 rounded-sm p-1 m-1">
      <div className="p-1 m-1 min-h-32 min-w-32 border-2 rounded-md text-stone-50  font-semibold">
        <p className="text-xl">Humidity</p>
        <div className="flex items-center relative h-1/2">
          <p className="text-2xl">50%</p>
          <img
            src={humidity}
            alt="humidity logo"
            className="size-24 absolute -right-4 top-2 "
          />
        </div>
      </div>
      <div className="p-1 m-1 min-h-32 min-w-32 border-2 rounded-md text-stone-50  font-semibold ">
        <p className="text-xl">Wind</p>
        <div className="flex items-center relative h-1/2">
          <img
            src={wind}
            alt="humidity logo"
            className="size-24 absolute -right-4 top-2 "
          />
          <p className="text-2xl">13 km/h</p>
        </div>
      </div>
      <div className="p-1 m-1 min-h-32 min-w-32 border-2 rounded-md text-stone-50  font-semibold ">
        <p className="text-xl">Pressure</p>
        <div className="flex items-center relative h-1/2">
          <img
            src={pressureHigh}
            alt="humidity logo"
            className="size-24 absolute -right-4 top-2 "
          />
          <p className="text-2xl">1010 hPa</p>
        </div>
      </div>
      <div className="p-1 m-1 min-h-32 min-w-32 border-2 rounded-md text-stone-50  font-semibold ">
        <p className="text-xl">UV Index</p>
        <div className="flex items-center relative h-1/2">
          <img
            src={uvIndex}
            alt="humidity logo"
            className="size-24 absolute -right-4 top-2 "
          />
          <p className="text-2xl">8</p>
        </div>
      </div>
    </div>
  );
}
