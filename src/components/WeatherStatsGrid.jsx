import StatCard from "./StatCard";
import humidity from "@meteocons/svg/fill/humidity.svg";
import wind from "@meteocons/svg/fill/wind.svg";
import pressureHigh from "@meteocons/svg/fill/pressure-high.svg";
import uvIndex from "@meteocons/svg/fill/uv-index.svg";
import mist from "@meteocons/svg/fill/mist.svg";

export default function WeatherStatsGrid({weatherData}) {

  const weatherValues = {...weatherData.data.values}
  return (
    <div className="grid grid-cols-3 justify-items-stretch bg-sky-400 rounded-sm p-1 m-1">
      <StatCard title="Humidity" value={weatherValues.humidity} icon={humidity} unit='%'/>
      <StatCard title="Wind Speed" value={weatherValues.windSpeed} icon={wind} unit=' km/h'/>
      <StatCard title="Pressure" value={weatherValues.pressureSeaLevel} icon={pressureHigh} unit=' hPa'/>
      <StatCard title="UV Index" value={weatherValues.uvIndex} icon={uvIndex} unit=''/>
      <StatCard title="Visibility" value={weatherValues.visibility} icon={mist} unit=' km'/>
    </div>
  );
}
