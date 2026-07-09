import StatCard from "./StatCard";
import humidity from "@meteocons/svg/fill/humidity.svg";
import wind from "@meteocons/svg/fill/wind.svg";
import pressureHigh from "@meteocons/svg/fill/pressure-high.svg";
import mist from "@meteocons/svg/fill/mist.svg";

export default function WeatherStatsGrid({weatherData}) {

  const weatherValues = {...weatherData}
  return (
    <div className="grid grid-cols-3 justify-items-stretch bg-sky-400 rounded-sm p-1 m-1">
      <StatCard title="Humidity" value={weatherValues.main.humidity} icon={humidity} unit='%'/>
      <StatCard title="Wind Speed" value={weatherValues.wind.speed} icon={wind} unit=' km/h'/>
      <StatCard title="Pressure" value={weatherValues.main.pressure} icon={pressureHigh} unit=' hPa'/>
      <StatCard title="Visibility" value={weatherValues.visibility / 1000} icon={mist} unit=' km'/>
    </div>
  );
}
